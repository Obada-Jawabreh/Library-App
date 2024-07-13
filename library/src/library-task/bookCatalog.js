// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { db , dbURL } from '../firebaseConfg/config.js'; 

// function Books() {
//     const [books, setBooks] = useState([]);
//     const [addBook,setBook] = useState({author:"" , id:null , title:"" , isbn:"" , boolen:true})
    
    
//     async function fetchBooks() {
//         const response = await axios.get(`${dbURL}/books.json`);
//         const data = response.data;
//         setBooks(response.data);
//         if (data) {
//             const booksArray = Object.keys(data).map(key => ({
//                         id: key,
//                         ...data[key]
//                     }));
//                     setBooks(booksArray);
//                 } else {
//                     console.log('No books found');
//                 }
//     }
//     useEffect(() => {fetchBooks();}, []);
    

//     async function addBooks(e){
//         e.preventDefault();
//         await axios.post(`${dbURL}/books.json`, { ...addBook})
//         fetchBooks()
//         .then(function (response) {
//             console.log("done",response);
//         })
//         .catch(function (error) {
//             console.log("d",error);
//         });
//     }
    

    
    
//     return ( 
//         <>
//             <div className="app">
//       <div className="card-container">
//         {books.map((book) => (
//           <div className="card" key={book.id}>
//             <h2>{book.title}</h2>
//             <div className="info">
//               <p>المؤلف: {book.author}</p>
//               <p>رقم ISBN: {book.isbn}</p>
//               <p>الرقم التعريفي: {book.id}</p>
//               <button>Delete</button>
//               <button>UPDATE</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     <form onSubmit={addBooks}>
//         <label>author:</label>
//         <input type='text' value={addBook.author} onChange={(e)=>{
//             setBook({...addBook , author:e.target.value})
//         }} />

//          <label>id:</label>
//         <input type='number' value={addBook.id} onChange={(e)=>{
//             setBook({...addBook , id:e.target.value})
//         }} />

//          <label>author:</label>
//         <input type='text' value={addBook.title} onChange={(e)=>{
//             setBook({...addBook , title:e.target.value})
//         }} />

//         <label>isbn:</label>
//         <input type='text' value={addBook.isbn} onChange={(e)=>{
//             setBook({...addBook , isbn:e.target.value})
//         }} />

//         <button>Submit</button>
//     </form>

//         </>
        
//     );
// }

// export default Books;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db, dbURL } from '../firebaseConfg/config.js';

function Books() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        try {
            const response = await axios.get(`${dbURL}/books.json`);
            const data = response.data;
            if (data) {
                const booksArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setBooks(booksArray);
            } else {
                setBooks([]);
                console.log('No books found');
            }
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    async function deleteBook(id) {
        try {
            // Assuming you have a local state to manage UI (React specific)
            setBooks(prevBooks => prevBooks.filter(book => book.id !== id));

            // Update the boolen property in Firebase (not updating actual data, just an example)
            await axios.patch(`${dbURL}/books/${id}.json`, { boolen: false });
            
            console.log('Soft deleted book with ID:', id);
        } catch (error) {
            console.error('Error soft deleting book:', error);
        }
    }

    return (
        <>
            <div className="app">
                <div className="card-container">
                    {books.map((book) => (
                        <div className="card" key={book.id}>
                            <h2>{book.title}</h2>
                            <div className="info">
                                <p>المؤلف: {book.author}</p>
                                <p>رقم ISBN: {book.isbn}</p>
                                <p>الرقم التعريفي: {book.id}</p>
                                {book.boolen ? (
                                    <>
                                        <button onClick={() => deleteBook(book.id)}>Soft Delete</button>
                                    </>
                                ) : (
                                    <p>Deleted</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Books;

