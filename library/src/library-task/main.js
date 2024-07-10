import {initState} from './books'


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



export default function Cards(){
  return(
      <div className="app">
      <div className="card-container">
        {initState.books.map((element) => (
          <div className="card" >
            <h2>{element.title}</h2>
            <div className="info">
              <p>المؤلف: {element.author}</p>
              <p>رقم ISBN: {element.isbn}</p>
              <p>الرقم التعريفي: {element.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}