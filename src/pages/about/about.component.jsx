import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
              <div class="gradient-border">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </div>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Yuma-Tsushima07</strong><br />
                I am an ambitious coder, and I enjoy coding in JavaScript (mainly). I also love making websites using HTML, CSS and (of course) JS!
                <br />
                I started programming (self taught) at the age of 13. Originally, I came from the creative field ; I draw/sing/animate/make music.
                <br />
                I love drawing (I have been drawing all of my life). I play strategy games, I code and I do CTFs!  
                <br />I am also good at animation, making AMVs and image editing. My favourite game is Mindustry, followed by Flow Free and Sudoku. I love watching anime (I love Code Geass - I relate to Lelouch a lot) and I aspire to create my own anime!
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                <div>
                    <a href="https://github.com/Yuma-Tsushima07" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://discord.com/users/412641051824750611" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Discord
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;