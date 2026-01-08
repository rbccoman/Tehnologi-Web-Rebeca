import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, deleteBook } from '../actions'

const bookListSelector = state => state.book.bookList

function BookList () {
  const dispatch = useDispatch()
  const bookList = useSelector(bookListSelector)

  // paginare
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(5)

  const filterString = ''
  const sortField = ''
  const sortOrder = ''

  useEffect(() => {
    dispatch(getBooks(filterString, page, pageSize, sortField, sortOrder))
  }, [dispatch, filterString, page, pageSize, sortField, sortOrder])

  const handlePrev = () => {
    setPage(p => Math.max(0, p - 1))
  }

  const handleNext = () => {
    if (bookList.length === pageSize) {
      setPage(p => p + 1)
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteBook(id, filterString, page, pageSize, sortField, sortOrder))
  }

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10)
    setPageSize(newSize)
    setPage(0) // reset 
  }

  return (
    <div style={{ padding: 12 }}>
      <h2>Books</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <button onClick={handlePrev} disabled={page === 0}>Prev</button>
        <span>Page: {page + 1}</span>
        <button onClick={handleNext} disabled={bookList.length < pageSize}>Next</button>

        <label style={{ marginLeft: 12 }}>
          Page size:{' '}
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </label>
      </div>

      <div>
        {bookList.map(b => (
          <div
            key={b.id}
            style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #eee' }}
          >
            <span>{b.title}</span>
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </div>
        ))}
        {bookList.length === 0 && <p>No books on this page.</p>}
      </div>
    </div>
  )
}

export default BookList
