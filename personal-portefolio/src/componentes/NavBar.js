import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTerminal, FaInstagram } from "react-icons/fa";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <FaTerminal size={30} color="#00FF41" />{" "}
          <span
            style={{
              color: "#00FF41",
              marginLeft: "10px",
              fontFamily: "monospace",
            }}
          >
            João Taveira
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* Este é o bloco único e correto para os ícones e botão lado a lado */}
          <span className="navbar-text d-flex align-items-center">
            <div className="social-icon">
              <a
                href="https://github.com/taveira60"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} color="#00FF41" />
              </a>
              <a
                href="https://linkedin.com/in/joaotaveira60/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={25} color="#00FF41" />
              </a>
              <a
                href="https://instagram.com/joaotaveira666"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={25} color="#00FF41" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
