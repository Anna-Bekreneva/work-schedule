import { MouseEvent, useState } from 'react'
import DatePicker from 'react-datepicker'

import { Calendar } from '@/features'

import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [lastWorkDate, setLastWorkDate] = useState(new Date())
  const [workDays, setWorkDays] = useState(1)
  const [restDays, setRestDays] = useState(3)

  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const changeLastWorkDate = (date: Date) => setLastWorkDate(date)

  const calcSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsShowCalendar(true)
  }

  return (
    <>
      <p>Чтобы расчитать ваш график, нам нужно знать некоторые детали:</p>
      <form>
        <div>
          <label htmlFor={'works-day'}>Сколько дней вы работаете?</label>
          <input
            id={'works-day'}
            max={30}
            min={1}
            onChange={e => setWorkDays(Number(e.currentTarget.value))}
            type={'number'}
            value={workDays}
          />
        </div>
        <div>
          <label htmlFor={'rest-day'}>Сколько дней вы отдыхаете?</label>
          <input
            id={'rest-day'}
            max={30}
            min={1}
            onChange={e => setRestDays(Number(e.currentTarget.value))}
            type={'number'}
            value={restDays}
          />
        </div>
        <div>
          <label htmlFor={'last-work-day'}>Когда был ваш крайний рабочий день?</label>
          <DatePicker id={'last-work-day'} onChange={changeLastWorkDate} selected={lastWorkDate} />
        </div>
        <button onClick={calcSchedule} type={'submit'}>
          Рассчитать график
        </button>
      </form>
      {isShowCalendar && (
        <Calendar lastWorkDay={lastWorkDate} restDays={restDays} workDays={workDays} />
      )}
    </>
  )
}

export default App
