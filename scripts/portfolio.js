function addPortfolioContent(params) {
  const containerCard = document.querySelector(".portfolio__card-container");
  const templatePortfolio = document.querySelector("#portfolio__template");

  templatePortfolio.content.querySelector(".portfolio__card__img").src =
    params.imagenPortfolio;

  templatePortfolio.content.querySelector(
    ".portfolio__card__title"
  ).textContent = params.titlePortfolio;

  templatePortfolio.content.querySelector(
    ".portfolio__card__description"
  ).textContent = params.descriptionPortfolio;

  templatePortfolio.content.querySelector(
    ".portfolio__card__link"
  ).textContent = params.linkPortfolio;
  templatePortfolio.content.querySelector(".portfolio__card__link").href =
    params.linkPortfolio;

  const clone = document.importNode(templatePortfolio.content, true);
  containerCard.appendChild(clone);
}

/* funcion para buscar imagen en el CMS */
function buscarImgEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function getContentPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/gpsqgcgq175j/environments/master/entries?access_token=i4jjQpKiBtZY0oxuvs9hAIoQx4XtRvOM-IN39CG8Mu8&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const PortfolioCollection = data.items.map((item) => {
        /* pongo funcion para buscar img */
        const image = buscarImgEnAsset(
          item.fields.imagenPortfolio.sys.id,
          data
        );

        return {
          titlePortfolio: item.fields.titlePortfolio,
          descriptionPortfolio: item.fields.descriptionPortfolio,
          linkPortfolio: item.fields.linkPortfolio,
          imagenPortfolio: image.fields.file.url,
        };
      });
      return PortfolioCollection;
    });
}

function main() {
  headerComponent(document.querySelector(".header-portfolio-container"));
  footerComponent(document.querySelector(".footer-portfolio-container"));

  getContentPortfolio().then((res) => {
    for (const p of res) {
      addPortfolioContent(p);
    }
  });
}

main();
