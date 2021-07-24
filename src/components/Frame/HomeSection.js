import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom';
import { Button } from '../Button';
 
 function HomeSection() {
     return (
        <div>
            <div className='home-container'>
                <video src="./videos/intro.mp4" autoPlay loop muted/>
                <h3>WANT TO LOOK YOUR BEST</h3>
                <p>What are you waiting for?</p>
                <Link to="/shop" className="btn btn-warning shadow">Shop Now</Link>
            </div>
        </div>
     )
 }
 
 export default HomeSection;
 