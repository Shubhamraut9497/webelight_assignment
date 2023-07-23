import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "./Login.css"
function Login() {
  const loginData={
    email:"",
    password:"",
  }
  const [data,setData]=useState(loginData);
  const handleChange=(e)=>{
       const name=e.target.name;
       setData((data)=>{
        return {
          ...data,[name]:e.target.value
        }
       })
  }
  const submit=()=>{
    if(!data.email || !data.password){
      toast.error("please fill all details")
    }
   
    
    const val=localStorage.getItem("email")
    const val2=localStorage.getItem("password");
    if(val===data.email && val2===data.password){
      toast.success("successfully login");
      
    }
  }
  const navigate=useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-90">
      <Form className="mt-3 py-5 text-center col-lg-4 col-md-6 col-sm-8 m-3 ">
        <h1>Login</h1>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" className="w-100 mt-3" name="email" value={data.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" className="w-100 mt-3" name="password" value={data.password} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" className="w-100 mt-3 mb-3" onClick={submit}>Login</Button>
        <span className="md-3">Not registered ? <span className="text-primary fg" style={{cursor:'pointer',color:'blue'}} onClick={()=>navigate('/signup')}>click here</span></span>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </div>
  );
}

export default Login;
