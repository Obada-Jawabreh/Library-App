import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./library-task/main";
import Header from "./library-task/header";
import "./library-task/styling/header.css";
import Footer from "./library-task/footer";
import SiginUp from "./library-task/siginUp";
import "./library-task/styling/siginup.css";
import "./library-task/styling/contact.css";
import "./library-task/styling/about.css";
import ContactUsPage from "./library-task/contact";
import AboutUsPage from "./library-task/about";
import Books from "./library-task/bookCatalog";
import './index.css'
import * as React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/login" element={<SiginUp />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/catalog" element={<Books />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
