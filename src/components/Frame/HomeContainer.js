import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom';
import home from '../../images/home.png'
 
 function HomeContainer() {
     return (
        <div>
            <div className='home-container'>
                <img src={home} alt="Logo" />
            </div>
        </div>
     )
 }
 
 export default HomeContainer;
