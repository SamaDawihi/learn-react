import React, { useEffect, useState } from 'react';
import Post from './Post';

function RecentPosts() {
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
    <section className="bg-[#EDF7FA] py-6">
        <div className="mx-auto w-3/4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h2 className="text-3xl font-bold mb-4 md:mb-0">
                Recent Posts
                </h2>
                <a href="/Blog" className="text-blue-500 hover:underline md:text-left text-center">
                View All
                </a>
            </div>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {
                data.length > 0 ?
                data.map((article) => (
                  <Post key={article.id} article={article} />
                ))
                :
                <p>No posts available</p>
              }
            </div>
        </div>
    </section>
  );
}

export default RecentPosts;
