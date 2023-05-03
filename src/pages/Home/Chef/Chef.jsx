import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ChefData from '../ChefData/ChefData';
import './Chef.css'


const Chef = () => {
    const [chef, setChef] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <Container>
            <Container><h1 className='text-center m-4 p-4'>All Chef</h1></Container>

            <Container className='chef-item' >
                {
                    chef.map(chef => <ChefData
                    key = {chef.id}
                    chef = {chef}
                    ></ChefData>)
                }
            </Container>
        </Container>
    );
};

export default Chef;