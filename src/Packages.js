import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';


class Packages extends Component {
    render() {
        return (

            <div className="packages">

                <h1> Packages </h1>

                <Row>
                    <Col lg={6}>
                        <div className="package">
                            <div className="package-content">
                                <h4> STANDARD TEMPLATE</h4>
                                <p><b> <sup>$ </sup> 69 </b></p>
                                <ul>
                                    <li><span > <b> ✓ </b> </span> Full integration with woo commerce</li>
                                    <li><span > <b> ✓ </b> </span> Full functional ios <br/> and react native template</li>
                                    <li><span> <b> ✓ </b> </span> unlimited support and updating</li>
                                    <li><span > <b> ✓ </b> </span> Default desighn theme included</li>
                                </ul>
                                <button> Buy now</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="package">
                            <div className="package-content">
                                <h4> STANDARD TEMPLATE</h4>
                                <p><b> <sup>$ </sup> 69 </b></p>
                                <ul>
                                    <li><span > <b> ✓ </b> </span> Full integration with woo commerce</li>
                                    <li><span > <b> ✓ </b> </span> Full functional ios <br/> and react native template</li>
                                    <li><span> <b> ✓ </b> </span> unlimited support and updating</li>
                                    <li><span > <b> ✓ </b> </span> Default desighn theme included</li>
                                </ul>
                                <button> Buy now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>


        );
    }
}

export default Packages;
