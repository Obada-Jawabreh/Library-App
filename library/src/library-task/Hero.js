import React from 'react';
import './styling/hero.css'; 



const Hero = () => {
    const user = JSON.parse(localStorage.getItem('user')); 
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome {user?user.name : null} , in Our Library</h1>
        <p>Discover a world of knowledge and adventure</p>
        <a href="#books" className="btn">Explore Books</a>
      </div>
    </div>
  );
}

export default Hero;