import { ImLocation } from 'react-icons/im'
import Image from 'next/image'
import MapImg from '../../public/map.jpg'

interface IProps {
  name: string,
  phone: string,
  email: string,
  address: string,
  location: {
    lat: number,
    long: number
  }
}

const Map = ({ name, phone, email, address, location }: IProps) => {
  console.log(location);
  
  return (
    <div className="w-[380px] sm:w-[420px] mb-[37px]">
      <div className='relative overflow-hidden w-[380px] sm:w-[420px] h-[218px] bg-mapLight px-16 pt-8 pb-4 rounded-t-lg'>
        <div className='w-[300px] h-[300px] rounded-full absolute top-[-40px] left-[-100px] bg-mapDark'></div>
        <div className='absolute t-0 l-0 flex flex-col gap-1'>
          <h5 className='font-proxima font-bold text-xl text-hWhite'>{name}</h5>
          <div className='flex items-center gap-1'>
            <ImLocation className='text-locWhite w-[15px] h-[20px]'/>
            <p className='text-lg text-pWhite'>{address}</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg text-pWhite'>{phone},</p>
            <p className='text-lg text-pWhite'>{email}</p>
          </div>
        </div>
      </div>
      <div 
        className='w-[380px] sm:w-[420px] h-[218px] rounded-b-lg overflow-hidden relative'
      >
        <ImLocation className='text-locWhite w-[36px] h-[36px] absolute top-20 left-20'/>
        <Image width={420} src={MapImg} alt='Map'/>
      </div>
    </div>
  )
}

export default Map