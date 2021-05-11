import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
// projects
import L_ANIQUOTES from "../../assets/img/projects/aniquotes.png"
import L_CALCULATOR from "../../assets/img/projects/calculator.png"

//skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
    return (
      <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
          <Events>
          {/* Project: Aniquotes */}
          <ImageEvent
              date="10/04/2021"
              className="text-center"
              text="Aniquotes"
              src={L_ANIQUOTES}
              alt="Aniquotes"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Collects anime quotes for node.js, discord.js ! Who doesn't like a dose of anime from time to time, maybe a quote to motivate you?
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Quickly fetches anime quotes from characters, shows or randomly generated.</li>
                            <li>Made with Javascript and is an NPM package!</li>
                            <li>Best for discord bots!</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <image src={L_JAVASCRIPT}
                                  alt="JAVASCRIPT"
                                  rounded
                                  className="image-style m-1"
                                ></image>{" "}
                                JAVASCRIPT
                              </span>
                            </li>
                        </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  
                  <UrlButton
                    href="https://github.com/Yuma-Tsushima07/aniquotes"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  <UrlButton
                    href="https://www.npmjs.com/package/aniquotes-npm"
                    target="_blank"
                  >
                    NPM PACKAGE
                  </UrlButton>
                  
                </div>
              </div>
            </ImageEvent>
            </Events>
      </Timeline>
       <Timeline>
          <Events>
          {/* Project: calculator */}
          <ImageEvent
              date="11/01/2021"
              className="text-center"
              text="Calculator"
              src={L_CALCULATOR}
              alt="Calculator"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Simple calculator made with html,css and js.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Smooth slick design.</li>
                            <li>Made with Javascript , HTML and CSS</li>
                            <li>Best for children and learns to use</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <image src={L_JAVASCRIPT}
                                  alt="JAVASCRIPT"
                                  rounded
                                  className="image-style m-1"
                                ></image>{" "}
                                JAVASCRIPT
                              </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                              <span className="p-2">
                                <image src={L_HTML5}
                                  alt="HTML"
                                  rounded
                                  className="image-style m-1"
                                ></image>{" "}
                                HTML
                              </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                              <span className="p-2">
                                <image src={L_CSS3}
                                  alt="CSS"
                                  rounded
                                  className="image-style m-1"
                                ></image>{" "}
                                CSS
                              </span>
                            </li>
                        </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  
                  <UrlButton
                    href="https://github.com/Yuma-Tsushima07/calculator"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  <UrlButton
                    href="https://yuma-tsushima07.github.io/calculator/main.html"
                    target="_blank"
                  >
                    WEB CALCULATOR
                  </UrlButton>
                  
                </div>
              </div>
            </ImageEvent>
            </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;  