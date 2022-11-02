const ListBlock = () => {
  return (
    <div className="flex flex-col items-start mt-8">
      <h2 className="font-proxima font-[700] text-darkGray text-xl xl:ml-[20px]">Compensation & Benefits:</h2>
      <div className="flex flex-col gap-1">
        <p className="text-darkGray text-lg xl:ml-[20px]">
          Our physicians enjoy a wide range of benefits, including:
        </p>
        {/* List Items */}
        <div className="flex items-center gap-[13px]">
          <div className="w-[9px] h-[9px] bg-pointGray"></div>
          <p className="text-darkGray text-lg">
            Very competitive compensation package with bonuses
          </p>
        </div>
        <div className="flex items-center gap-[13px]">
          <div className="w-[9px] h-[9px] bg-pointGray"></div>
          <p className="text-darkGray text-lg">
            Medical, Dental, and Vision Insurance
          </p>
        </div>
        <div className="flex items-center gap-[13px]">
          <div className="w-[9px] h-[9px] bg-pointGray"></div>
          <p className="text-darkGray text-lg">
            Occurrence-based Malpractice Coverage
          </p>
        </div>
        <div className="flex items-center gap-[13px]">
          <div className="w-[9px] h-[9px] bg-pointGray"></div>
          <p className="text-darkGray text-lg max-w-[400px]">
            Short-term and Long-term Disability Insurance and life insurance
          </p>
        </div>
      </div>
    </div>
  )
}

export default ListBlock