import React, { Component} from 'react';
import './App.css';
import front from './front.png'
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Frontimage from './asset/frontimage.png';
import logo from './asset/tradebakerzlogo.png';
import top from './asset/top.png';
import About from './About.js';
import Design from './Design.js';
import ReactnativeTemplate from './ReactnativeTemplate.js';
import UnlimitedProducts from './UnlimitedProducts.js';
import TopSection from "./TopSection.js";
import PaymentGateways from './PaymentGateways';
import Packages from './Packages.js';
import Screenshots from "./Screenshots";
import DemoApps from "./DemoApps";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Copyright from "./Copyright";
import TopButton from "./TopButton";
import ReactDOM from 'react-dom';


let lastScrollY = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            offset: 0,
            show: true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);

        var rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
        this.setState({
            offset: rect
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        console.log("scroll",lastScrollY)
        if(lastScrollY > this.state.height){
            let x= document.getElementById("btn");
            x.style.display= 'inline';
        }
        else{
            let x= document.getElementById("btn");
            x.style.display= 'none';
        }
    }

  render() {
        console.log(this.state.offset);
    return (


        <div>

            <div style={{position: 'fixed'}}>
            <p> {this.state.width} </p>
            <p> {this.state.height} </p>
            </div>
            <TopSection/>
            <About/>
            <Design/>
            <ReactnativeTemplate/>
            <UnlimitedProducts/>
            <PaymentGateways/>
            <Packages/>
            <Screenshots/>
            <DemoApps/>
            <ContactUs/>
            <Footer/>
            <Copyright/>
            <div className="css3-notification">
                <a href="#top">
                    <img className="topbutton" id="btn" src={top} width="50px"/>

                </a>
            </div>
        </div>

    );
  }
}

export default App;
