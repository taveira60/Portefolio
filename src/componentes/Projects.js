import { Container, Row, Col } from "react-bootstrap";

import imgSO from "../assets/img/SO.png";
import imgPOO from "../assets/img/POO.png";
import imgPC from "../assets/img/PC.png";
import imgCRIPTO from "../assets/img/CRIPTO.png";
import imgREDES from "../assets/img/REDES.png";
import imgPLC from "../assets/img/PLC.png";
import imgBD from "../assets/img/BD.png";
import imgLC from "../assets/img/LC.png";
import imgport from "../assets/img/Portefolio.png";

export const Projects = () => {
  // Academic works and personal projects translated to professional English
  const academicProjects = [
    {
      title: "Operating Systems",
      description:
        "Development of a Client-Server architecture implementing process concurrency and communication primitives.",
      techStack: ["C", "Bash", "Linux", "LaTeX"],
      githubUrl: "https://github.com/taveira60/Trabalho-de-Sistemas-Operativos",
      imgUrl: imgSO,
    },
    {
      title: "Object-Oriented Programming",
      description:
        "SPOTIFUM: A complete music streaming management system structured with OOP design patterns and classes.",
      techStack: ["Java", "OOP", "LaTeX"],
      githubUrl:
        "https://github.com/taveira60/Trabalho-de-Programa-o-Orientada-aos-Objetos",
      imgUrl: imgPOO,
    },
    {
      title: "Concurrent Programming",
      description:
        "Agario: Distributed game simulation focusing on thread synchronization, message passing, and actor-model concurrency.",
      techStack: ["Erlang", "Java", "LaTeX"],
      githubUrl: "https://github.com/taveira60/Projeto-Programacao-Concurrente",
      imgUrl: imgPC,
    },
    {
      title: "Cryptography & Information Security",
      description:
        "Development of cryptographic algorithms, cipher implementation, cryptanalysis attacks, and secure decryption techniques.",
      techStack: ["Python"],
      githubUrl:
        "https://github.com/taveira60/Criptografia-e-Seguran-a-de-Informa-o",
      imgUrl: imgCRIPTO,
    },
    {
      title: "Communication Systems & Networks",
      description:
        "Network topology simulation, packet analysis, and routing protocols evaluation using Core and Wireshark.",
      techStack: ["Core", "Wireshark", "Networks", "LaTeX"],
      githubUrl: "https://github.com/taveira60/Sistemas-de-Comunica-o-e-Redes",
      imgUrl: imgREDES,
    },
    {
      title: "Language Processing & Compilers",
      description:
        "Design and implementation of a fully functional Pascal Compiler including lexical, syntactic, and semantic analysis.",
      techStack: ["Python", "Compilers", "Parsing"],
      githubUrl: "https://github.com/taveira60/PLC2025",
      imgUrl: imgPLC,
    },
    {
      title: "Databases Systems",
      description:
        "Relational database simulation, data modeling with brModelo, entity-relationship diagrams, and complex SQL querying.",
      techStack: ["SQL", "brModelo", "Modeling"],
      githubUrl: "https://github.com/taveira60/Projeto-Base-De-Dados",
      imgUrl: imgBD,
    },
    {
      title: "Computational Logic",
      description:
        "Resolution of complex logical-mathematical problems, truth tables automation, and algorithmic reasoning.",
      techStack: ["Python", "Logic", "Algorithms"],
      githubUrl: "https://github.com/taveira60/Logica-Computacional",
      imgUrl: imgLC,
    },
  ];

  const personalProjects = [
    {
      title: "Fastprices (Ongoing)",
      description:
        "An advanced pricing engine using web scrapers to gather product data, exporting to CSV, and leveraging LLMs to map and compare identical items to find the absolute cheapest option.",
      techStack: ["Python", "Scrapy", "LLM", "AI", "CSV"],
      githubUrl: "https://github.com/jts666",
      imgUrl:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Cyber Portfolio",
      description:
        "My personal reactive terminal interface designed to showcase my academic and engineering evolution in realtime.",
      techStack: ["React", "JavaScript", "CSS3", "Bootstrap"],
      githubUrl: "https://github.com/taveira60/Portefolio",
      imgUrl: imgport,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <Container>
        <div className="terminal-window mb-5">
          <span className="tagline">
            &gt;_ root@taveira:~$ ./fetch_personal_repo.py
          </span>
          <h2>&gt; PERSONAL_PROJECTS_DEVELOPED</h2>

          <Row className="mt-4">
            {personalProjects.map((project, index) => (
              <Col sm={12} md={6} key={index} className="mb-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <div className="project-card">
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="overlay-text">
                        <h3>[{project.title}]</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="click-hint mt-4">
                          &gt;_ CLICK_TO_DECRYPT_SOURCE
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>

        <div className="terminal-window">
          <span className="tagline">
            &gt;_ root@taveira:~$ ls -la /var/university/projects
          </span>
          <h2>&gt; ACADEMIC_REPOSITORIES_DETECTED</h2>

          <Row className="mt-4">
            {academicProjects.map((project, index) => (
              <Col sm={12} md={4} key={index} className="mb-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <div className="project-card">
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="overlay-text">
                        <h3>[{project.title}]</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="click-hint mt-3">
                          &gt;_ CLICK_TO_CLONE_REPO
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
