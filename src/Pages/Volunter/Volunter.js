import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/carousel1.webp';

const Volunter = () => {
    return (
        <div className='my-4 text-center'>
            <h3 className='font-bold mb-4 fill-stone-500 text-3xl text-center'>MEET OUR VOLUNTEERS</h3>
            <div className='grid md:grid-cols-3 mb-8 gap-4'>
                <div>
                    <img className='hover:transform hover:scale-105 duration-200' src={img} alt="" />
                    <h6 className='font-semibold mt-2 text-center'>Voulenter</h6>
                </div>
                <div>
                    <img className='hover:transform hover:scale-105 duration-200' src={img} alt="" />
                    <h6 className='font-semibold mt-2 text-center'>Voulenter</h6>
                </div>
                <div>
                    <img className='hover:transform hover:scale-105 duration-200' src={img} alt="" />
                    <h6 className='font-semibold mt-2 text-center'>Voulenter</h6>
                </div>
            </div>
            <Link to="" className='text-center btn-grad font-bold border-2'>See More</Link>  
        </div>
    );
};

export default Volunter;