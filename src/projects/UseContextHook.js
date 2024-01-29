import React,{useContext,createContext,useState} from 'react';
import UseContextUserProfile from './UseContextUserProfile';

export const MyContext=createContext();


function UseContextHook() {

  const [user,setUser]=useState('john Kumar')
  const [day,setDay]=useState('monDay')
  const getDay=(item)=>{
    console.log(item);
    setDay(item);
  }


  return (
    <MyContext.Provider value={{userData:user,getDay:getDay}}>
      <h1>parent :- {day}</h1>
      
       <UseContextUserProfile></UseContextUserProfile>
    </MyContext.Provider>
  )
  
}
export default UseContextHook




