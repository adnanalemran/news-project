import React from 'react';
import Header from '../sheard/header/Header';
import Navbar from '../sheard/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h2 className='font-poppins text-4xl font-bold'>Home 1</h2>
        </div>
    );
};

export default Home;