import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function Login() {
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (event) =>{
   let name = event.target.name;
   let value = event.target.value;

   setUser({...user,[name]:value})
  }

  const handleSubmit = async(event) => {
   event.preventDefault();
   const {email,password}=user;
   try {
    const res = await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    if(res.status === 400 || !res){
      window.alert("invalid credentials")
    }else{
      window.alert("Logged In Successfully")
      window.location.reload();
    }
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div>
      <div className="container shadow my-5 py-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder text-center">Welcome back!</h1>
            <p className="lead text-center">Enter Your Credential's to Login</p>
            <h5 className="mb-4">or</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-5 fw-bolder mb-5">Login</h1>

            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
