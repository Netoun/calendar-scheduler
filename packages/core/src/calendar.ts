import { getHours } from './day'
import { getWeeks } from './month'
import { getDays } from './week'
import { getMonths } from './year'

export type View = 'day' | 'week' | 'month' | 'year'

type CreateCalendarSchedulerParams<T> = {
  view: T
  date: Date
}

export const createCalendarScheduler = <T extends View>(
  params: CreateCalendarSchedulerParams<T>
) => {
  return {
    getTimeline: () => {
      const date = params.date
      if (params.view === 'day') {
        return getHours(date)
      }
      if (params.view === 'week') {
        return getDays(date)
      }
      if (params.view === 'month') {
        return getWeeks(date)
      }
      if (params.view === 'year') {
        return getMonths(date)
      }
      throw new Error('Invalid view')
    },
  }
}
