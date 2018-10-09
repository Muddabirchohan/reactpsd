import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import Frontimage from './asset/frontimage.png';
import logo from './asset/tradebakerzlogo.png';


class TopSection extends Component {
    render() {
        return (
            <div>
                <div className="top-section">
                    <Row>
                        <Col lg={6} sm={12}>
                            <img src={logo} width="170px"/>
                            <h1> <b> Instant WoCommerce To React Native Template </b> </h1>
                        </Col>

                        <Col lg={6} sm={12}>
                            <div>
                                <Navbar>
                                    <Navbar.Header>
                                        <Navbar.Brand>
                                            <a href="#home">React-Bootstrap</a>
                                        </Navbar.Brand>
                                    </Navbar.Header>
                                    <Nav>
                                        <NavItem eventKey={1} href="#">
                                            Home
                                        </NavItem>
                                        <NavItem eventKey={2} href="#about">
                                            About
                                        </NavItem>
                                    </Nav>
                                </Navbar>
                            </div>
                            <img src={Frontimage}/>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default TopSection;
