import React, { useEffect ,useState} from 'react'

function FetchDataFromAPI() {

    const url="https://jsonplaceholder.typicode.com/users";
    const [userData,SetUserData] = useState([]);

    const getUserData=async ()=>{
        const res=await fetch(url);
        const jsonData=await res.json()
        SetUserData(jsonData);

    }

    useEffect(()=>{
        getUserData();
    },[])



  return (
    <div>
        <h1>User data</h1>
        {
          userData.map(( index) => (
            <ul className='mt-2 mb-2'>
                <li key={index.id}><strong>Name :</strong> {index.name}</li>
                <li key={index.id}><strong>Website :</strong> {index.website}</li>
                <li key={index.id}><strong>Email :</strong> {index.email}</li>
                <li key={index.id}><strong>Phone :</strong> {index.phone}</li>
                <hr />
            </ul>
            
        ))}
       
      
    </div>
  )
}

export default FetchDataFromAPI