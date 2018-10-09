import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import payment from './asset/paymentgateway.png'

class PaymentGateways extends Component {
    render() {
        return (

            <div>

                <Row className="payment-gateways">
                    <Col lg={6} sm={12}>
                        <img src={payment}/>
                    </Col>


                    <Col lg={6} sm={12} >
                        <h1> <b> <span> PAYMENT </span> GATEWAYS </b> </h1>
                        <p>
                            how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        </p>
                    </Col>
                </Row>
            </div>


        );
    }
}

export default PaymentGateways;
