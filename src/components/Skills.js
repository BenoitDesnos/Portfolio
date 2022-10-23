import aboutData from "../data/about.json";
function Skills({ ref }) {
  return (
    <section className="about">
      <ul id="1" ref={ref}>
        {aboutData.map((element) => (
          <li key={element.header} className="about__item">
            <img
              src={element.logo}
              alt="decor d'item"
              className="about__item__logo"
            />
            <h3 className="about__item__header">{element.header}</h3>
            <p className="about__item__description">{element.description}</p>
            {element.images &&
              element.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  className="about__item__images"
                  alt="compétences"
                />
              ))}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
