import React from 'react'

function UseCallBackHook() {
  return (
    <div className='pb-4'>
             <p className='text-xl font-serif'> 
              parent component's state variable can be upadted by state of child component, 
              
            </p>  
            <p className='text-xl font-sans'>useCallback memoizes our callback functions, so they not recreated on every re-render</p>
    

    

    </div>
  )
}

export default UseCallBackHook