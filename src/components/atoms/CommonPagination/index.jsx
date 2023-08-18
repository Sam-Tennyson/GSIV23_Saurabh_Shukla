import { Pagination } from '@mui/material'
import React from 'react'

const CommonPagination = ({
    pagecount, currentPage, onPageClick = () => {}
}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items center">
        <Pagination count={pagecount} page={currentPage} onChange={onPageClick} />
      </div>
    </>
  )
}

export default CommonPagination