import { I18nProvider } from 'react-aria'
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  Calendar as YearCalendar,
} from 'react-aria-components'

import {useCalendar} from "./hooks";

export type CalendarProps = {
  lastWorkDay: Date
  restDays: number
  workDays: number
}
export const Calendar = (props: CalendarProps) => {

  const {isDateUnavailable, maxValue, minValue} = useCalendar({...props})

  return (
    <I18nProvider locale={'ru-RU'}>
      <YearCalendar
        aria-label={'Appointment date'}
        isDateUnavailable={isDateUnavailable}
        isReadOnly
        maxValue={maxValue}
        minValue={minValue}
        visibleDuration={{ months: 1 }}
      >
        <header>
          <Button slot={'previous'}>◀</Button>
          <Heading />
          <Button slot={'next'}>▶</Button>
        </header>
        <div style={{ display: 'flex', gap: 30, overflow: 'auto' }}>
          <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
        </div>
      </YearCalendar>
    </I18nProvider>
  )
}
