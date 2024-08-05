import React from 'react';
import Work from '../work/Work';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';

function FeaturedWorks() {
    return (
        <div className='flex flex-col w-3/4 mx-auto space-y-4'>
            <p className='text-center font-medium text-lg md:text-left'>Featured Works</p>
            <Work image={work1} />
            <Work image={work2} />
            <Work image={work3} />
        </div>
    );
}

export default FeaturedWorks;