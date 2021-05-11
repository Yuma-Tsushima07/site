import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./artworkinfo.styles.css";
const Artworkinfo = () => {
    return (
      <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">ARTWORK</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap"></Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">Artwork Projects</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">Artwork</strong>
                      <br />
                      <strong>Upcoming Projects</strong>
                      <br />
                      <strong>Duration:</strong> Present Onwards
                      <br/>
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Team Characters: </strong> Characters for the number of teams I am working with. </li>
                        <li><strong>O.C. enchancement:</strong>Making my O.C. character looking in shape.</li>
                        <li><strong>Manga Development:</strong> Development of a manga which may be released for reviews.
                        </li>
                        
                       </ul>
                      
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Artworkinfo;