import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/shan.jpg";
import React, { Component } from 'react';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Computer Science Major','Software Engineer','Life Long Learner'];
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 10);
    const period = 500;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1 );

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animated__animated animate animate__fadeIn": ""}>
                        <span className="tagline">Welcome to my website</span>
                        <h1>{"Hi I'm Shantel . . . "}<br></br><span className="wrap">{text}</span></h1>
                        <p>I'm a student at Prairie View A&M University majoring in computer science with a concerntration in Cyber Security. I have a passion for computer science because of the creativity and innovation it allows me to have. 
                        I enjoy creating projects that can be appreciated and useful to others. I am eager to learning more about Software Engineering, working with others.Please don't hesitate to reach out and I look forward to connecting with you!</p>
                        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>

                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}