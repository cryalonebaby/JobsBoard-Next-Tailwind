import calcDate from "../../utils/calcDate"

interface IProps {
  createdAt: string,
  salary: string
}

const MobilePrice = ({salary, createdAt}: IProps) => {
  const days = calcDate(createdAt)
  return (
    <div className="flex justify-between items-center">
      <span className="text-spanGray text-lg">Posted {days} days ago</span>
      <div className="xl:hidden flex flex-col-reverse items-end">
        <h2 className="font-proxima font-[700] text-darkGray text-xl">€ {salary}</h2>
        <p className="text-darkGray text-lg">Brutto, per year</p>
      </div>
    </div>
  )
}

export default MobilePrice