import React, { useRef, useState } from 'react'

function UseRefHook() {
 const inputRef=useRef(null)

 const handleClearInput=()=>{
  
  console.log(inputRef.current.value);
  inputRef.current.value="ankan";
  inputRef.current.focus();

 }


  return (
    <div className='pb-4'>
      <h1>useRef to Reference React Elements</h1>
      <input type="text" className='p-1 bg-slate-300' placeholder='Enter text'  ref={inputRef}/>
      <button className='bg-gray-400 p-1 ml-2 rounded-md' onClick={handleClearInput}>Clear Input</button>

    </div>
  )
}

export default UseRefHook