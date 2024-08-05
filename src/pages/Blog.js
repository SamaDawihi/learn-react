import React from 'react';
import BlogPost from '../components/blog/BlogPost';

function Blog(){
    return(
      <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
        <h1 className='text-4xl font-bold mb-2'>Blog</h1>
        <BlogPost /> 
        <BlogPost /> 
        <BlogPost /> 
        <BlogPost /> 
      </div>
    );
}

export default Blog;