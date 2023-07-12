import React from 'react';
import "./spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className="spinner"></div>
      <p className='text-blue-500 text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner;
