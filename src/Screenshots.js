import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import screenshot from './asset/screenshot.png';

class Screenshots extends Component {
    render() {
        return (

            <div className="screenshots">
                <h1> <b> SCREENSHOTS </b> </h1>
                <Row>
                    <Col lg={12}>
                        <img src={screenshot} />
                    </Col>

                </Row>
            </div>

        );
    }
}

export default Screenshots;
