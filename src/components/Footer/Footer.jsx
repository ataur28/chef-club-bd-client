import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer-section'>
                <div className='footer-about'>
                    <h3 >About Chef Club Community</h3>
                    <p>This is a food community that has a foundation of sharing wisdom, recipes, ideas, love and more through social media, we will use all of the latest social media to make sure our Chef Club BD community grows</p>
                </div>
                <div className='footer-contact'>
                    <h4>Contact us via phone or email</h4>
                    <p><span>Tel: </span>1-555-555-5555</p>
                    <p><span>Email: </span>info@gmail.com</p>
                </div>
                <div className='footer-follow'>
                    <h4>Follow us</h4>
                    <div>
                        <Nav.Link href="#" className='footer-icon'><FaGoogle></FaGoogle></Nav.Link>
                        <Nav.Link href="#" className='footer-icon'><FaFacebookF></FaFacebookF></Nav.Link>
                        <Nav.Link href="#" className='footer-icon'><FaTwitter></FaTwitter></Nav.Link>
                        <Nav.Link href="#" className='footer-icon'><FaInstagram></FaInstagram></Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;