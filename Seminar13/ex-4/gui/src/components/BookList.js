import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { FilterMatchMode } from 'primereact/api'

import { Chart } from 'react-google-charts'
import { Chart } from 'primereact/chart'


import { getBooks, addBook, saveBook, deleteBook } from '../actions'

const bookSelector = state => state.book.bookList
const bookCountSelector = state => state.book.count

function BookList () {
  const [isDialogShown, setIsDialogShown] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [isNewRecord, setIsNewRecord] = useState(true)
  const [selectedBook, setSelectedBook] = useState(null)
  const [filterString, setFilterString] = useState('')

  const [chartData, setChartData] = useState([])

  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState(1)

  const [filters, setFilters] = useState({
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
    content: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  const [page, setPage] = useState(0)
  const [first, setFirst] = useState(0)

  const [isChartDialogShown, setIsChartDialogShown] = useState(false)

  const [isChartsDialogVisible, setIsChartsDialogVisible] = useState(false)

  const handleFilter = (evt) => {
    const oldFilters = filters
    oldFilters[evt.field] = evt.constraints.constraints[0]
    setFilters({ ...oldFilters })
  }

  const handleFilterClear = (evt) => {
    setFilters({
      title: { value: null, matchMode: FilterMatchMode.CONTAINS },
      content: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })
  }

  useEffect(() => {
    const keys = Object.keys(filters)
    const computedFilterString = keys.map(e => {
      return {
        key: e,
        value: filters[e].value
      }
    }).filter(e => e.value).map(e => `${e.key}=${e.value}`).join('&')
    setFilterString(computedFilterString)
  }, [filters])

  const books = useSelector(bookSelector)
  const count = useSelector(bookCountSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks(filterString, page, 2, sortField, sortOrder))
  }, [filterString, page, sortField, sortOrder])

  useEffect(() => {
    const data = [['Title', 'Pages']]
    for (const book of books) {
      data.push([book.title, book.pageCount])
    }
    setChartData(data)
  }, [books])

  const chartOptions = {
    chart: {
      title: 'Books',
      subtitle: 'Number of pages'
    }
  }

  const handleAddClick = (evt) => {
    setIsDialogShown(true)
    setIsNewRecord(true)
    setTitle('')
    setContent('')
  }

  const hideDialog = () => {
    setIsDialogShown(false)
  }

  const handleSaveClick = () => {
    if (isNewRecord) {
      dispatch(addBook({ title, content, pageCount }))
    } else {
      dispatch(saveBook(selectedBook, { title, content, pageCount }))
    }
    setIsDialogShown(false)
    setSelectedBook(null)
    setTitle('')
    setContent('')
    setPageCount(0)
  }

  const editBook = (rowData) => {
    setSelectedBook(rowData.id)
    setTitle(rowData.title)
    setContent(rowData.content)
    setIsDialogShown(true)
    setIsNewRecord(false)
  }

  const handleDeleteBook = (rowData) => {
    dispatch(deleteBook(rowData.id))
  }

  const handleChartClick = () => {
    setIsChartDialogShown(true)
  }

  const tableFooter = (
    <div>
      <Button label='Add' icon='pi pi-plus' onClick={handleAddClick} />
      <Button
  label='Charts'
  icon='pi pi-chart-pie'
  className='p-button-secondary'
  onClick={() => setIsChartsDialogVisible(true)}
/>
     <Button label='Charts' icon='pi pi-chart' onClick={handleChartClick} />
     <Dialog
  visible={isChartsDialogVisible}
  onHide={() => setIsChartsDialogVisible(false)}
  header='Charts'
  style={{ width: '50vw' }}
>
  <h3>Books by content length</h3>
  <Chart type="pie" data={pieData} />
</Dialog>

    </div>
    
  )

  

  const hideChartDialog = () => {
    setIsChartDialogShown(false)
  }

  const dialogFooter = (
    <div>
      <Button label='Save' icon='pi pi-save' onClick={handleSaveClick} />
    </div>
  )

  const opsColumn = (rowData) => {
    return (
      <>
        <Button label='Edit' icon='pi pi-pencil' onClick={() => editBook(rowData)} />
        <Button label='Delete' icon='pi pi-times' className='p-button p-button-danger' onClick={() => handleDeleteBook(rowData)} />
      </>
    )
  }

  const handlePageChange = (evt) => {
    setPage(evt.page)
    setFirst(evt.page * 2)
  }

  const handleSort = (evt) => {
    console.warn(evt)
    setSortField(evt.sortField)
    setSortOrder(evt.sortOrder)
  }

  const short = bookList.filter(b => (b.content || '').length < 50).length
const medium = bookList.filter(b => (b.content || '').length >= 50 && (b.content || '').length < 200).length
const long = bookList.filter(b => (b.content || '').length >= 200).length

const pieData = {
  labels: ['Short (<50)', 'Medium (50-199)', 'Long (>=200)'],
  datasets: [
    {
      data: [short, medium, long]
    }
  ]
}


  return (
  <div>
    <DataTable value={bookList}>
      <Column field='title' header='Title' />
      <Column field='content' header='Content' />
      <Column body={opsTemplate} />
    </DataTable>

    <div style={{ marginTop: 10, display: 'flex', gap: 10 }}>
      <Button label='Add' icon='pi pi-plus' onClick={handleAddClick} />
      <Button label='Charts' icon='pi pi-chart-pie' className='p-button-secondary' onClick={() => setIsChartsDialogVisible(true)} />
    </div>

    {/* Dialog Book Details */}
    <Dialog visible={isDialogVisible} onHide={() => setIsDialogVisible(false)} header='Book Details'>
      <div className='p-field'>
        <label htmlFor='title'>Title</label>
        <InputText id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='p-field'>
        <label htmlFor='content'>Content</label>
        <InputText id='content' value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <Button label='Save' icon='pi pi-check' onClick={handleSaveClick} />
    </Dialog>

    {/* Dialog Charts */}
    <Dialog
      visible={isChartsDialogVisible}
      onHide={() => setIsChartsDialogVisible(false)}
      header='Charts'
      style={{ width: '50vw' }}
    >
      <h3>Books by content length</h3>
      <Chart type="pie" data={pieData} />
    </Dialog>
  </div>
)

}

export default BookList
