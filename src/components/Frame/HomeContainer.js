import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom';
//import home from '../../images/home.png'
import home from '../../images/swB.png'
import { Button } from '@material-ui/core';
 
 
function HomeContainer() {
    return (
      <div className='body-container'>
        <img src={home} className="img__main"/>
        <div className='bodyBtn'>
          <Link to="/shop">
          <Button
            className='' color="primary"
          >
            Explore More... <i class="fas fa-arrow-alt-circle-right"></i>
          </Button>
          </Link>

          <Link to="/about">
          <Button
            className='' color="secondary" varient="contained"
            
          >
            About Us <i class="fas fa-info"></i>
          </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default HomeContainer;
  