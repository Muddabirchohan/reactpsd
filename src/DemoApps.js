import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import googleplay from './asset/googleplaysmall.png';
import apple from './asset/applesmall.png';


class DemoApps extends Component {
    render() {
        return (
            <div className="demoapps">
                <h1> DEMO APPS DOWNLOAD </h1>
                <Row>

                    <Col lg={6} sm={12}>
                        <div class="demoapps-col" style={{float: 'right'}}>
                          <p>
                            <img src={googleplay} />
                              <para> availabe on </para> <br/>
                              <span> <b> GOOGLE STORE </b> </span>
                          </p>
                        </div>
                    </Col>

                    <Col lg={6} sm={12}>
                        <div class="demoapps-col" style={{float: 'left'}}>
                            <p>
                                <img src={apple}/>
                                <para> availabe on </para> <br/>
                                <span> <b> APPLE STORE </b> </span>
                            </p>
                        </div>
                    </Col>

                </Row>
            </div>

        );
    }
}

export default DemoApps;
