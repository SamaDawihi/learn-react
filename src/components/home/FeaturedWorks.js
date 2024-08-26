import React, { useEffect, useState } from 'react';
import Work from '../work/Work';

function FeaturedWorks() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/works'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log("Fetched Data:", jsonData); // Log the fetched data
        setData(jsonData.works);
        console.log("Data: " + data.length)
      } catch (error) {
        console.error('Fetch error:', error); // Handle any fetch errors
      }
    };

    fetchData();
  }, []);
    return (
        <div className='flex flex-col w-3/4 mx-auto space-y-4'>
            <p className='text-center font-medium text-lg md:text-left'>Featured Works</p>
            {
                data.length > 0 ?
                data.map((work) => (
                    <Work key={work.id} work={work} />
                ))
                :
                <p>no works available</p>
            }
        </div>
    );
}

export default FeaturedWorks;