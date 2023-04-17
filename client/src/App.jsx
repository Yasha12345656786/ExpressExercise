import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [stores,SetStores] = useState([])
  const LoadUsers = async () =>{
    try {
      let res = await fetch('http://localhost:8000/api/stores');
      let data = await res.json();
      SetStores(data);
    } catch (error) {
      
    }
  }
     useEffect(()=>{
      LoadUsers();
     },[]);
  return (
    <div className="App">
      {
        stores.map(store => 
        <div>
          <p>id:{store.id}</p>
          <p>name:{store.name}</p>
          <p>city:{store.city}</p>
          <p>products:{store.products}</p>
           <div/>)
      }
    </div>
 
)