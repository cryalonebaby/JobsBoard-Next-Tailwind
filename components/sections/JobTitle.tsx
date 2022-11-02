interface IProps {
  title: string,
  salary: string
}

const JobTitle = ({title, salary}: IProps) => {
  return (
    <div className="flex justify-between items-start">
      <h1 className="w-full xl:max-w-[500px] font-proxima font-bold text-darkGray text-2xl">
        {title}
      </h1>
      <div className="hidden xl:flex flex-col justify-start">
        <h2 className="font-proxima font-bold text-darkGray text-xl">€ {salary}</h2>
        <p className="text-darkGray text-lg">Brutto, per year</p>
      </div>
    </div>
  )
}

export default JobTitle