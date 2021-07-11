import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import user from './../assets/user.png'
import reaction from './../assets/reaction.png'
import chess from './../assets/chess.png'
import reddit from './../assets/reddit.png'
import blog from './../assets/blog.png'
import bird from './../assets/bird.png'
import styled from 'styled-components'
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'

const Styled = styled.div`
    .card{
        height: 100%;
        background: linear-gradient(to bottom right, #1a2332 40% ,#111927 39%);
        border: none;
        border-radius: 5px;
        color: white;
    }
    h1{
        color: white;
        text-align: center;
        margin-bottom: 30px;
        margin-top:30px;
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
                            <Button href="https://github.com/DhavalKotak/portfolio" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/portfolio" variant="outline-success"><AiFillEye/>  Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={blog} alt="img"/> Blog</Card.Title>
                            <Card.Text>My Blog website where I post TryHackMe Writeups</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/dhavalkotak.github.io" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/" variant="outline-success"><AiFillEye/>  Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={chess} alt="img"/> Chess</Card.Title>
                            <Card.Text>Multiplayer chess game using React and SocketIO</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/chess" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/chess" variant="outline-success"><AiFillEye/>  Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6} xs={10} className="project"> 
                    <Card>
                        <Card.Body>
                            <Card.Title><img src={reddit} alt="img"/> Reddit Meme Generator</Card.Title>
                            <Card.Text>A react web application to fetch memes from reddit.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href="https://github.com/DhavalKotak/reddit-memeapi-app" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/reddit-memeapi-app" variant="outline-success"><AiFillEye/>  Demo</Button> 
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
                            <Button href="https://github.com/DhavalKotak/Reaction-Test" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/Reaction-Test" variant="outline-success"><AiFillEye/>  Demo</Button> 
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
                            <Button href="https://github.com/DhavalKotak/Flappy-Bird" variant="outline-primary"><BsCodeSlash/> Source</Button>&nbsp;
                            <Button href="https://dhavalkotak.github.io/Flappy-Bird" variant="outline-success"><AiFillEye/>  Demo</Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
    </Styled>
  </React.Fragment>
    );
}
