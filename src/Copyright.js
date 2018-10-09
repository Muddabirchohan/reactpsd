 import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
                <Row>
                    <Col lg={12}>
                        <p> copyright license since 2012 </p>
                    </Col>

                </Row>
            </div>


        );
    }
}

export default Copyright;
