import { eachHourOfInterval, addHours, startOfDay, format } from 'date-fns'

export const getHours = (date: Date) => {
  const hours = eachHourOfInterval({
    start: addHours(startOfDay(date), 9),
    end: addHours(startOfDay(date), 19),
  })

  return hours.map(hour => {
    return {
      hour,
    }
  })
}
