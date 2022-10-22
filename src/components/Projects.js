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
            {element.links.map((link) => (
              <a
                href={link}
                className="projects__item__links"
                alt="liens projets"
              >
                {link.includes("github") ? (
                  <i class="fa-brands fa-square-github"></i>
                ) : (
                  <i class="fa-light fa-link"></i>
                )}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
