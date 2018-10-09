import React, { Component } from 'react';
import './App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import intuitivedesign from "./asset/doublecell.png";
import unlimited from './asset/unlimitedproductsimage.png'



class UnlimitedProducts extends Component {
    render() {
        return (

            <div className="unlimited-products">
                <Row>

                    <Col lg={6} sm={12}>
                        <h1>
                            <b>
                                UNLIMITED <br/> PRODUCTS WITH <br/> <span> INFINITE SCROLLING  </span> </b>
                        </h1>
                        <p>
                            how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        </p>
                    </Col>

                    <Col lg={6} sm={12}>
                        <img src={unlimited}/>
                    </Col>

                </Row>
            </div>


        );
    }
}

export default UnlimitedProducts;
