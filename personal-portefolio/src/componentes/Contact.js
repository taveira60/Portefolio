import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("EXECUTE_SEND");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText("ENCRYPTING_&_SENDING...");

    setTimeout(() => {
      setButtonText("EXECUTE_SEND");
      setStatus({ sucess: true, message: "MESSAGE_DELIVERED_SUCCESSFULLY" });
      setFormDetails({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="terminal-window">
          <span className="tagline">
            &gt;_ root@taveira:~$ ./secure_comms.sh
          </span>
          <h2>&gt; ESTABLISH_CONNECTION</h2>
          <p style={{ color: "#008F11", marginBottom: "30px" }}></p>
          <form onSubmit={handleSubmit} className="contact-form">
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.name}
                  placeholder="[ Enter_Your_Name ]"
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                  required
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="[ Enter_Your_Email ]"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
              </Col>
              <Col size={12} className="px-1">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="[ Type_Your_Message_Here... ]"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="vvd submit-btn">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={
                      status.success ? "success-msg mt-4" : "danger-msg mt-4"
                    }
                  >
                    &gt;_ SYSTEM_NOTICE: {status.message}
                  </p>
                </Col>
              )}
            </Row>
          </form>
        </div>
      </Container>
    </section>
  );
};
