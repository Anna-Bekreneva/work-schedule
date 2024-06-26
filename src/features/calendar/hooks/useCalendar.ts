import { CalendarDate, DateValue, fromDate, getLocalTimeZone } from '@internationalized/date'
import { Props } from '@/features/calendar'

export const useCalendar = ({ workDays, lastWorkDay, restDays }: Props) => {
  const newDate = new Date(lastWorkDay)
  const now = new CalendarDate(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate())

  const minValue = fromDate(new Date(newDate.setDate(newDate.getDate())), getLocalTimeZone())

  const maxValue = fromDate(
    new Date(newDate.setFullYear(newDate.getFullYear() + 1)),
    getLocalTimeZone()
  )

  const disabledRanges: CalendarDate[][] = []

  let currentDate = now

  while (currentDate.compare(maxValue) < 0) {
    // Начало рабочего периода
    const workStartDate = currentDate
    // Конец рабочего периода
    const workEndDate = currentDate.add({ days: workDays - 1 })

    // Добавляем рабочий период в массив
    disabledRanges.push([workStartDate, workEndDate])

    // Обновляем текущую дату, добавляя рабочие дни и дни отдыха
    currentDate = workEndDate.add({ days: restDays + 1 })

    // Проверяем, не выходит ли следующий рабочий период за пределы maxValue
    if (currentDate.add({ days: workDays }).compare(maxValue) > 0) {
      break // Если выходит, прерываем цикл
    }
  }

  const isDateUnavailable = (date: DateValue) =>
    disabledRanges.some(
      interval => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    )

  return { isDateUnavailable, maxValue, minValue }
}
