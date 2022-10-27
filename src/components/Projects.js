function Projects({ projectsData }) {
  return (
    <section>
      <ul className="projects">
        {projectsData.map((element) => (
          <li key={element.header} className="projects__item">
            <img
              src={element.thumbNail}
              alt={"background projet " + element.header}
              className="projects__item__background"
            />
            <div className="projects__item__text">
              <h3 className="projects__item__header">{element.header}</h3>
              <ul className="projects__item__tags">
                {element.tags.map((tag, index) => (
                  <li key={tag + index} className="projects__item__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="projects__item__description">
                {element.shortDescription}
              </p>
              <div className="project__items__links">
                {element.links.map((link) => (
                  <div key={link} className="projects__item__link">
                    {link.includes("github.com") ? (
                      <a href={link}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    ) : link.includes("videos") ? (
                      <a href={link}>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    ) : link.includes("maquettes") ||
                      link.includes("figma.com") ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-file"></i>
                      </a>
                    ) : (
                      <a href={link}>
                        <i className="fa-solid fa-link"></i>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
