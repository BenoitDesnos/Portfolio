/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ContactsForm from "./ContactsForm";

function Contacts() {
  return (
    <section className="contacts contacts--animation">
      <div className="contacts__info">
        <div className="grid__info">
          <h4>ADRESSE</h4>
          <p>114 rue guillaume janvier, 34070 Montpellier.</p>
        </div>

        <div className="grid__info">
          <h4>TELEPHONE</h4>
          <a href="tel:0767867799"> (+33)7.67.86.77.99</a>
        </div>

        <div className="grid__info">
          <h4>EMAIL</h4>
          <a href="mailto:benoit.desnos66@gmail.com">
            benoit.desnos66@gmail.com
          </a>
        </div>

        <div className="grid__info">
          <h4>LINKEDIN</h4>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/benoit-desnos-727ab6158/"
          >
            Mon profil Linkedin
          </a>
        </div>

        <div className="grid__info">
          <h4>GITHUB</h4>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BenoitDesnos"
          >
            Mon GitHub
          </a>
        </div>
      </div>
      <div className="contacts__map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.7297424632397!2d3.864952215776109!3d43.596238664129714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afb49de74f51%3A0x1e64d83a685b07cb!2s114%20Rue%20Guillaume%20Janvier%2C%2034070%20Montpellier!5e1!3m2!1sfr!2sfr!4v1666542376223!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ style: "border:0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactsForm />
    </section>
  );
}

export default Contacts;
