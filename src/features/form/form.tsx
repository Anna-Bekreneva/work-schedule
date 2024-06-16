import {ChangeEvent, MouseEvent} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type Props = {
  workDays: number
  restDays: number
  lastWorkDate: Date
  restDaysHandle: (e: ChangeEvent<HTMLInputElement>) => void
  setWorksHandle: (e: ChangeEvent<HTMLInputElement>) => void
  submitFormHandle: (e: MouseEvent<HTMLButtonElement>) => void
  changeLastWorkDateHandle: (date: Date) => void
}
export const Form = ({workDays, restDays, lastWorkDate, restDaysHandle, changeLastWorkDateHandle, setWorksHandle, submitFormHandle}: Props) => {
  return (
    <form className={'form'}>
      <h2 className={'form__title'}>Чтобы расчитать ваш график, нам нужно знать некоторые детали:</h2>
      <div className={'form__content'}>
        <div className={'form__item'}>
          <label htmlFor={'works-day'}>Сколько дней вы работаете?</label>
          <input
            id={'works-day'}
            max={30}
            min={1}
            onChange={setWorksHandle}
            type={'number'}
            value={workDays}
          />
        </div>
        <div className={'form__item'}>
          <label htmlFor={'rest-day'}>Сколько дней вы отдыхаете?</label>
          <input
            id={'rest-day'}
            max={30}
            min={1}
            onChange={restDaysHandle}
            type={'number'}
            value={restDays}
          />
        </div>
        <div className={'form__item'}>
          <label htmlFor={'last-work-day'}>Когда был ваш крайний рабочий день?</label>
          <DatePicker id={'last-work-day'} onChange={changeLastWorkDateHandle} selected={lastWorkDate}/>
        </div>
        <button onClick={submitFormHandle} type={'submit'}>
          Рассчитать график
        </button>
      </div>
    </form>
  )
}