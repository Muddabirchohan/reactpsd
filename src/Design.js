import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import intuitivedesign from './asset/doublecell.png'


class Design extends Component {
    render() {
        return (

            <div className="intuitive-design">

                <Row>
                    <Col lg={6} sm={12} className="intuitive-design-bg">
                        <h1>
                            <b>
                                <span> INTUITIVE </span> DESIGN  <br/> AND  <span> UX FLOWS  </span> </b>
                        </h1>
                        <p>
                         how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        </p>
                     </Col>
                    <Col lg={6} sm={12}>
                        <img src={intuitivedesign}/>
                    </Col>
                </Row>
            </div>


        );
    }
}

export default Design;
