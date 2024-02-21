import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns'
import { getHours } from './day'

export const getDays = (date: Date) => {
  const days = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  })

  return days.map(day => {
    return {
      day,
      getHours: () => getHours(day),
    }
  })
}
