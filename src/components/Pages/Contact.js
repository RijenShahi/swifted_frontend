import React from 'react'
import Footer from '../Frame/Footer'
import home from '../../images/swB.png'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Contact() {
  return (
    <Container>
      <div className="contactCard">
        <h1><b>SWIFTED DROPSHIPMENT</b></h1>
        <h2 className="text-center">Choice of clothes. Know more about us...</h2>
        <br />
        <p className="text-center">We are the ecommerce dropshipping site mainly focused in clothing. We appreciate all kinds of clothes categories like jeans, shirts, t-shirts, jackets, joggers and much more</p>

        <img src={home} className="img__sec" />
      </div>
      <div class="row m-2 text-center contactCard">
      <div class ="card border-primary mb-3 m-3 col-3">
      <div class ="card-header">
      <h5><b>Members:</b></h5>
      </div>
      <ul class ="list-group list-group-flush">
      <li class ="list-group-item">Rijen Shahi</li>
      <li class ="list-group-item">Prayash Kumar Shrestha</li>
      <li class ="list-group-item">Khadga Narayan Chaudhari</li>
      <li class ="list-group-item">Birendra Mahara</li>
      <li class ="list-group-item">Shrijan Kumar Budathoki</li>
      </ul>
      </div>

      <div class ="card border-primary mb-3 m-3 col-3">
      <div class ="card-header">
      <h5><b>Contact Number:</b></h5>
      </div>
      <ul class ="list-group list-group-flush">
      <li class ="list-group-item">9818189349</li>
      <li class ="list-group-item">9860605774</li>
      <li class ="list-group-item">9841768397</li>
      <li class ="list-group-item">9860897265</li>
      <li class ="list-group-item">9813768256</li>
      </ul>
      </div>

      <div class ="card border-primary mb-3 m-3 col-3">
      <div class ="card-header">
      <h5><b>Email:</b></h5>
      </div>
      <ul class ="list-group list-group-flush">
      <li class ="list-group-item">hrizexshahi@gmail.com</li>
      <li class ="list-group-item">sthaprayash09@gmail.com</li>
      <li class ="list-group-item">khadga07@gmail.com</li>
      <li class ="list-group-item">mbirendra@gmail.com</li>
      <li class ="list-group-item">shrijanyg@gmail.com</li>
      </ul>
      </div>
      </div>
    </Container>
  )
}

export default Contact
