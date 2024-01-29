import React from 'react'
import { useState } from 'react'

function CounterApp() {
  
    const [value, setValue] = useState(0)
    const handleIncreament = () => {
        
        console.log('Increament clicked',value+1);
        setValue(value+1)

    }
    const handleDecreament = () => {
        
        console.log('Decreament clicked',value+1);
        
         value<=0?setValue(0): setValue(value-1);
    }



  return (
    <div>
          
   
      <button   onClick={handleIncreament}   className='bg-green-700 p-2 mr-2'>Increament +</button>
      <button onClick={handleDecreament}  className='bg-red-600 p-2 ml-2'>Decreament -</button>
      <p>value {value}</p>

    </div>
  )
}

export default CounterApp