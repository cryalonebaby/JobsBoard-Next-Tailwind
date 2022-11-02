// format mm-dd-yyyy
const calcDate = (dateOne: string) => {
  const time1 = new Date(dateOne?.slice(0, 10)).getTime()
  const time2 = new Date().getTime()
  const diff = new Date(time1 - time2)
  const calcFormatTmp = `${diff.getDate()}-${diff.getMonth() + 1}-${diff.getFullYear()}`
  const calcFormat = calcFormatTmp.split('-')
  const calcFormatNumbers = calcFormat.map(el => +el) // change array to number array
  
  //Subtract each member of our array from the default date 01-01-1970
  const days = Number(Math.abs(calcFormatNumbers[0] - 1))
  const months = Number(Math.abs(calcFormatNumbers[1] - 1))
  const years = Number(Math.abs(calcFormatNumbers[2] - 1970))

  // Total by Google Formula
  const totalDays = (years * 365) + (months * 30.417) + days

  return totalDays.toFixed(0);
}

export default calcDate