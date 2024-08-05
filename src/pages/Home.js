import React from 'react';
import TopResume from'../components/home/TopResume'
import RecentPosts from'../components/home/RecentPosts'
import FeaturedWorks from '../components/home/FeaturedWorks';
function Home(){
    return(
      <div className='flex flex-col space-y-6'>
        <TopResume />        
        <RecentPosts />        
        <FeaturedWorks />        
      </div>
    );
}

export default Home;