import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTerminal, FaInstagram } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        {/* Atualizamos o Logo para ir para a Home */}
        <Navbar.Brand as={Link} to="/">
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
            {/* Trocamos os hrefs pelos componentes 'Link' e 'to' */}
            <Nav.Link
              as={Link}
              to="/"
              className={
                location.pathname === "/" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={
                location.pathname === "/skills"
                  ? "active navbar-link"
                  : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
          </Nav>

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
            <button className="vvd" onClick={() => navigate("/contact")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
