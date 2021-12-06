import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../../components/book/Book'
import { getBooks } from '../../services/books'

function BookList() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBooks()
      .then(({ data }) => setBooks(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading books...</h1>

  return (
    <>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Link to="/book/:id">
              <Book book={book} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BookList
