import { useState } from 'react'
import { IJob } from "../models/job"

const usePagination = (data: IJob[], itemsPerPage: number) => {

  // current page state
  const [currPage, setCurrPage] = useState(0)

  // count amount of all pages
  const pages = Math.ceil(data.length / itemsPerPage)
  
  // get first and last slice of initial array
  const firstSlice = currPage * itemsPerPage
  const secondSlice = currPage + 1 === pages ? data.length : ((currPage + 1) * itemsPerPage)

  // next page function
  const nextPage = () => {
    if(currPage === pages - 1) {
      return
    }
    setCurrPage(prev => prev += 1)
  }

  // prev page function
  const prevPage = () => {
    if(currPage === 0) {
      return
    }
    setCurrPage(prev => prev -= 1)
  }

  return {
    currPage, 
    pages, 
    firstSlice, 
    secondSlice, 
    setCurrPage, 
    nextPage, 
    prevPage
  }
}

export default usePagination