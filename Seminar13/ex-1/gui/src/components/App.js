import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, deleteBook } from '../actions'

function App () {
  const dispatch = useDispatch()
  const { bookList, fetching, error } = useSelector(state => state.book)

  const filterString = ''
  const page = ''
  const pageSize = ''
  const sortField = ''
  const sortOrder = ''

  useEffect(() => {
    dispatch(getBooks(filterString, page, pageSize, sortField, sortOrder))
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteBook(id, filterString, page, pageSize, sortField, sortOrder))
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Books</h2>

      {fetching && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {String(error)}</p>}

      {bookList.length === 0 && !fetching && <p>No books</p>}

      <ul>
        {bookList.map(book => (
          <li key={book.id} style={{ marginBottom: 8 }}>
            <b>{book.title}</b>
            <button
              style={{ marginLeft: 12 }}
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
