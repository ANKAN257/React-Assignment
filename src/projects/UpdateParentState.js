import React, { useState } from 'react'

function ChildComponent({propspassingSetvalue}) {

    const handleClick=(e)=>{
        propspassingSetvalue("parent value changed")
    }

return(
    <div className='text-center mb-4'>
     <h1 className='text-2xl'>Child component</h1>
     <button className='bg-green-500 rounded-md p-2' onClick={handleClick}>calling parent component</button>
    </div>
)
};



function UpdateParentState() {

    const [value ,setValue]=useState('i need to be updated from child component')

  return (
    <div className='text-center'>
        <div className='border-pink-300'>
        <h1 className='text-2xl'>Parent</h1>
        <div className=''>{value}</div>
        <div>


        </div>
           <ChildComponent propspassingSetvalue={setValue}></ChildComponent>
        </div>
   <hr />

    </div>
  )
}

export default UpdateParentState