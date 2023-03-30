import Lottie from 'lottie-react';
import course from './course.json'
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import useTitle from '../useTitle/useTitle';

const Home = () => {
    useTitle('Home');
    
    return (
        <div className='w-11/12 mx-auto my-16 sm:flex items-center '>
            <div>
                <h2 className='text-3xl oxanium'>World's Giant Learning Platform</h2>
                <p className='my-6 roboto-mono'>Here a chance to learn and build up your knowledge and spread your knowledge throw the worldwide</p>
                <button className='btn-primary px-4 py-2 rounded-md flex items-center'>Buy Now <FaShoppingCart className='ml-2'></FaShoppingCart></button>
            </div>
            <div>

                <Lottie animationData={course} loop={true}/>
            </div>
            
            
        </div>
    );
};

export default Home;