function footerComponent(el) {
  const footerEl = document.createElement("div");

  footerEl.innerHTML = `<section class="footer">
  <div class="footer__elements-contaier">
    <img class="footer__img" src="./img/logo-JG-blanco.png" alt="">
 
  <div class="footer__links-container">
    <a class="footer__link-title" href="https://www.instagram.com/joaquingiacusa">Instragram <img class="footer__link-img" src="./img/instagram.svg"></a>
    <a class="footer__link-title" href="https://www.linkedin.com">Linkedin <img class="footer__link-img"  src="./img/linkedin.svg"></a>
    <a class="footer__link-title" href="https://www.github.com">Github <img class="footer__link-img"  src="./img/github.svg"></a>
  </div> 
 </div>
</section>`;

  el.appendChild(footerEl);
}
