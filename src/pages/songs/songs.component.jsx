import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Card from 'react-bootstrap/esm/Card';
import Jumbotron from "react-bootstrap/Jumbotron";
import "./songs.styles.css";

/**
* @author
* @function Songs
**/

const Songs = (props) => {
  return(
    <div id="songs">
      <Jumbotron className="jumbo-style">

    
    <h1 className="pt-3 text-center font-details-b pb-3">SONGS</h1>
    {/* Song: Hated Person Song */}
    <Accordion>
      <Card>
      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                         Hated Person Song
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-center">
                        <Card.Body>
                          <h1>Hated Person Song</h1>
                          <strong>Date: 07/05/2021</strong>
                          <br></br>
                          <strong>Author: Yuma-Tsushima</strong>
                          <p>--------------------------------------------------------------------</p>
                          <p>
                          There was a time where I feared those I met would reject,
                            <br></br>
                            Where I thought I’d best not speak, since I’d never connect
                            <br></br>
                            I’d never find someone who thought my voice had use
                            <br></br>
                            Not a soul foreseen opposite of the glass screen
                            <br></br>
                            But soon my life turned into a shrine for useless words,
                            <br></br>
                            “It’d be so nice to speak and know for sure someone heard.
                            <br></br>
                            I’ll be alright, despite if someone gets hurt.”
                            <br></br>
                            That I liked to vow, so then why did I let myself down?
                            <br></br>
                            <br></br>
                            Right now, I know that if I go, nothing will change
                            <br></br>
                            Yes, without delay the world will spin on either way
                            <br></br>
                            “In that case, it’s okay” So I want to say,
                            <br></br>
                            But I’m void of a voice for a phrase so fake
                            <br></br>
                            I’m afraid, ‘cause I’d want to be missed, see, the sad truth is
                            <br></br>
                            I’m just an outcast trying to pass for someone strong,
                            <br></br>
                            Nothing but a coward with a hated person’s song
                            <br></br>
                            As I write from my mind, all my wonders burst in colors
                            <br></br>
                            Reaching out to be
                            <br></br>
                            <br></br>
                            Say, for instance, that the role I hold could be reassigned
                            <br></br>
                            My existence from a mold, just another design
                            <br></br>
                            It would make sense if no one regrets or minds
                            <br></br>
                            There’s no need to be if no one would miss me
                            <br></br>
                            “Selfish”, they call it, but hope is so ambivalent
                            <br></br>
                            It’s pointless to believe in something that can’t be achieved
                            <br></br>
                            I’m not alone, I tried to swear, but now I wish I hadn’t dared
                            <br></br>
                            ‘Cause now I see that fantasy cut clearly
                            <br></br>
                            <br></br>
                            So, if you can hear me, will you say you’ll wait?
                            <br></br>
                            Or hello, it’s pointless, but I’m asking all the same
                            <br></br>
                            I’m aware no one’s there, or at least, still cares
                            <br></br>
                            I can get and accept no one expects
                            <br></br>
                            Much of me, I just want to know I’m more than a ghost
                            <br></br>
                            <br></br>
                            Right now, I know that if I go, nothing will change
                            <br></br>
                            Yes, without delay the world will spin on either way
                            <br></br>
                            “In that case, it’s okay” God, I want to say,
                            <br></br>
                            But I’m void of a voice for a phrase so fake
                            <br></br>
                            I’m afraid, plain pathetic, ‘cause you see, the sad truth is
                            <br></br>
                            I’m just an outcast trying to pass for someone strong,
                            <br></br>
                            Nothing but a coward with a hated person’s song
                            <br></br>
                            Come on, talk, go and mock, this time I won’t fight
                            <br></br>
                            Cause I mean, I can’t be somebody else, right?
                            <br></br>
                            As I cry from my mind, all my wonders burst in colors,
                            <br></br>
                            Reaching out to be
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                       </Card>
                      </Accordion>
    {/* Song: Outer Science*/}
    <Accordion>
      <Card>
      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                         Self-Inflicted Achromatic
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-center">
                        <Card.Body>
                          <h1>Self-Inflicted Achromatic</h1>
                          <strong>Date: 13/03/2021</strong>
                          <br></br>
                          <strong>Author: Yuma-Tsushima</strong>
                          <br></br>
                         <p>--------------------------------------------------------------------</p>
                         <p>
                         I want to be a person just like you, don't you see?
                         <br></br>
                         I want to be a person who is still being "me"
                         <br></br>
                         It really would be nice but I'm paying a price
                         <br></br>
                         'Cause I'd really, not be me and that would not suffice
                         <br></br>
                         <br></br>
                        A dream which is an easy task I won't deny
                        <br></br>
                        But it'd be fine if people just like me would go and die
                        <br></br>
                         <br></br>
                         If I am this way I would never want to stay
                         <br></br>
                         Tens of thousands of people would be sad and cry
                         <br></br>
                         No one here wanting me, please don't say you don't agree
                         <br></br>
                         Wishing for a world hiding from my seeking eye
                         <br></br>
                         <br></br>
                         If I am this way please just wipe me into grey
                         <br></br>
                         Hundreds of millions of people would be glad and shine
                         <br></br>
                         No one here hating me, that would be so nice to see
                         <br></br>
                         But that kind of joy will never intertwine
                         <br></br>
                         <br></br>
                         Tomorrow I will still be dreaming half awake
                         <br></br>
                         And I am hoping I can disappear in such a state
                         <br></br>
                         <br></br>
                         If I'd live this way I would never want to stay
                         <br></br>
                         Hundreds of millions of people wouldn't even know
                         <br></br>
                         No one here wanting me, please don't say you don't agree
                         <br></br>
                         Would a world like that be a "yes" or be a "no"?
                         <br></br>
                         If I'd live this way and you'd wipe me into grey
                         <br></br>
                         Hundreds of millions of people wouldn't change at all
                         <br></br>
                         No one would hate on me, that would be so nice to see
                         <br></br>
                         Nothing would change 'cause I am losing where I fall
                         <br></br>
                         <br></br>
                         In the end, I know that everyone will be broken in similar ways
                         <br></br>
                         And "My Self" that's made in everyone crumbles because we are just a disgrace
                         <br></br>
                         In the end, I know that everyone will be scattered in similar ways
                         <br></br>
                         <br></br>
                         If I am this way I would never want to stay
                         <br></br>
                         Tell me, 'cause I wanna know just why you smile so much?
                         <br></br>
                         Really, when you are smiling like that
                         <br></br>
                         I will forget all the time I am sad
                         <br></br>
                         And these too, all my reasons for saying good-bye
                         <br></br>
                         They just failed me and now I am falling to cry
                         <br></br>
                         <br></br>
                         If I'd live this way and you'd wipe me into grey
                         <br></br>
                         Hundreds of millions of people wouldn't change at all
                         <br></br>
                         With something stopping me, maybe that's my chance to flee?
                         <br></br>
                         You facing me I cannot smile but just move on</p>
                          </Card.Body>
                      </Accordion.Collapse>
      </Card>
    </Accordion>
    </Jumbotron>
    
    </div>
    
   )
  }


export default Songs