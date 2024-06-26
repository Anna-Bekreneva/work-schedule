import {I18nProvider} from 'react-aria'
import {Button, Calendar as YearCalendar, CalendarGrid, Heading,} from 'react-aria-components'

import {useCalendar} from './hooks'
import {CustomCalendarCell} from "@/components";

export type Props = {
  lastWorkDay: Date
  restDays: number
  workDays: number
}
export const Calendar = (props: Props) => {
  const { isDateUnavailable, maxValue, minValue } = useCalendar({ ...props })

  return (
    <I18nProvider locale={'ru-RU'}>
      <YearCalendar
        aria-label={'Appointment date'}
        isDateUnavailable={isDateUnavailable}
        isReadOnly
        maxValue={maxValue}
        value={minValue }
        visibleDuration={{months: 3}}
      >
        <header>
          <Button slot={'previous'}>◀</Button>
          <Heading />
          <Button slot={'next'}>▶</Button>
        </header>
        <div style={{ display: 'flex', gap: 30, overflow: 'auto' }}>
          <CalendarGrid>{date => <CustomCalendarCell date={date} minValue={minValue} />}</CalendarGrid>
          <CalendarGrid offset={{months: 1}}>{date => <CustomCalendarCell date={date} minValue={minValue} />}</CalendarGrid>
          <CalendarGrid offset={{months: 2}}>{date => <CustomCalendarCell date={date} minValue={minValue} />}</CalendarGrid>
        </div>
      </YearCalendar>
    </I18nProvider>
  )
}