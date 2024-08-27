import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WorkDetails(){
    const { id } = useParams();
    const [work, setWork] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchWork = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:3001/works/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setIsLoading(false);
                setWork(jsonData.work); // Set the fetched work details
            } catch (error) {
                setIsLoading(false);
                console.error('Fetch error:', error);
            }
        };

        fetchWork();
    }, [id]); // Fetch work details when `id` changes

    if (isLoading) {
        return <p>Loading...</p>; // Loading state
    }
    return(
        <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold mb-2'>{work.title}</h1>
            <div className='flex space-x-10'>
                <div className='block rounded-full px-2 bg-[#142850] text-white font-bold'>
                {new Date(work.created_at).getFullYear()}
                </div>
                <p className='text-gray'>{work.tags}</p>
            </div>
            <p>{work.content}</p>
            <img src={work.image} alt='Work Image'/>
            <h1 className='text-2xl font-bold mb-2'>Dublicated {work.title}</h1>
            <h2 className='text-xl font-bold mb-2'>Dublicated {work.title}</h2>
            <p>{work.content}</p>
            <img src={work.image} alt='Dublicated Work Image'/>
            <img src={work.image} alt='Dublicated Work Image'/>
        </div>
    );
}

export default WorkDetails;