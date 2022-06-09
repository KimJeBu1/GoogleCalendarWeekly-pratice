export default function checkIsThisWeek(day: Date, current: Date): boolean {
  const currentDate = current.getDate()
  const currentYaer = current.getFullYear()
  const currentMonth = current.getMonth()
  const currentDay = current.getDay()
  const firstDayOfThisWeek = new Date(currentYaer, currentMonth, currentDate - currentDay).getTime()
  const lastDayOfThisWeek = new Date(
    currentYaer,
    currentMonth,
    currentDate,
    currentDate - currentDay + 6
  ).getTime()

  return firstDayOfThisWeek <= day.getTime() && day.getTime() <= lastDayOfThisWeek
}
