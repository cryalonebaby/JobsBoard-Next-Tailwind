interface IProps {
  img: string
}

const ImgBox = ({ img }: IProps) => {
  return (
    <div
      className="min-w-[200px] h-[120px] rounded-lg bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    />
  )
}

export default ImgBox