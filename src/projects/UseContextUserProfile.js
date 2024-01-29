import React ,{useContext} from 'react';
import {MyContext} from './UseContextHook';


function UseContextUserProfile() {

 const {userData,getDay}=useContext(MyContext);
 console.log("userData",userData);
 const day="sunday"


  return (
    <div>
       
      <h1>Child Componnet : {userData}</h1>
      <button className='bg-gray-400 p-1 m-3 rounded-md' onClick={()=>getDay(day)}>Click here</button>

    </div>
  )
}

export default UseContextUserProfile