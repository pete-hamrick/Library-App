import { useEffect, useState } from 'react'
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
    <ul className="book-list" aria-label="book list">
      {books.map((book) => (
        <li key={book.book_id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  )
}

export default BookList
