import React from 'react';
import Work from '../components/work/Work';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';

function Works(){
    return(
        <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold mb-2'>Work</h1>
            <Work image={work1} />
            <Work image={work2} />
            <Work image={work3} />
        </div>
    );
}

export default Works;