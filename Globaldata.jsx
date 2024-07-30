import React, { useEffect, useMemo, useState } from 'react'

export const Context = React.createContext();

const GlobeData = ({children}) => {

    const [loggedIn,setLI] = useState(()=>{
        const d = localStorage.getItem("LogIn");
        return (d)?JSON.parse(d):false;
    })
    
    const [Usrdata,SetusrData] = useState(()=>{
        const d = localStorage.getItem("Usrdata");
        return (d)?JSON.parse(d):false;
    })

    const SetuserData = (user) =>{
        SetusrData(user);
        localStorage.setItem("Usrdata", JSON.stringify(user));
    }

    const Contexts = useMemo(()=>{
        return{
            loggedIn,
            Usrdata,
            LogIn:(user)=>{
                setLI(true);
                SetuserData(user);
            },
            LogOut:()=>{setLI(false)},
        }
    },[loggedIn,Usrdata])

    useEffect(()=>{

        localStorage.setItem("LogIn", JSON.stringify(loggedIn));

    },[loggedIn])

  return (
    <Context.Provider value={Contexts}>
        {children}
    </Context.Provider>
  )
}

export default GlobeData