import React, { Component }  from 'react';
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/sentiment-analysis.png";
import projImg2 from "../assets/img/coins.png";
import projImg3 from "../assets/img/Guessing-Game-Python.png";
import projImg4 from "../assets/img/cryptography.png";
import projImg5 from "../assets/img/sarcasm.png";



export const Projects = () => {

    const projects = [
        {
            title: "Twitter Sentiment Analysis",
            description: "Sentiment analysis project using tweets ",
            imgUrl: projImg1,
        },
        {
            title: "Minimum Coins Needed",
            description: "A Python program that returns the least number of coins.",
            imgUrl: projImg2,
        },
        {
            title: "Python Guessing game",
            description: "A Python guessing game ",
            imgUrl: projImg3,
        },
        {
            title: "ROT13 Cryptography",
            description: "C++ Cryptography program for class",
            imgUrl: projImg4,
        },
        {
            title: "Sarcasm Detection Model Using Reddit Comments",
            description: "Deep Learning Keras Model  ",
            imgUrl: projImg5,
        },
        
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <p>Here is a list and description of my most recent projects!</p>
                    <Tab.Container id="projects-tabs " defaultActivityKey="first">
                    <Nav variant="pills" className="nav-pills mb justify-content-center align-items-center" id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                             {
                                projects.map((project, index) => {
                                 return(
                                     <ProjectCard
                                        key={index}
                                        {...project}
                                     />
                                 )
                             })

                             }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">More to come!</Tab.Pane>
                        <Tab.Pane eventKey="third">More to come!</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )

}