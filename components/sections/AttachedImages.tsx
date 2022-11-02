import ImgBox from '../elements/ImgBox'
import SectionTitle from '../elements/SectionTitle'

interface IProps {
  images: string[]
}

const AttachedImages = ({images}: IProps) => {
  return (
    <div className="mt-20">
      <SectionTitle title="Attached images" />
      <div className='flex justify-center'>
        <div className="flex w-[370px] sm:w-full overflow-scroll sm:overflow-hidden gap-2 mt-[20px]">
          {images.map((img, i) => (
            <ImgBox 
              key={i}
              img={img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AttachedImages