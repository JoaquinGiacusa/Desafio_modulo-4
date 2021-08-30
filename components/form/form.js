function formComponent(el) {
  const formEl = document.createElement("div");

  formEl.innerHTML = `    <form class="form" >
  <label class="form__label">
    <h4 class="form__label__title">NOMBRE</h4><input class="form__label__input" type="text" name="name">
  </label>
  <label class="form__label">
    <h4 class="form__label__title">EMAIL</h4><input class="form__label__input" type="email" name="email">
  </label>
  <label class="form__label">
    <h4 class="form__label__title">MENSAJE</h4><textarea class="form__label__textArea" rows="10" name="mensaje"></textarea>
  </label>
  <div class="form__submit-cont">
    <button class="form__submit-button">Enviar</button>
    <p class="form__send-message">¡Su mensaje se envio correctamente!</p>
  </div>
</form>`;

  el.appendChild(formEl);

  function sendForm() {
    const myformEl = document.querySelector(".form");

    myformEl.addEventListener("submit", function (event) {
      event.preventDefault();

      const obj = {
        name: event.target.name.value,
        email: event.target.email.value,
        mensaje: event.target.mensaje.value,
      };

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: "giacusajoaquin@gmail.com",
          message: `De:${obj.name},Mail:${obj.email}, Mensaje:${obj.mensaje}`,
        }),
      });
      myformEl.reset();
      const sendMessage = document.querySelector(".form__send-message");
      sendMessage.style.display = "inherit";
    });
  }
  sendForm();
}
