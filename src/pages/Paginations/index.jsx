import React, { useState } from 'react'
import styles from './index.module.css'
import Pagination from '../../components/Pagination'
import DisplayCode from '../../components/DisplayCode'
import { basicPagination, coloredPagination, disabledPagination, outlinedPagination, sizedPagination } from '../../constants/paginationStrings'

const Paginations = () => {
    const [page, setPage] = useState(0)
    const pageChangeHandler = (index) => {
        setPage(index)
    }
  const basicPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} rounded key={2}/>,
  ]
  const outlinedPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} outlined key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} outlined rounded key={2}/>,
  ]
  const coloredPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='primary' outlined key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='secondary' outlined rounded key={2}/>,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='success' key={3}/>,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='info' rounded key={4}/>,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='warning' outlined key={5}/>,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='error' outlined rounded key={6}/>,
  ]
  const sizePaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='large' category='primary' key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='small' category='secondary' key={2}/>,
  ]
  const disabledPaginationArray = [
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='disabled' key={1} />,
    <Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='disabled' outlined key={2} />,
  ]
  return (

  <div className={styles.superContainer}>
    <div className={styles.heading}>
      <h2 className="headingText">Pagination</h2>
      <p className="paragraphText">
      A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      </p>
    </div>
    <div className={styles.container}>
      <div>
        <h3 className="subHeadingText">Basic Pagination</h3>
        <DisplayCode
          components={basicPaginationArray}
          codeString={`${basicPagination}`}
        />
      </div>
      <div>
        <h3 className="subHeadingText">Outlined Pagination</h3>
        <DisplayCode
          components={outlinedPaginationArray}
          codeString={`${outlinedPagination}`}
        />
      </div>
      <div>
        <h3 className="subHeadingText">Colored Pagination</h3>
        <DisplayCode
          components={coloredPaginationArray}
          codeString={`${coloredPagination}`}
        />
      </div>
      <div>
        <h3 className="subHeadingText">Sized Pagination</h3>
        <DisplayCode
          components={sizePaginationArray}
          codeString={`${sizedPagination}`}
        />
      </div>
      <div>
        <h3 className="subHeadingText">Disabled Pagination</h3>
        <DisplayCode
          components={disabledPaginationArray}
          codeString={`${disabledPagination}`}
        />
      </div>
    
    
      
    </div>
  </div>
  )
}

export default Paginations