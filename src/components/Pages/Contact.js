import React from 'react'
import Footer from '../Frame/Footer'
import home from '../../images/swB.png'
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Contact() {
    return (
        <Container>
        <div>
        <h1><b>SWIFTED DROPSHIPMENT</b></h1>
        <h2 className="text-center">Choice of clothes. Know more about us...</h2>
        <br/>
        <p className="text-center">We are the ecommerce dropshipping site mainly focused in clothing. We appreciate all kinds of clothes categories like jeans, shirts, t-shirts, jackets, joggers and much more</p>
      
        <img src={home} className="img__sec"/>
      </div>
    
      </Container>
    )
}

export default Contact
