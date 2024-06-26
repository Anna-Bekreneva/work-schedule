import {CalendarDate, ZonedDateTime} from "@internationalized/date";
import {CalendarCell, CalendarCellProps} from "react-aria-components";

type Props = {
  date: CalendarDate;
  minValue: ZonedDateTime;
} & CalendarCellProps

export const CustomCalendarCell = ({ date, minValue}: Props) => {

  const beforeDate = new Date(`${date.year}-${date.month}-${date.day}`)
  const startDate = new Date(`${minValue.year}-${minValue.month}-${minValue.day}`)

  return (
    <CalendarCell
      date={date}
      className={`${beforeDate < startDate ? 'early react-aria-CalendarCell' : 'react-aria-CalendarCell'}`}
    />
  );
};