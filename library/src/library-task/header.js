
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  let login = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>مكتبة الكتب</h1>
      <nav>
        <ul className="main-nav">
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>
        </ul>
      </nav>
        <ul className="login-nav">
          
            {user ? <button onClick={logout} className="logout-button">تسجيل الخروج</button>:  <button onClick={login} className="login-button">تسجيل الدخول</button>}
          
        </ul>
    </header>
  );
}

export default Header;