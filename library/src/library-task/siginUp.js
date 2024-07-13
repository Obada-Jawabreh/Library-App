import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SiginUp(){
    const [userData,setData]=useState({name:"" , email:"" , pass:""})

    let navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/');
      };

      return (
        <div className="auth-container">
          <h2>إنشاء حساب</h2>
          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="username">اسم المستخدم:</label>
              <input type="text" id="username"  value={userData.name} onChange={(e)=>{
                setData({...userData , name:e.target.value })
              }}/>
            </div>
            
            <div className="input-group">
              <label htmlFor="email">البريد الإلكتروني:</label>
              <input type="email" id="email"  value={userData.email} onChange={(e) =>
                setData({...userData , email:e.target.value})
              } />
            </div>


            <div className="input-group">
              <label htmlFor="password">كلمة المرور:</label>
              <input type="password" id="password"  value={userData.pass} onChange={(e)=>{
                setData({...userData , pass:e.target.value})
              }}/>
            </div>
            <button type="submit" className="btn">إنشاء حساب</button>
          </form>
        </div>
      );
    }

    