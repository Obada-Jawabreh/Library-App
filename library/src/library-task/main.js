import {initState} from './books'
import Hero from './Hero'
import { useState, useEffect } from 'react'; 
import axios from "axios"

export default function Cards(){

  return(
    <>
    <Hero/>
    </>
  );







  
  // export default function Cards({ title, author, isbn, id }) {
  //   return (
  //     <div className="card">
  //       <h2>{title}</h2>
  //       <div className="info">
  //         <p>المؤلف: {author}</p>
  //         <p>رقم ISBN: {isbn}</p>
  //         <p>الرقم التعريفي: {id}</p>
  //       </div>
  //     </div>
  //   );
  // }
  // {/* <Route
  // path="/"
  // element={
  //   <div className="app">
  //     {initState.books.map((book) => (
  //       <Cards
  //         title={book.title}
  //         author={book.author}
  //         isbn={book.isbn}
  //         id={book.id}
  //       />
  //     ))}
  //   </div>
  // }
  // /> */}
  
  
}