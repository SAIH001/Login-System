import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {

  const [userName,setuserName] = useState('');
  const [userEmail,setuserEmail] = useState('');
  const [userPassword,setuserPassword] = useState('');
  const [userImage,setuserImage] = useState('');

  const [Success,setSuccess] = useState('');
  const [Error,setError] = useState('');

const handleSubmit = async(e) =>{
  e.preventDefault();

  const formData =new FormData();
  formData.append('userName',userName)
  formData.append('userEmail',userEmail)
  formData.append('userPassword',userPassword)
  formData.append('userImage',userImage)

  try{

    
    const Responsee  = await axios.post('http://localhost:5000/user/registration/',formData,
      {headers:{'Content-Type':'multipart/form-data'}}
    )
    setError('')
    setSuccess(Responsee.data.success);
  }catch(error){
    setSuccess('');
    setError(error.response.data.error)
  }
}

  return (


    <div className="container mt-5">
      <h1 className='text-center mt-4'>Account SignUp</h1>
    {
      Success ? (
        <div class="alert alert-success" role="alert">
          {Success}
</div> 
      ):""
    }    
    
    {
      Error ? (
        <div class="alert alert-danger" role="alert">
          {Error}
</div> 
      ):""
    }    
    
    
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={(e)=>setuserEmail(e.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">User Name</label>
          <input type="text" className="form-control" onChange={(e)=>setuserName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e)=>setuserPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputImage1" className="form-label">Profile Image</label>
          <input type="file" className="form-control" onChange={(e)=>setuserImage(e.target.files[0])}/>
        </div>

        <button type="submit" className="btn btn-primary">Register !</button>
      </form>
    </div>
  )
}

export default Registration