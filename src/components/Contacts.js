/* eslint-disable jsx-a11y/img-redundant-alt */
function Contacts() {
  return (
    <section className="contacts contacts--animation" id="3">
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
          style={{ style: "border:0;" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contacts__form">
        <form id="contact-form">
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
          <input type="submit" value="Valider" />
        </form>
      </div>
    </section>
  );
}

export default Contacts;
