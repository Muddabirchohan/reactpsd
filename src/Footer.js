import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import logo from './asset/tradebakerzlogo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col lg={12}>
                        <img src={logo}/>
                    </Col>

                </Row>
            </div>


        );
    }
}

export default Footer;
