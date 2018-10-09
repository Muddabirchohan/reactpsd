import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import reactnative1 from './asset/reactnativetempimage1.png';
import reactnative2 from './asset/reactnativetempimage2.png';




class ReactnativeTemplate extends Component {
    render() {
        return (

            <div>

                <Row className="react-native-template">
                    <Col lg={6} sm={12}>
                        <img src={reactnative1}/>
                        <img src={reactnative2}/>
                    </Col>


                    <Col lg={6} sm={12}>
                        <h1> <span> REACT NATIVE </span> <br/> TEMPLATE</h1>
                        <p>
                            how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        </p>
                    </Col>
                </Row>
            </div>


        );
    }
}

export default ReactnativeTemplate;
