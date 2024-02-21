import { describe, expect, it } from 'vitest'
import { View, createCalendarScheduler } from '../src/calendar'
import { getDays } from '../src/week'
import { getHours } from '../src/day'

describe('get timeline fort current week', () => {
  const calendar = createCalendarScheduler({
    view: 'week',
    date: new Date(),
  })

  it('should return 7 days', () => {
    expect(calendar.getTimeline().length).toBe(7)
  })
})
