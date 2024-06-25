import { ChangeEvent, MouseEvent } from 'react'
import DatePicker from 'react-datepicker'
import { Field } from '@/components'

type Props = {
  workDays: number
  restDays: number
  lastWorkDate: Date
  restDaysHandle: (e: ChangeEvent<HTMLInputElement>) => void
  setWorksHandle: (e: ChangeEvent<HTMLInputElement>) => void
  submitFormHandle: (e: MouseEvent<HTMLButtonElement>) => void
  changeLastWorkDateHandle: (date: Date) => void
}
export const Form = ({
  workDays,
  restDays,
  lastWorkDate,
  restDaysHandle,
  changeLastWorkDateHandle,
  setWorksHandle,
  submitFormHandle,
}: Props) => {
  return (
    <form className={'form'}>
      <h2 className={'form__title'}>
        Чтобы расчитать ваш график, нам нужно знать некоторые детали:
      </h2>
      <div className={'form__content'}>
        <Field
          label={'Сколько дней вы работаете?'}
          id={'works-day'}
          max={30}
          min={1}
          onChange={setWorksHandle}
          type={'number'}
          value={workDays}
        />

        <Field
          label={'Сколько дней вы отдыхаете?'}
          id={'rest-day'}
          type={'number'}
          max={30}
          onChange={restDaysHandle}
          value={restDays}
          min={1}
        />
        <div className={'form__item'}>
          <label htmlFor={'last-work-day'}>Когда был ваш крайний рабочий день?</label>
          <DatePicker
            id={'last-work-day'}
            onChange={changeLastWorkDateHandle}
            selected={lastWorkDate}
          />
        </div>
        <button className={'form__button'} onClick={submitFormHandle} type={'submit'}>
          Рассчитать график
        </button>
      </div>
    </form>
  )
}
