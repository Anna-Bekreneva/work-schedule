import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'
import {v1} from "uuid";

type Props = {
  containerClassName?: string
  labelClassName?: string
  id?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const Field = ({
  containerClassName,
  labelClassName,
  label,
  className,
  id,
  value: initialValue,
  onChange,
  ...rest
}: Props) => {
  const finalId = id || v1()

  const [value, setValue] = useState(initialValue || '')

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    onChange && onChange(e)
  }

  return (
    <div className={`form__item ${containerClassName}`}>
      {label && <label htmlFor={finalId}>{label}</label>}
      <input id={finalId} onChange={changeValueHandler} value={value} {...rest} />
    </div>
  )
}
