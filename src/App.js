import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Home from "./pages/home/home.component";
import { Route, Switch } from "react-router-dom";
import { Parallax } from "react-parallax";

// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";
import Songs from "./pages/songs/songs.component";
import Artworkinfo from "./pages/artworkinfo/artworkinfo.component";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
     
      {/*<MyNavbar /> <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}
         
    

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Artworkinfo />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Songs />
        </Slide>
        </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      </Container>
    <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
    
  );
};

export default App;