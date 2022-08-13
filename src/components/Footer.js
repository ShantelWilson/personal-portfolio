import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/pvamu.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';


export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} >
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/shantelwilson/"><img src={navIcon1} /></a>
                            <a href="https://github.com/ShantelWilson"><img src={navIcon2} /></a>
                        
                        </div>
                        <p>Copyright 2022. Shantel Wilson All Rights Reserved</p>
                        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgjbae1212%2Fhit-counter&count_bg=%23983ACF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
                    </Col>
                </Row>

            </Container>
        </footer>
 
 )
}