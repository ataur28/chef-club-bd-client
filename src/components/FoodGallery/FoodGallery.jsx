import React from 'react';
import  './FoodGallery.css'
import food1 from '../../../public/food1.jpg'
import food2 from '../../../public/food2.jpg'
import food3 from '../../../public/food3.jpg'
import food4 from '../../../public/food4.jpg'



const FoodGallery = () => {
    return (
        <div>
            <h2 className='gallery-title'>Food Gallery</h2>
            <div className='gallery'>
                <img src={food1} className='gallery-img' alt="" />
                <img src={food2} className='gallery-img' alt="" />
                <img src={food3} className='gallery-img' alt="" />
                <img src={food4} className='gallery-img' alt="" />
            </div>
            <button className='see-more-gallery-btn'>See More</button>
        </div>
    );
};

export default FoodGallery;