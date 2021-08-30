function addCardServices(params) {
  const containerCard = document.querySelector(".services__card-container");
  const templateServices = document.querySelector("#services__template");

  templateServices.content.querySelector(".services__card-title").textContent =
    params.serviciosTitle;

  templateServices.content.querySelector(".services__card-text").textContent =
    params.serviciosDescripcion;

  templateServices.content.querySelector(".services__card-img").src =
    params.serviciosImg;

  const clone = document.importNode(templateServices.content, true);
  containerCard.appendChild(clone);
}

function buscarImgEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function getServicesCMS() {
  return fetch(
    "https://cdn.contentful.com/spaces/gpsqgcgq175j/environments/master/entries?access_token=i4jjQpKiBtZY0oxuvs9hAIoQx4XtRvOM-IN39CG8Mu8&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const ServCollection = data.items.map((item) => {
        /* pongo funcion para buscar img */
        const image = buscarImgEnAsset(item.fields.serviciosImg.sys.id, data);

        return {
          serviciosTitle: item.fields.serviciosTitle,
          serviciosDescripcion: item.fields.serviciosDescripcion,
          serviciosImg: image.fields.file.url,
        };
      });
      return ServCollection;
    });
}

function services() {
  getServicesCMS().then((res) => {
    for (const r of res) {
      addCardServices(r);
    }
  });
}

services();
