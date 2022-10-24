/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactsForm() {
  const form = useRef();
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");
    console.log(formMess);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.classList.add("success");
          formMess.value = "Message envoyé avec succès !";

          setTimeout(() => {
            formMess.value = "Valider";
            formMess.classList.remove("success");
          }, 3500);
        },
        (error) => {
          console.log(error.text);

          formMess.classList.add("error");
          formMess.value = "Une erreur s'est produite, veuillez réessayer";
          setTimeout(() => {
            formMess.value = "Valider";
            formMess.classList.remove("error");
          }, 3500);
        }
      );
  };
  return (
    <div className="contacts__form">
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="Name-container form-containers">
          <div className="form__imgs">
            <img src="./img/form-name.svg" alt="image" loading="lazy" />
          </div>
          <input
            type="text"
            autoComplete="off"
            id="Name"
            name="user_name"
            placeholder="Nom / Prénom / Entreprise"
            required
          />
          <div className="form__required">*</div>
        </div>

        <div className="email-container form-containers">
          <div className="form__imgs">
            <img src="./img/form-email.svg" alt="image" loading="lazy" />
          </div>
          <input
            type="email"
            autoComplete="off"
            id="Email"
            placeholder="Email"
            name="user_mail"
            required
          />
          <div className="form__required">*</div>
          <span>Email incorrect</span>
        </div>
        <div className="phone-container form-containers">
          <div className="form__imgs">
            <img src="./img/form-phone.svg" alt="image" loading="lazy" />
          </div>
          <input
            type="tel"
            autoComplete="off"
            id="tel"
            name="user_phone"
            placeholder="Téléphone"
          />
        </div>

        <div className="explications-container form-containers">
          <textarea
            name="message"
            id="explications"
            rows="10"
            cols="50"
            placeholder="Exprimez-vous !"
          ></textarea>
          <input type="hidden" name="contact_number" />
        </div>
        <input type="submit" value="Valider" className="form-message" />
      </form>
    </div>
  );
}

export default ContactsForm;
