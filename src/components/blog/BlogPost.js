import React from 'react';

function BlogPost({ article }){
    return(
      <div className='space-y-4'>             
        <h1 className='text-2xl font-bold mb-2'>{article.title}</h1>
        <div className='flex space-x-3'>
            <p>{new Date(article.created_at).toLocaleDateString()}</p>
            <p>|</p>
            <p className='text-[#8695A4]'>{article.tags}</p>
        </div>
        <p>{article.content}</p>
        <hr />
      </div>
    );
}

export default BlogPost;