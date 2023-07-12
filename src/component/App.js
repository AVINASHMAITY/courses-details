import React, { useState,useEffect} from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import Cards from './CardsContent';
import Spinner from './Spinner';
import {data, apiUrl}from "./data"
import { toast } from 'react-toastify';

const App = () => {
    
    const [input, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(data[0].title);
    
    async function fetchData(){
        setLoading(true);
        try{
           let response = await fetch(apiUrl);
           let output = await response.json();
           setCourses(output.data);
        }
        catch(error){
           toast.error("Internet Issue");
        }
        setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-300">
      <div>
        <Navbar />
      </div>
      <div  >
      <div>
        <Filters data={data} category={category} setCategory={setCategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
       {loading?<Spinner/>:(<Cards courses={input} category={category}/>)}
      </div>
    </div>
    </div>
  )
}

export default App;
