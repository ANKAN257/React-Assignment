import React from 'react'




function DynamicallyAddChild({ children }) {
  return (
    <div className='text-center'> 
        <h1>parent Component</h1>
         {children}
    </div>
  )
}

export default DynamicallyAddChild;