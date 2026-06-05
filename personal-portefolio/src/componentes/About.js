import { Container, Row, Col } from "react-bootstrap";

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
                Sou um developer apaixonado por tecnologia, código e resolução
                de problemas. Construo aplicações web modernas e adoro aprender
                coisas novas todos os dias. Bem-vindo ao meu terminal.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              {/* Para já usamos uma imagem provisória. Podes meter aqui a tua foto real */}
              <img
                src="https://via.placeholder.com/400"
                alt="João Taveira"
                className="profile-pic"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
