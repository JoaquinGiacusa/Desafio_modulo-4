function main() {
  welcome();

  const headerEl = document.querySelector(".header-container-component");
  headerComponent(headerEl);

  const formEL = document.querySelector(".form-container-component");
  formComponent(formEL);

  const footerEL = document.querySelector(".footer-container-component");
  footerComponent(footerEL);
}

main();
