import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';

const ChefData = ({ chef }) => {
    const { id, picture, name, experiences, recipes_number, likes } = chef;
    return (
        <Container className='mb-4'>
            <CardGroup >
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Experiences : {experiences}
                        </Card.Text>
                        <Card.Text>
                        Recipes : {recipes_number}
                        </Card.Text>
                        <Card.Text>
                        Likes : {likes}
                        </Card.Text>
                        
                    </Card.Body>
                    
                    <Button variant="secondary">View Recipes</Button>
                    
                </Card>

            </CardGroup>
        </Container>
    );
};

export default ChefData;