import { Container, Row, Col } from "react-bootstrap";
import minhaFoto from "../assets/img/myphoto.JPEG";

export const About = () => {
  return (
    <section className="about-section" id="skills">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="terminal-window">
              <span className="tagline">&gt;_ root@taveira:~$ ./whoami.sh</span>
              <h2>{`Hi! I'm João Taveira`}</h2>
              <p>
                Final-year Computer Science student at the University of Minho
                with a deep-seated interest in Cybersecurity and Network
                Systems. Currently completing my Bachelor’s degree and preparing
                to pursue a Master’s in Cybersecurity. I am also an active
                member of the Computer Science Students’ Association (Núcleo de
                Estudantes de Ciências da Computação), where I engage with the
                academic community and collaborative student initiatives. I am
                seeking an internship or junior role where I can apply my
                academic foundation in secure networking to real-world
                infrastructure, contributing to team goals while developing
                high-level technical expertise.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              {/* Para já usamos uma imagem provisória. Podes meter aqui a tua foto real */}
              <img src={minhaFoto} alt="João Taveira" className="profile-pic" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
