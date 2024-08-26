import React from 'react';

function Work({ work }) {
    
    return (
            <>
                <div className='md:flex md:space-x-5'>
                    <div className='hidden md:block w-1/4 my-auto'>
                        <img src={work.image} alt='Work Image' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col space-y-4 md:w-3/4'>
                        <img src={work.image} alt='Work Image' className='rounded-lg md:hidden'/>
                        <a href={`/Works/${work.id}`}><h1 className='font-bold text-xl'>{work.title}</h1></a>
                        <div className='flex space-x-10'>
                            <div className='block rounded-full px-2 bg-[#142850] text-white font-bold'>
                                {new Date(work.created_at).getFullYear()}
                            </div>
                            <p className='text-gray'>{work.tags}</p>
                        </div>
                        <p>{work.content}</p>
                    </div>
                </div>
                <hr />
            </>
    );
}

export default Work;