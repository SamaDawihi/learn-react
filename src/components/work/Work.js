import React from 'react';

function Work({ image }) {
    return (
            <>
                <div className='md:flex md:space-x-5'>
                    <div className='hidden md:block w-1/4 my-auto'>
                        <img src={image} alt='Work Image' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col space-y-4 md:w-3/4'>
                        <img src={image} alt='Work Image' className='rounded-lg md:hidden'/>
                        <a href='/WorkDetails'><h1 className='font-bold text-xl'>Designing Dashboards</h1></a>
                        <div className='flex space-x-10'>
                            <div className='block rounded-full px-2 bg-[#142850] text-white font-bold'>
                                2020
                            </div>
                            <p className='text-gray'>Dashboard</p>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <hr />
            </>
    );
}

export default Work;