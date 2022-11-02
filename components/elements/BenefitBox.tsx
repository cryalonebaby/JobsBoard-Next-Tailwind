interface IProps {
  text: string,
  isBlue: boolean
}

const BenefitBox = ({text, isBlue}: IProps) => {
  if(isBlue) return (
    <div className="flex flex-1 justify-center items-center rounded-lg bg-lightBlue border border-borderBlue max-w-[222px] h-[50px]">
      <span className="font-proxima font-[700] text-darkBlue">{text}</span>
    </div>
  )
  return (
    <div className="flex flex-1 justify-center items-center rounded-lg bg-lightYellow border border-borderYellow max-w-[222px] h-[50px]">
      <span className="font-proxima font-[700] text-darkYellow">{text}</span>
    </div>
  )
  
}

export default BenefitBox