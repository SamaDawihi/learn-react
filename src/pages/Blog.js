import React, { useEffect, useState } from 'react';
import BlogPost from '../components/blog/BlogPost';

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/articles'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.articles);
      } catch (error) {
        console.error('Fetch error:', error); // Handle any fetch errors
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
      <h1 className='text-4xl font-bold mb-2'>Blog</h1>
      {data.length > 0 ? (
        data.map((article) => (
          <BlogPost 
            article={article}
          />
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
}

export default Blog;
