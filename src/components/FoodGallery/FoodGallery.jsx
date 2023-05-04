import React from 'react';
import food1 from '../../../public/food1.jpg'

const FoodGallery = () => {
    return (
        <div>
            <h2>Food Gallery</h2>
            <div>
                <img src={food1} alt="" />
            </div>
        </div>
    );
};

export default FoodGallery;