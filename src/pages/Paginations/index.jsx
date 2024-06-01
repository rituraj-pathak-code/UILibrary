import React, { useState } from 'react'
import styles from './index.module.css'
import Pagination from '../../components/Pagination'
import DisplayCode from '../../components/DisplayCode'
import { basicPagination } from '../../constants/paginationStrings'

const Paginations = () => {
    const [page, setPage] = useState(0)
    const pageChangeHandler = (index) => {
        setPage(index)
    }
  const basicPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} shape='rounded' key={2}/>,
  ]
  const outlinedPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} variant='outlined' key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} variant='outlined' shape='rounded' key={2}/>,
  ]
  const coloredPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} type='primary' variant='outlined' key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} type='secondary' variant='outlined' shape='rounded' key={2}/>,
  ]
  const sizePaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='large' variant='outlined' key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='small' variant='outlined' shape='rounded' key={2}/>,
  ]
  const disabledPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} variant='outlined' disabled key={1} />,
  ]
  return (

  <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2>Pagination</h2>
      <p>
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3>Basic Pagination</h3>
        <DisplayCode
          components={basicPaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
      <div>
        <h3>Outlined Pagination</h3>
        <DisplayCode
          components={outlinedPaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
      <div>
        <h3>Colored Pagination</h3>
        <DisplayCode
          components={coloredPaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
      <div>
        <h3>Sized Pagination</h3>
        <DisplayCode
          components={sizePaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
      <div>
        <h3>Disabled Pagination</h3>
        <DisplayCode
          components={disabledPaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
    
    
      
    </div>
  </div>
  )
}

export default Paginations