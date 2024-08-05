import React from 'react';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';

function WorkDetails(){
    return(
        <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold mb-2'>Designing Dashboards with usability in mind</h1>
            <div className='flex space-x-10'>
                <div className='block rounded-full px-2 bg-[#142850] text-white font-bold'>
                    2020
                </div>
                <p className='text-gray'>Dashboard, User Experience Design</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={work1} alt='Work Image'/>
            <h1 className='text-2xl font-bold mb-2'>Designing Dashboards</h1>
            <h2 className='text-xl font-bold mb-2'>with usability in mind</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={work2} alt='Work Image'/>
            <img src={work3} alt='Work Image'/>
        </div>
    );
}

export default WorkDetails;