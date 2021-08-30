function headerComponent(el) {
  const headerEl = document.createElement("div");

  headerEl.innerHTML = `<div class="ventana-burger">
          <div class="ventana-burger__contenido">
            <div class="ventana-burger__cerrar__container">
              <img class="ventana-burger__cerrar" src="./img/close-X.svg">
              </div>
            <div class="ventana-burger__link-contaier">
            <a class="ventana-burger__link" href="./porfolio.html">Portfolio</a>
            <a class="ventana-burger__link" href="./servicios.html">Servicios</a>
            <a class="ventana-burger__link" href="./contacto.html">Contacto</a>
          </div>
          </div>
        </div>

  <header class="header">
  <img
    class="header__img-logo"
    src="./img/logo-JG-blanco.png"
    alt="Joaquin-Giacusa"
  />
  <img class="header__img-burger" src="./img/burger.svg" />
  <div class="header__content-full-screen">
    <a class="ventana-burger__link" href="porfolio.html">Portfolio</a>
    <a class="ventana-burger__link" href="./servicios.html">Servicios</a>
    <a class="ventana-burger__link" href="./contacto.html">Contacto</a>
  </div>
</header>`;

  el.appendChild(headerEl);

  function openAndCloseBurger() {
    const burgerAbreVentEl = document.querySelector(".header__img-burger");
    const burgerCerrarVentEl = document.querySelector(
      ".ventana-burger__cerrar"
    );
    const ventanaBurgerEl = document.querySelector(".ventana-burger");

    burgerAbreVentEl.addEventListener("click", () => {
      ventanaBurgerEl.style.display = "inherit";
    });
    burgerCerrarVentEl.addEventListener("click", () => {
      ventanaBurgerEl.style.display = "";
    });
  }
  openAndCloseBurger();
}
