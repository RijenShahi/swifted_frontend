import React from 'react';
import logo from '../../images/logo.png'

function Aboutus() {
    return (
        <div className='pgT'>




            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <img src={logo} alt="Logo" />
                    <hr />
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Swifted was founded to serve our client’s vision and provide, professional, high quality and reliable services.
                        We are leading service provider of Drop Shipping,
                        With vision to empower both our customers and vendors for an ultimate
                        online buying and selling experience, our earnest way to conduct
                        business has made it easy for many savvy enterprises and companies
                        to extend their reach using our platform.
                    </p>
                    <p>We are looking forward to partnering with you and helping your business take off.
                        You can explore our website to get more updated information or contact us directly.</p>
                </div>
            </section>
            <section className="section bg-light">


                <div className="container ">
                    <div className="row ">
                        <div className="col-md-4 text-center">
                            <i class="fas fa-gift ftr"></i>
                            <h6 className="feature-heading">GENUINE PRODUCT</h6>
                            <p >
                                Get genuin product without compromising Quality.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i class="fas fa-shield-alt ftr"></i>
                            <h6 className="feature-heading">SECURE</h6>
                            <p>
                                Get your ordered product safely to your Doorstep.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i class="far fa-money-bill-alt ftr"></i>
                            <h6 className="feature-heading">CASH ON DELIVERY</h6>
                            <p>
                                Pay when you get your delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="underline"></div>

            <section className="section bg-light bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i class="far fa-hand-paper"></i>
                            <h4 className="main-heading">Satisfaction Guaranteed</h4>
                            <p>
                                Our promise to create a better experience, whether you're shopping or are one of our many loyal oweners.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i class="fas fa-rocket far"></i>
                            <h4 className="main-heading">Fast Shipping</h4>
                            <p>
                                Get your delivery within 24 hours in Kathmandu Valley.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">


                            <i class="far fa-sun"></i>


                            <h4 className="main-heading">Payment Options</h4>


                            <p>
                                Pay with different methods
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Aboutus;