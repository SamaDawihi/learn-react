import React, {useState, useEffect} from 'react';
import Work from '../components/work/Work';

function Works(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/works'); 
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.works);
          } catch (error) {
            console.error('Fetch error:', error); // Handle any fetch errors
          }
        };
    
        fetchData();
      }, []);
    return(
        <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold mb-2'>Work</h1>
            {
                data.length > 0 ?
                data.map((work) => (
                    <Work work={work} />
                ))
                :
                <p>No works found</p>
            }
        </div>
    );
}

export default Works;