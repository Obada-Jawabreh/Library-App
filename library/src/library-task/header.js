
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Header(){

  const user = JSON.parse(localStorage.getItem('user')); 

  let navigate=useNavigate();

  let logout = ()=>{
    localStorage.removeItem('user');
    navigate('/')
  }

  let login=()=>{
    navigate('/login')
  }

  return (
    <header className="header">
      <h1>مكتبة الكتب</h1>
      <nav>
        <ul>
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/books">الكتب</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>

          { user ? <button onClick={logout} className="logout-button">تسجيل الخروج</button> : <button onClick={login} className="logout-button">تسجيل الدخول</button>}
          
          <li><Link to="/profile" >اسم المستخدم</Link></li>
        </ul>
      </nav>
    </header>
  );
}