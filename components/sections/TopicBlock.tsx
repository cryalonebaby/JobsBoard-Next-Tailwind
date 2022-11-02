interface IProps {
  description: string
}

const TopicBlock = ({description}: IProps) => {
  return (
    <div className="flex flex-col items-start mt-8">
      <h2 className="font-proxima font-[700] text-darkGray text-xl">Responsopilities</h2>
      <div className="flex flex-col gap-6">
        <p className="text-darkGray text-lg">
          {description}
        </p>
        <p className="text-darkGray text-lg">
          {description}
        </p>
        <p className="text-darkGray text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TopicBlock