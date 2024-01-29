import React,{useMemo} from 'react'

function UseMemo() {
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = useMemo(() =>
         numbers.map((n) => n * 2//[2, 4, 6, 8, 10]
    
    ),[])


  return (
    <div>
        <p>useMemo Defintion : it is for storing the results of expensive operations.</p>
     {doubledNumbers.map((number) => (
    	<p key={number}>{number}</p>
  	  ))}

    </div>
  )
}

export default UseMemo