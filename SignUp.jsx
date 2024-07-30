import React, { useEffect, useState } from 'react'
import "../Assets/Signup.css"
import { GetData, PostData } from '../Assets/json/API';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setpass] = useState("");
    const [cpass,setcpass] = useState("");
    const role = "user";
    const [data,Setdata]=useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await GetData();
            Setdata(res.data);
        };
        fetchData();
    },[]);
    const navi = useNavigate();
    // const CBK = () => {
    //     if(checkbx===true)
    //         setcheckbx(false);
    //     else    
    //         setcheckbx(true);
    // }
    const signup = async() =>{
        if(name === ""){
            alert("Name is required");
            return;
        }
        else if(email === ""){
            alert("Email is required");
            return;
        }
        else if(pass === ""){
            alert("Password is required");
            return;
        }
        else if(cpass === ""){
            alert("Confirm Password is required");
            return;
        }
        else if(pass!== cpass){
            alert("Password and Confirm Password do not match");
            return;
        }
        // else if(checkbx === false){
        //     alert("Please agree to Terms & Conditions");
        //     return;
        // }
        const uindex = data ? data.findIndex(({username})=>username===name):-1;
        if(uindex!==-1){
            alert("Username already exists");
            return;
        }
        PostData(name,email,pass,role);
        alert("Signup Sucessful");
        navi('/Login');
    }
    const logpage = () =>{
        navi('/Login');
    }

  return (
    <div className='signtotal'>
        <div className='signbox'>
            <div className='signcenter'></div>
            <div className='signleft'></div>
            <div className='signleft2'>
                {/* <h1>ALL-IN-ONE EVENT MANAGEMENT SOFTWARE</h1>
                <h2>Built for the events of today—and tomorrow</h2> */}
                </div>
            <div className='signright'>
     <h1>Signup</h1>
         <form onSubmit={(event)=>{event.preventDefault();signup()}}>
            
             <label>
                UserName<br/>
                <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
            </label><br/>
             <label>
                Email
                <input type='email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </label><br/>
            <label>
                Password
                <input type='password' value={pass} onChange={(event)=>setpass(event.target.value)}/>
            </label><br/>
            <label>
                Confirm Password
                <input type='password' value={cpass} onChange={(event)=>setcpass(event.target.value)}/>
            </label><br/>
             <button type='submit'>Signup</button>
         </form>
             <div className='alreadyaccount'>
             Already have an account?<span onClick={logpage}><u>Login</u></span>
             </div>
        </div>
            </div>
        </div>
  )
}

export default SignUp