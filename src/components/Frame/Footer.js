import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <p className='footer-subscription-text'>
                                Phone: 9818189349
                            </p>
                            <p className='footer-subscription-text'>
                            Address: Sodtwarica College of IT & E-commerce, Dillibazar, Kathmandu, Nepal
                            </p>
                            <div class='social-icons'>
                                <Link
                                    class='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i class='fab fa-facebook-f' />
                                </Link>
                                <Link
                                    class='social-icon-link instagram'
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'
                                >
                                    <i class='fab fa-instagram' />
                                </Link>
                                <Link
                                    class='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <i class='fab fa-twitter' />
                                </Link>
                            </div>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Get Help</h2>
                            <Link to='/'>Delivery Information</Link>
                            <Link to='/'>Sales Terms & Conditions</Link>
                            <Link to='/'>Return & Refunds</Link>
                            <Link to='/'>Privacy Notice</Link>
                            <Link to='/'>Shopping FAQS</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Follow Us</h2>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                        {/* <div class='footer-link-items'>
                            <h2>Lets Stay in Touch</h2>
                            <p className='footer-subscription-text'>
                                Susbcribing to our mailing list you will always get latest news and updates from us.
                            </p>
                            <div className='input-areas'>
                                <form>
                                    <input
                                        className='footer-input'
                                        name='email'
                                        type='email'
                                        placeholder='your email'
                                    />
                                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>© 2021, SWIFTED Website. Made With Passion</small>
                    <small class='website-rights'>All Rights Reserved</small>


                </div>
            </section>
        </div>
    );
}

export default Footer;
