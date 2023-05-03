import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <div className='d-flex  gap-4 mt-5 bg-light p-4'>
                <div>
                    <h3 className='text-info'>About SocialChef Community</h3>
                    <p>This is a food community that has a foundation of sharing wisdom, recipes, ideas, love and more through social media, we will use all of the latest social media to make sure our Chef Club BD community grows</p>
                </div>
                <div>
                    <h4 className='text-info mb-3'>Contact us via phone or email</h4>
                    <p><span>Tel: </span>1-555-555-5555</p>
                    <p><span>Email: </span>info@gmail.com</p>
                </div>
                <div>
                    <h4 className='text-info'>Follow us</h4>
                    <div className='d-flex gap-4 text-primary align-items-center'>
                        <Nav.Link href="#"><FaGoogle></FaGoogle></Nav.Link>
                        <Nav.Link href="#"><FaFacebookF></FaFacebookF></Nav.Link>
                        <Nav.Link href="#"><FaTwitter></FaTwitter></Nav.Link>
                        <Nav.Link href="#"><FaInstagram></FaInstagram></Nav.Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;