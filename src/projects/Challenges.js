import React from 'react'
import { useState, useEffect } from 'react';




function Challenges() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("Component rendered successfully");
    //   }, []);

    //   const names = ["Brian", "Paul", "Krug", "Halley"];
    // const listItems = names.map((name) => <li>{name}</li>);
const  handleClick=() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 0);
    setCount((prevCount) => prevCount)
}


  return (
    <div>


       <h1>Count: {count}</h1>
 	   <button className='bg-gray-400 p-1 rounded-md' onClick={handleClick}>Click me!</button>


        {/* <button className='bg-gray-400 p-1 rounded-md' onClick={() => setCount(count + 1)}>Click me</button>
  	    <p>You clicked {count} times</p>


        
          <ul>{listItems}</ul>;
        */}
     

    </div>
  )
}




export default Challenges