import React, { useContext, useEffect, useState } from 'react'
import "../Assets/Login.css"
import { useNavigate } from 'react-router-dom';
import { GetData } from '../Assets/json/API';
import { Context } from './Globaldata';
const Login = () => {
    const [user, setUser] = useState("");
    const [key, setKey] = useState("");
    const [data,Setdata] = useState([]);
    const {LogIn} = useContext(Context);

    useEffect(()=>{
        const fetchData = async() => {
                const res = await GetData();
                Setdata(res.data);
        }
        fetchData();
    },[]);
    const navi = useNavigate();

    const login = async() =>{
        if(user===""){
            alert("Please enter your username");
            return;
        }
        else if(key===""){
            alert("Please enter your password");
            return;
        }
        const uindex = data ? data.findIndex(({username})=>username===user): -1;
        if(uindex===-1)
        {
            alert("User not found");
            return;
        }
        else if(data[uindex].password !== key){
            alert("Incorrect Password");
            return;
        }
        alert("Login Sucessful");
        LogIn(data[uindex]);
        navi('/Navbar');
    }
    const Regpage = () => {
        navi('/SignUp');
    }
  return (
        <div className='logtotal'>
            <div className='box'>
                <div className='centerbox'></div>
            </div>
            <div className='leftlogin'>
                
            </div>
    <div className='rightlogin'>
     <h1>Login</h1>
         <form onSubmit={(event)=>{event.preventDefault();login()}}>
            
             {/* <label>
                Username<br/>
                 <input type='text' value={user}  onChange={(event)=>setUser(event.target.value)}/>
             </label><br/>
             <label>
                 Password<br/>
                 <input type='password'  value={key}  onChange={(event)=>setKey(event.target.value)} />
             </label><br/> */}
             <label>
                Username
                <input type='text' value={user} onChange={(event)=>setUser(event.target.value)}/>
            </label><br/>
            <label>
                Password
                <input type='password' value={key} onChange={(event)=>setKey(event.target.value)}/>
            </label><br/>
             <button type='submit'>Login</button>
         </form>
             <div className='createnewid'>
                 Create new account?<span onClick={Regpage}><u>SignUp   </u></span>
             </div>
        </div>
    </div>
  )
}

export default Login;
