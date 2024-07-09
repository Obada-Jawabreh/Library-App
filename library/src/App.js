import logo from './logo.svg';
import './App.css';
import Cards from './library-task/main'
import Header from './library-task/header'
import './library-task/header.css'
import Footer from './library-task/footer'
import {initState} from './library-task/books'


function App() {
  return (
    <>
  <Header/>
  <main>
  {initState.books.map((book) => (
            <Cards
              title={book.title}
              author={book.author}
              isbn={book.isbn}
              id={book.id}
            />
          ))}
  </main>
  <Footer/>
  </>
  );
}

export default App;

