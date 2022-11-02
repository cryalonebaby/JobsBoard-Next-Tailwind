interface IProps {
  title: string
}

const SectionTitle = ({title}: IProps) => {
  return (
    <div className="flex justify-between items-center border-b border-borderGray pb-3 w-full">
      <h1 className="font-proxima font-bold text-3xl text-darkGray">{title}</h1>
    </div>
  )
}

export default SectionTitle