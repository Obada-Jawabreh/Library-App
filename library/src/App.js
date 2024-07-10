import { BrowserRouter , Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './library-task/main'
import Header from './library-task/header'
import './library-task/styling/header.css'
import Footer from './library-task/footer'
import {initState} from './library-task/books'
import SiginUp from './library-task/siginUp'
import './library-task/styling/siginup.css'

function App() {
  return (
    <>
<BrowserRouter>
  <Header/>
  <main>
   <Routes>
      <Route path="/"element={<Cards/>}/>

      {/* <Route path="/toHome" element={<Cards/>}/> */}
    <Route path="/login" element={<SiginUp/>}/>
            
  </Routes>
  </main>

  <Footer/>
</BrowserRouter>
  </>
  );
}

export default App;

