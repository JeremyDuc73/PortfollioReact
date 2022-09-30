import { Component } from "react";
import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import './Navbar.css'

class MyNavbar extends Component {

    render() {
        return (
        <>
        <Navbar id="navbar" expand="lg">
            <Container id="containernavbar">
                <Navbar.Brand><h1>Portfolio</h1></Navbar.Brand>
                <Row>
                    <Col xs={1}>
                    <hr id="hrnavbar"/>
                    </Col>
                </Row>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link id="buttonnavbar" to="/"><span>Accueil</span><i></i></Link></Nav.Link>
                        <Nav.Link><Link id="buttonnavbar" to="/ListeProjets"><span>Liste des projets</span><i></i></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        );
    }
}
export default MyNavbar;