import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            
            
            <div className="m-2">
              <a href="https://github.com/Yuma-Tsushima07" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Github Projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://soundcloud.com/0c7av3h4ck5" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Soundcloud Projects">
                  <i className="fab fa-soundcloud"></i> Soundcloud
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://discord.com/users/412641051824750611" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Discord">
                  <i className="fab fa-discord"></i> Discord
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;