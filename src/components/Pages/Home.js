import React from 'react';
import'../../App.css';
import NewArrivalCard from '../Card/NewArrivalCard'
import HomeSection from '../Frame/HomeSection';
import {Link} from 'react-router-dom';
import Cards from '../Card/Cards';
import Services from '../pages/includes/Services';
import Features from './includes/Features';
import Optics from '../images/optics.jpg';

function Home(){
    return (
        <>
            <HomeSection />
            
            {/*New Arrivals*/}
            <NewArrivalCard/>
            {/* Our Company*/}
                <section className="section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="heading">Our Company</h3>
                                <div className="underline mx-auto"></div>
                                <p className="paragraph">
                                With vision to empower both our customers and vendors for an ultimate 
                                online buying and selling experience, our earnest way to conduct 
                                business has made it easy for many savvy enterprises and companies 
                                to extend their reach using our platform. Glasswear is a leading 
                                e-commerce company. We believe in transparency and honest 
                                communication and therefore we have to only provide our customers 
                                with genuine products and campaigns that uphold high levels of 
                                quality. BE GENUINE.
                                </p>
                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                </section>

            <div>
            <img src={Optics} className="w-100 border-bottom" alt="Optics"/>
            </div>

            <Cards />

            {/* Our Services*/}
            <Services />

            

            {/*Our Features*/}
            <Features/>

        </>
    )
}

export default Home;