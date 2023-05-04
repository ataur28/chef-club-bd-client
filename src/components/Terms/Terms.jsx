import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>A Terms & Conditions document acts as a legally binding agreement between a business and its customers.</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;