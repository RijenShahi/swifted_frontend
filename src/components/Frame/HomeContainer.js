import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom';
import home from '../../images/home.png'
//import home from '../../images/swB.png'
 
 function HomeContainer() {
     return (
        <>
            <div className='home-container'>
                <img src={home} alt="Logo"/>
            </div>
        </>
     )
 }
 
 export default HomeContainer;
