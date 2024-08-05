import React from 'react';

function BlogPost(){
    return(
      <div className='space-y-4'>             
        <h1 className='text-2xl font-bold mb-2'>UI Interactions of the week</h1>
        <div className='flex space-x-3'>
            <p>12 Feb 2019</p>
            <p>|</p>
            <p className='text-[#8695A4]'>Express, Handlebars</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <hr />
      </div>
    );
}

export default BlogPost;