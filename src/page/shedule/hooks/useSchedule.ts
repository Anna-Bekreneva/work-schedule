import {ChangeEvent, MouseEvent, useState} from "react";

export const useSchedule = () => {
  const [lastWorkDate, setLastWorkDate] = useState(new Date())
  console.log(lastWorkDate)
  const [workDays, setWorkDays ] = useState(1)
  const [restDays, setRestDays] = useState(3)

  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const changeLastWorkDate = (date: Date) => {
    setLastWorkDate(date)
  } 

  const calcSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsShowCalendar(true)
  }

  const restDaysHandle = (e: ChangeEvent<HTMLInputElement>) => setRestDays(Number(e.currentTarget?.value))

  const setWorksHandle = (e: ChangeEvent<HTMLInputElement>) => setWorkDays(Number(e.currentTarget.value))

  return {changeLastWorkDate, calcSchedule, setWorksHandle, restDays, workDays, lastWorkDate, restDaysHandle, isShowCalendar}
}