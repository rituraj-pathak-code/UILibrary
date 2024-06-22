export const basicPagination = `const [page, setPage] = useState(0)
const pageChangeHandler = (index) => {
    setPage(index)
}
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} rounded />`

export const outlinedPagination = `const [page, setPage] = useState(0)
const pageChangeHandler = (index) => {
    setPage(index)
}
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} outlined />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} outlined rounded />`

export const coloredPagination = `const [page, setPage] = useState(0)
const pageChangeHandler = (index) => {
    setPage(index)
}
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='primary' outlined  />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='secondary' outlined rounded />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='success' />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='info' rounded />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='warning' outlined />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='error' outlined rounded />`

export const sizedPagination = `const [page, setPage] = useState(0)
const pageChangeHandler = (index) => {
    setPage(index)
}
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='large' category='primary' />
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} size='small' category='secondary' /,`

export const disabledPagination = `const [page, setPage] = useState(0)
const pageChangeHandler = (index) => {
    setPage(index)
}
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='disabled' />,
<Pagination page = {page} pageLimit={10} totalRecords={100} handleChange={pageChangeHandler} category='disabled' outlined />,,`