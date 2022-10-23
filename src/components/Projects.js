import projectsData from "../data/projects.json";
function Projects({ skills }) {
  return (
    <section id="2" skills={skills}>
      <ul className="projects">
        {projectsData.map((element) => (
          <li key={element.header} className="projects__item">
            <img
              src={element.background}
              alt={"background projet " + element.header}
              className="projects__item__background"
            />
            <div className="projects__item__text">
              <h3 className="projects__item__header">{element.header}</h3>
              <div className="projects__item__tags">
                {element.tags.map((tag, index) => (
                  <span key={tag + index} className="projects__item__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="projects__item__description">
                {element.description}
              </p>
              <div className="project__items__links">
                {element.links.map((link) => (
                  <div key={link} className="projects__item__link">
                    {link.includes("github.com") ? (
                      <a href={link}>
                        <i className="fa-brands fa-github"></i>
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
