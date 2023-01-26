import React from 'react';
import img1 from '../../img/Tohin.JPG'

const Info = () => {
    return (
        <div className='my-4'>
            <h1 className='text-center my-2 font-bold text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, libero.</h1>
            <div className='md:flex gap-6 mt-4'>
                <div className='md:w-[50%]'>
                    <h3 className='text-xl my-2 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <h5 className='text-lg font-semibold mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse quos quibusdam temporibus blanditiis ad totam quas natus in velit, rerum, obcaecati necessitatibus perferendis corrupti nemo nesciunt amet accusamus ipsam?</p>
                </div>
                <div className='md:w-[50%]'>
                    <img className='md:h-80 w-full' src={img1} alt="" />
                </div>
            </div>
            <div className='md:flex gap-6 mt-16'>
            <div className='md:w-[50%]'>
                    <img className='md:h-80 w-full' src={img1} alt="" />
                </div>
                <div className='md:w-[50%]'>
                    <h3 className='text-xl my-2 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <h5 className='text-lg font-semibold mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse quos quibusdam temporibus blanditiis ad totam quas natus in velit, rerum, obcaecati necessitatibus perferendis corrupti nemo nesciunt amet accusamus ipsam?</p>
                </div>
            </div>
        </div>
    );
};

export default Info;