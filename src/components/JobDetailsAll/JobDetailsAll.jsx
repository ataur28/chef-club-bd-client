import React, { useState } from 'react';
import './JobDetailsAll.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocation, faBook, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { ToastContainer } from 'react-bootstrap';
// import Toast from 'react-bootstrap/Toast';

const JobDetailsAll = () => {
    const { jobId } = useParams();
    // console.log(jobs)
    const [details, setDetails] = useState(useLoaderData());
    // console.log(details);

    const job = details.find((job) => job.id == jobId)
    // console.log(job)
    const { id, picture, name, experiences, recipes_number, likes, description, recipe_one, recipe_two, recipe_three, recipe_four, ingredients_one, ingredients_two, ingredients_three, ingredients_four, cooking_method, rating } = job;
    // console.log(jobId);
    const [jobs, setJobs] = useState([])

    // const handleAddToCart = (job) => {
    //     console.log(job)
    //     const newJobs = [...jobs, job];
    //     setJobs(newJobs);
    //     console.log(newJobs)
    //     addToDb(job.id);
    // }


    return (
        <div>
            
            <div>
                <h1 className='banner-title'>Chef Recipe</h1>
            </div>
            <div className='job-details-container'>
                <div className='job-details-dec'>
                    <div className='job-feature-item job-details-item '>
                        <img className='job-feature-logo ' src={picture} alt="" />
                        <h1 className='job-feature-title'>{name}</h1>
                        <p className='job-feature-name'> {description}</p>
                        <p className='job-feature-name'>Experiences: {experiences}</p>
                        <p className='job-feature-name'>Recipes: {recipes_number}</p>
                        <p className='job-feature-name'>Likes: {likes}</p>


                    </div>
                </div>
                <div>
                    <div className='recipe-items'>
                        <div className='recipe-item'>
                            <h1 className='job-feature-title'>{recipe_one}</h1>
                            <p className='job-feature-name'> Cooking_Method: {cooking_method}
                            </p>
                            <p className='job-feature-name'> Ingredients: {ingredients_one}
                            </p>
                            <p className='job-feature-name'> Rating: {rating}
                            </p>
                            <button  className='see-more-gallery-btn'>
                                Favourite Dish</button>
                                

                        </div>
                        <div className='recipe-item'>
                            <h1 className='job-feature-title'>{recipe_two}</h1>
                            <p className='job-feature-name'> Cooking_Method: {cooking_method}
                            </p>
                            <p className='job-feature-name'> Ingredients: {ingredients_two}
                            </p>
                            <p className='job-feature-name'> Rating: {rating}
                            </p>
                            <button className='see-more-gallery-btn'>
                                Favourite Dish</button>

                        </div>
                        <div className='recipe-item'>
                            <h1 className='job-feature-title'>{recipe_three}</h1>
                            <p className='job-feature-name'> Cooking_Method: {cooking_method}
                            </p>
                            <p className='job-feature-name'> Ingredients: {ingredients_three}
                            </p>
                            <p className='job-feature-name'> Rating: {rating}
                            </p>
                            <button className='see-more-gallery-btn'>
                                Favourite Dish</button>

                        </div>
                        <div className='recipe-item'>
                            <h1 className='job-feature-title'>{recipe_four}</h1>
                            <p className='job-feature-name'> Cooking_Method: {cooking_method}
                            </p>
                            <p className='job-feature-name'> Ingredients: {ingredients_four}
                            </p>
                            <p className='job-feature-name'> Rating: {rating}
                            </p>
                            <button className='see-more-gallery-btn'>
                                Favourite Dish</button>

                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetailsAll;