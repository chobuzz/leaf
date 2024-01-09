import React, { useEffect } from 'react'
import { useState } from 'react';
import { useMutation } from 'react-query';
import api from '../../utils/api';


const Register = () => {


  const [data, setData] = useState({
    nickname: "",
    email: "",
    password: "",
    name: "",
  })

  const postRegister = useMutation((data) => api.post("auth/register/email", data)
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setData({...data, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister.mutate(data);
    
    // 폼 데이터를 백엔드 API로 전달
  };

  // useEffect(() => {
  //   console.log("data", data)
  // },[data])

  return (
    <div>
      {postRegister.isError ? (
        <div>An error occurred: {postRegister.error.message}</div>
      ) : 
      <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input type="text" name='nickname' value={data.nickname} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name='email' value={data.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name='password' value={data.password} onChange={handleChange} />
      </label>``
      <br />
      <label>
        Name:
        <input type="text" name='name' value={data.name} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Register</button>
      </form>
      }
    
      </div>
  );
};

export default Register;

