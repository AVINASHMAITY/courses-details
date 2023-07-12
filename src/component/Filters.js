import React from 'react';

const Filters = (props) => {
  let dataStore=props.data;
  let category=props.category;
  let setCategory=props.setCategory; 

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap space-x-4 gap-y-3 mx-auto py-4 justify-center'>
    
      {
        dataStore.map((element)=>{
          return <button 
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
          ${category === element.title ? "bg-opacity-60 border-white" :"bg-pacity-40 border-transparent"}
          `}
          key={element.id} onClick={()=>filterHandler(element.title)}>{element.title}</button>
        })
      }
    </div>
  )
}

export default Filters;
