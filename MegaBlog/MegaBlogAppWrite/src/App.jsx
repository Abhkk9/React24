import '/src/conf/conf.js';
import './App.css';
import authService from "./appwrite/auth";
import {login,  logOut} from "./store/authSlice";
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { Footer,Header } from './components';

function App() {
  const [loading, setLoading]= useState(true);
  const dispatch =useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}) )
      }
      else{
        dispatch(logOut())
      }
    })
    .finally( () =>setLoading(false))
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap '>
      <h1> A REACT APP WITH APPWRITE</h1>
      <div className='w-full block'>
      {/* <Header/> */}
      <main>
        {/* <Outlet /> */}
        <h1>main</h1>
      </main>
      {/* <Footer /> */}
      </div>
    </div>
  ):(<div>default</div>)  
}

export default App
