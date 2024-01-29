import React,{useReducer} from 'react'


function UseReduceHookComponent() {

    
    const reducerMethodFunction=(currUserState,action)=>{
        switch(action.type){
            case 'increment':
                return {initialState:currUserState.initialState+1}
                case 'decrement':
                    return {initialState:currUserState.initialState-1}
                    default: return {currUserState}        
                }
                
            }
            const [state,dispatch]=useReducer(reducerMethodFunction,{initialState:0})

    const handleIncre=()=>{
        dispatch({type:'increment'})
    }       
    const handleDecre=()=>{
        if(state.initialState>0){
            dispatch({type:'decrement'})
        }
    } 

  return (
    <div className='pb-4'>
          <h1>The function which contains all your state updates is called the reducer.</h1>
          <p>This is because you are reducing the state logic into a separate function.
             The method you call to perform the operations is the dispatch method.</p>

             <h1 className='p-2 bg-red-300 my-2 text-2xl'>{state.initialState}</h1>
             <button className='bg-gray-400 p-1 rounded-md mr-3' onClick={handleIncre}>increment</button>
             <button className='bg-green-400 p-1 rounded-md mr-3' onClick={handleDecre}>decrement</button>
    </div>
  )
}

export default UseReduceHookComponent
