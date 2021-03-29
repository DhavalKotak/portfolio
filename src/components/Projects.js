import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import user from './../assets/user.png'
import reaction from './../assets/reaction.png'
import chess from './../assets/chess.png'
import reddit from './../assets/reddit.png'
import shower from './../assets/shower.png'
import bird from './../assets/bird.png'
import styled from 'styled-components'

const Styled = styled.div`
    .card{
        height: 100%;
        background: linear-gradient(to bottom right, black 40% ,rgb(13 0 110) 39%);
        border: none;
        border-radius: 5px;
        color: white;
        filter: drop-shadow(0 0 0.3rem rgb(2,230,188));
    }
    h1{
        color: white;
        text-align: center;
        margin-bottom: 30px;
    }
    .project{
        margin-bottom: 30px;
    }
    .row{
        justify-content: center;
    }
    .btn{
        font-weight: bold;
    }
`

export const Projects = () => {
    return (
      <React.Fragment>  
        <Styled>
            <h1>Projects</h1>
            <Row>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={user} alt="img"/> Portfolio</Card.Title>
                            <Card.Text>My portfolio website made by using React framework</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/portfolio" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/portfolio" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={chess} alt="img"/> Chess</Card.Title>
                            <Card.Text>Multiplayer chess game using React and SocketIO</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/chess" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/chess" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={reaction} alt="img"/> Reaction Test</Card.Title>
                            <Card.Text>A web application to measure your reaction time. Made by using JavaScript</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/Reaction-Test" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/Reaction-Test" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={reddit} alt="img"/> Reddit-MemeAPI-App</Card.Title>
                            <Card.Text>A react web application to fetch memes from reddit.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/reddit-memeapi-app" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/reddit-memeapi-app" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={shower} alt="img"/> Shower</Card.Title>
                            <Card.Text>Full Stack web application for streaming songs</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/shower-frontend" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/shower-frontend" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={bird} alt="img"/> Flappy Bird</Card.Title>
                            <Card.Text>The good old flappy bird game made in JavaScript.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/Flappy-Bird" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/Flappy-Bird" variant="outline-success">Live Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
    </Styled>
  </React.Fragment>
    );
}
