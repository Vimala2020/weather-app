
import Hightlights from './Hightlights';
import Temperature from './Temperature';
import './index.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  return (
    <div className=" bg-slate-900 h-screen flex justify-center  align-top">
      <div className=' mt-40 w-1/5 h-1/3'>
        <Temperature/>
        
        </div>
        <div className=' mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6'>
          <h2 className=' text-slate-200 text-2xl col-span-2'> Today's Highlights </h2>
          <Hightlights/>
          <Hightlights/>
          <Hightlights/>
          <Hightlights/>
        </div>
    </div>
  );
}

export default App;
