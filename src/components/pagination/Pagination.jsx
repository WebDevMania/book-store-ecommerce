import React from 'react'
import classes from './pagination.module.css'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Pagination = ({
  setItemOffset,
  itemsPerPage,
  books
}) => {
  const handlePageClick = (event) => {
    console.log(event.selected, "event.selected")
    const newOffset = (event.selected * itemsPerPage) % books?.length

    setItemOffset(newOffset)
  }

  return (
    <ReactPaginate
      nextClassName={`${classes.item} ${classes.nextArrow}`}
      previousClassName={`${classes.item} ${classes.previousArrow}`}
      pageClassName={`${classes.item}`}
      activeClassName={`${classes.item} ${classes.active}`}
      breakClassName={`${classes.item}`}
      containerClassName={`${classes.pagination}`}
      breakLabel="..."
      previousLabel={<AiOutlineArrowLeft size={25} />}
      nextLabel={<AiOutlineArrowRight size={25} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={books?.length / itemsPerPage}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination