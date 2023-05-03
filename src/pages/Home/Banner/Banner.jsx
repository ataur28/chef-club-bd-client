import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Chef Club BD</h3>
                        <p>Chef Club BD is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Chef Club BD</h3>
                        <p>Chef Club BD is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Chef Club BD</h3>
                        <p>
                        Chef Club BD is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;