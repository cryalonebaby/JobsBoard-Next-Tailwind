import {ImLocation} from 'react-icons/im'
import {FiBookmark} from 'react-icons/fi'
import {FaStar} from 'react-icons/fa'
import { useRouter } from "next/router"
import calcDate from '../../utils/calcDate'

interface IProps {
  id: string,
  img: string,
  title: string,
  name: string,
  createdAt: string,
  address: string,
  benefits: string[],
  employment_type: string[]
}

const Card = ({img, title, name, benefits, employment_type, id, createdAt, address}: IProps) => {
  const router = useRouter()

  const navigate = (id: string) => {
    router.push(`details/${id}`)
  }

  const days = calcDate(createdAt)
  
  return (
    <div className='w-[100%] md:flex-row md:justify-between md:bg-white bg-cardGray flex-col-reverse items-end md:items-center flex gap-8 bg-[#fff] px-4 py-6 rounded-lg shadow-md'>
      <div className='flex gap-6 self-start'>
        <div 
          className='px-8 w-[66px] h-[66px] md:w-[85px] md:h-[85px] overflow-hidden rounded-full bg-cover bg-center' 
          style={{backgroundImage: `url(${img})`}}
        />
        <div className='flex flex-col gap-2' onClick={() => navigate(id)}>
          <h1 className='hover:cursor-pointer max-w-[512px] text-darkGray font-proxima font-bold text-xl'>
            {title}
          </h1>
          <p className='text-lightGray font-proxima'>
            {name} •  {benefits[0]} - {employment_type[0]}
          </p>
          <div className='flex gap-1'>
            <ImLocation className='text-lightGray w-[15px] h-[20px]'/>
            <p className='text-lightGray font-proxima'>{address}</p>
          </div>
        </div>
      </div>
      <div className='flex self-end gap-8 items-center justify-between w-[260px]'>
        <div className='flex'>
          {[...Array(5)].map((item, i) => (
            <FaStar key={i} className='text-starGray'/>
          ))}
        </div>
        <div className='flex flex-col justify-between gap-11'>
          <div className='w-[100%] hidden md:flex justify-end'>
            <FiBookmark className='text-iconGray w-[20px] h-[24px]'/>
          </div>
          <div className='w-[100%]'>
            <p className='text-lightGray font-proxima'>Posted {days} days ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card