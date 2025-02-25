import React, { useState, useEffect } from "react";
import axios from "axios";
import { db, dbURL } from "../firebaseConfg/config.js";

function Books() {
  const [books, setBooks] = useState([]);
  const [addBook, setBook] = useState({
    author: "",
    id: null,
    title: "",
    isbn: "",
    boolen: true,
  });
  let [editData, setEditData] = useState({
    author: "",
    id: null,
    title: "",
    isbn: "",
    boolen: true,
  });

  let [isEditing, setIsEditing] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page

  //  ***********************************GET BOOKs
  async function fetchBooks() {
    const response = await axios.get(`${dbURL}/books.json`);
    const data = response.data;
    if (data) {
      const booksArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setBooks(booksArray);
    } else {
      console.log("No books found");
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  //  ***********************************ADD BOOKs
  async function addBooks(e) {
    e.preventDefault();
    await axios.put(`${dbURL}/books/${books.length}.json`, {
      ...addBook,
      id: books.length,
    });
    fetchBooks();
  }

  //  ***********************************DELETE BOOKs
  async function deleteBook(id) {
    await axios.patch(`${dbURL}/books/${id}.json`, { boolen: false });
    fetchBooks();
  }

  //  ***********************************EDIT BOOKs
  async function Edit(e) {
    e.preventDefault();
    await axios.patch(`${dbURL}/books/${editData.id}.json`, { ...editData });
    setIsEditing(false);
    fetchBooks();
  }

  function StartEditing(book) {
    setIsEditing(true);
    setEditData({ ...book });
  }

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* cards */}
      <div className="app">
        <div className="card-container">
          {currentBooks.map((book) =>
            book.boolen ? (
              <div className="card" key={book.id}>
                <h2>{book.title}</h2>
                <div className="info">
                  <p>المؤلف: {book.author}</p>
                  <p>رقم ISBN: {book.isbn}</p>
                  <p>الرقم التعريفي: {book.id}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => StartEditing(book)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(books.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {/* add form */}
      <form
        onSubmit={addBooks}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={addBook.title}
            onChange={(e) => setBook({ ...addBook, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={addBook.author}
            onChange={(e) => setBook({ ...addBook, author: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isbn"
          >
            ISBN:
          </label>
          <input
            type="text"
            id="isbn"
            value={addBook.isbn}
            onChange={(e) => setBook({ ...addBook, isbn: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-yellow-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Edit Form */}
      {isEditing ? (
        <form
          onSubmit={Edit}
          className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mt-8"
        >
          <h2 className="text-xl font-bold mb-4">Edit Book</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={editData.author}
              onChange={(e) =>
                setEditData({ ...editData, author: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="isbn"
            >
              ISBN:
            </label>
            <input
              type="text"
              id="isbn"
              value={editData.isbn}
              onChange={(e) =>
                setEditData({ ...editData, isbn: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
}

export default Books;
