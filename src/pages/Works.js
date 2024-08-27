import React, {useState, useEffect} from 'react';
import Work from '../components/work/Work';
import {SafeAreaView, TextInput} from 'react-native';

function Works(){
    const [works, setWorks] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3001/works?q=${search}`); 
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setWorks(jsonData.works);
          } catch (error) {
            console.error('Fetch error:', error); // Handle any fetch errors
          }
        };
    
        fetchData();
      }, [search]);
    return(
        <div className='flex flex-col space-y-6 w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold mb-2'>Work</h1>
            <SafeAreaView>
                <TextInput
                  onChangeText={setSearch}
                  // onSubmitEditing={setSearch}
                  value={search}
                  placeholder="Search Works here"
                />
            </SafeAreaView>
            {
                works.length > 0 ?
                works.map((work) => (
                    <Work work={work} />
                ))
                :
                <p>No works found</p>
            }
        </div>
    );
}

export default Works;