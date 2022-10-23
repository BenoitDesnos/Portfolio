import projectsData from "../data/projects.json";
function Projects() {
  return (
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
              {element.tags.map((tag) => (
                <span className="projects__item__tag">{tag}</span>
              ))}
            </div>
            <p className="projects__item__description">{element.description}</p>
            <div className="project__items__links">
              {element.links.map((link) => (
                <a href={link} className="projects__item__link">
                  {link.includes("github.com") ? (
                    <a href={link}>
                      <i class="fa-brands fa-github"></i>
                    </a>
                  ) : (
                    <a href={link}>
                      <i class="fa-solid fa-link"></i>
                    </a>
                  )}
                </a>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
