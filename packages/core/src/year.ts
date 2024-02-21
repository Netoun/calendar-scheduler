import { eachMonthOfInterval, startOfYear, endOfYear } from 'date-fns'
import { getWeeks } from './month'

export const getMonths = (date: Date) => {
  const months = eachMonthOfInterval({
    start: startOfYear(date),
    end: endOfYear(date),
  })

  return months.map(month => {
    return {
      month,
      getWeeks: () => getWeeks(month),
    }
  })
}
