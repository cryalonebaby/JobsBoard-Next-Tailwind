import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface IProps {
  pages: number,
  currPage: number,
  setCurrPage: Function,
  nextPage: Function,
  prevPage: Function
}

const Pagination = ({ pages, currPage, setCurrPage, nextPage, prevPage }: IProps) => {
  return (
    <div className='flex items-end bg-white rounded-lg shadow-md h-[52px]'>
      <button 
        className='flex self-center items-center justify-center min-w-[52px] h-[70%] border-r border-borderGray'
        onClick={() => prevPage()}
      >
        <MdKeyboardArrowLeft className='text-[#7D859C] font-bold text-4xl hidden sm:block' />
      </button>
      <div className='flex flex-1 mx-[25px] sm:mx-[55px] items-end justify-center'>
        {[...Array(pages)].map((el, i) => {
          if (currPage === i) return (
            <button className='flex items-between justify-center h-[38px] w-[32px] border-b-2 border-paginationBlue'>
              <p className='text-sl font-proxima text-paginationBlue font-bold'>{i + 1}</p>
            </button>
          )
          return (
            <button
              key={i}
              className='flex items-between justify-center h-[38px] w-[32px]'
              onClick={() => setCurrPage(i)}
            >
              <p className='text-sl font-proxima text-iconGray font-bold'>{i + 1}</p>
            </button>
          )
        })}
      </div>
      <button 
        className='flex self-center items-center justify-center min-w-[52px] h-[70%] border-l border-borderGray'
        onClick={() => nextPage()}
      >
        <MdKeyboardArrowRight className='text-[#7D859C] font-bold text-4xl hidden sm:block' />
      </button>
    </div>

  )
}

export default Pagination