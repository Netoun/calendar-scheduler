import { eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns'
import { getDays } from './week'

export const getWeeks = (date: Date) => {
  const weeks = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })

  return weeks.map(week => {
    return {
      week,
      getDays: () => getDays(week),
    }
  })
}
