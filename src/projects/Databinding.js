import React, { useState } from 'react'

function Databinding() {
    const [value,setValue]=useState("");

    const handleChange=(e)=>{
        console.log(value);
        setValue(e.target.value);
    }
    
   const [count ,setCount] = useState(0);
   const [text,setText] = useState(); 
  const handleCountWord=(e)=>{
    const data=e.target.value;
    setText(data);
    console.log(data);
    let words=text.split(" ")
    let cnt=0;
    for(let i=0;i<words.length;i++){
        if(words[i]==="hello"){
            cnt++;
        }
    }    
    setCount(cnt);

  }



  return (
    <div>
        <div className='text-center m-4'>
             <h1 className='text-xl bold'>Data Binding Exercise</h1>
             <input  onChange={handleChange} type="text"  value={value} placeholder='Enter Text'  className='bg-red-200 rounded-md p-1'/>

                <h1 className='text-3xl mt-2'>{value}</h1>
                

        </div>

     

     <div className='text-center'>
          <input name="" id="" cols="30" rows="10" 
          className='bg-gray-200 p-2'
          onChange={handleCountWord}
          />

         <p>The word "hello" has been said {count} times.</p>
     </div>
   

    </div>
  )
}

export default Databinding