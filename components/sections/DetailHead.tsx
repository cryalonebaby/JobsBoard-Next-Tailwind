import { FiBookmark } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { HiShare } from 'react-icons/hi'
import SectionTitle from '../elements/SectionTitle'

const DetailHead = () => {
  return (
    <>
      {/* Heading */}
      <div className="hidden xl:flex justify-between items-center border-b border-borderGray pb-3">
        <h1 className="font-proxima font-bold text-3xl text-darkGray">Job Details</h1>
        <div className="flex gap-7">
          <div className="flex items-center gap-4">
            <FiBookmark className='text-iconGray w-[20px] h-[24px]' />
            <p className="text-lg text-darkGray">Save to my list</p>
          </div>
          <div className="flex items-center gap-4">
            <HiShare className='text-iconGray w-[20px] h-[24px]' />
            <p className="text-lg text-darkGray">Share</p>
          </div>
        </div>
      </div>
      {/* Heading Mobile */}
      <div className="flex flex-col gap-6 xl:hidden">
        <SectionTitle title="Job Details" />
        <div className="flex gap-7">
          <div className="flex items-center gap-4">
            <AiOutlineStar className='text-iconGray w-[20px] h-[24px]' />
            <p className="text-lg text-darkGray">Save to my list</p>
          </div>
          <div className="flex items-center gap-4">
            <HiShare className='text-iconGray w-[20px] h-[24px]' />
            <p className="text-lg text-darkGray">Share</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailHead