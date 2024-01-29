import React, { useState } from 'react'

function ShowHide() {

    const [show ,setShow]=useState(true);
    
    const handleShowHide=(e)=>{
        e.preventDefault();  
        console.log(!show);
        setShow(!show);
    }

  return (
    <div className='text-center text-bold text-3xl mt-8'>

        <button onClick={handleShowHide} className='bg-black p-3 rounded-md resize-none w-64  text-white'>
            {show?"Hide -":"Show+"}
        </button>

        <div>
            {show ? 
                  <p className='bg-red-500 text-md p-4 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p> : <p className='bg-green-500'>.</p>
            }
        </div>
    </div>
  )
}

export default ShowHide