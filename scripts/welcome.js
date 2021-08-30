function addContent(params) {
  const textWelcome = document.querySelector(".welcome__text");
  textWelcome.textContent = params.title;

  const aboutMeTitle = document.querySelector(".about-me__title");
  aboutMeTitle.textContent = params.titleAboutMe;

  const aboutMeText = document.querySelector(".about-me__text");
  aboutMeText.textContent = params.textAboutMe;
}

function getContentCMS() {
  return fetch(
    "https://cdn.contentful.com/spaces/gpsqgcgq175j/environments/master/entries?access_token=i4jjQpKiBtZY0oxuvs9hAIoQx4XtRvOM-IN39CG8Mu8&content_type=desafioM4"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const contentCollection = data.items.map((item) => {
        return {
          title: item.fields.welcomeText,
          titleAboutMe: item.fields.sobreMiTitulo,
          textAboutMe: item.fields.sobreMiTexto,
        };
      });
      return contentCollection;
    });
}

function welcome() {
  getContentCMS().then(function (res) {
    for (const r of res) {
      addContent(r);
    }
  });
  /*   headerComponent(document.querySelector(".header-container-component"));
  openAndCloseBurger(); */
}
