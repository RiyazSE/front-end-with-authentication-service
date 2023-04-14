import React, { useEffect } from 'react'
import {  useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const logout = async() => {
      try {
        const res=await fetch("/logout",{
            method:"GET",
            header:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        })
        if(res.status === 401 || !res){
            window.alert("please logout later")
        }else{
            navigate('/logout');
            // window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
        logout()
    },[])
  return (
    <div>

    </div>
  )
}

export default Logout