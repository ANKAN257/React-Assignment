import React, { useState } from 'react'

function SumTwoNumber() {
    const [num1,setnum1]=useState(0);
    const [num2,setnum2]=useState(0);
    const [total,setTotal]=useState(0);
  const  handleClick=()=>{
        const totalVal=parseInt(num1)+parseInt(num2);
        console.log(totalVal);
        setTotal(totalVal);
        
    }


  return (
    <div className='text-center mb-4 mt-4 block'>
          
          <input type="number" value={num1} onChange={(e)=>setnum1(e.target.value)} className='bg-gray-300  p-1 ml-2' placeholder='number 1'/>
          <input type="number" value={num2} onChange={(e)=>setnum2(e.target.value)} className='bg-gray-300 ml-2 p-1'placeholder='number 2'/>
          <button className='bg-gray-500 p-1 ml-2' onClick={handleClick}>Add Number </button>
          <p>result : {total || ""}</p>
    </div>
  )
}

export default SumTwoNumber