
import ShowHide from './projects/ShowHide';
import Databinding from './projects/Databinding';
import DisableButton from './projects/DisableButton';
import UpdateParentState from './projects/UpdateParentState';
import DynamicallyAddChild from './projects/DynamicallyAddChild';
import Child from './projects/Child'; 
import SumTwoNumber from './projects/SumTwoNumber';
import CounterApp from './projects/CounterApp';
import FetchDataFromAPI from './projects/FetchDataFromAPI';
import Challenges from './projects/Challenges';
import UseMemo from './projects/UseMemo';
import UseRefHook from './projects/UseRefHook';
import UseCallBackHook from './projects/UseCallBackHook';
import UseReduceHookComponent from './projects/UseReduceHookComponent';
// import UseContextUserProfile from './projects/UseContextUserProfile'
import UseContextHook from './projects/UseContextHook'

 



function App() {

  const users=[
    {
    name:'john',
    id:1,
    email:'john@gmail.com'
   },
   {
    name:'ram',
    id:2,
    email:'ram@gmail.com'

   },
   {
    name:'sonu',
    id:3,
    email:'sonu@gmail.com'
   }

];

const listItems=users.map((i)=><li key={i.id}>{i.name}</li>);



  return (
    <div className='w-full h-screen'>
    <div className="text-center mb-4 ">
        <p className='text-3xl'>project 1</p>
         <h2 className="text-2xl semi-bold">user names</h2>
           <ul>{listItems}</ul>
    </div>
     <hr />
   <div>
    <h1 className='text-center text-3xl '>project 2</h1>
        <ShowHide></ShowHide>
   </div>
    
   <div>
   <h1 className='text-center text-3xl mt-3 mb-2'>project 3</h1>
      <Databinding></Databinding>
   </div>
   <hr />
   <div className='mt-2'>
   <h1 className='text-center text-3xl mt-3'>project 4</h1>
      <DisableButton></DisableButton>
   </div>

   <hr />
   <div className='mt-2'>
   <h1 className='text-center text-3xl mt-3'>project 5</h1>
     <UpdateParentState></UpdateParentState>
   </div>

   <div className='mt-2'>
   <h1 className='text-center text-3xl mt-3'>project 6</h1>
      <DynamicallyAddChild>
            <Child></Child>
      </DynamicallyAddChild>
   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 7</h1>
     <h2>SumTwoNumber</h2>
     <SumTwoNumber></SumTwoNumber>
   </div>

   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 8</h1>
     <h2>Counter App</h2>
     <CounterApp></CounterApp>
   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 9</h1>
     <h2>FetchDataFromAPI </h2>
    <FetchDataFromAPI></FetchDataFromAPI>
   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 10</h1>
     <h2>Challenges </h2>
    <Challenges></Challenges>
   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 11</h1>
     <h2>useMemo </h2>
    <UseMemo></UseMemo>
   </div>

   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 12</h1>
     <h2>useRef Hook</h2>
    <UseRefHook></UseRefHook>
   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 13</h1>
     <h2>useCallBack Hook</h2>
     
     <UseCallBackHook></UseCallBackHook>

   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 14</h1>
     <h2>useReducer Hook</h2>
     <UseReduceHookComponent></UseReduceHookComponent>

   </div>
   <hr />
   <div className='mt-2 text-center'>
   <h1 className='text-center text-3xl mt-3'>project 15</h1>
     <h2>useContext Hook :- manage state globally</h2>
    
     <UseContextHook></UseContextHook>
   </div>


    </div>
  );
}

export default App;
