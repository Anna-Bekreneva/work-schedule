import {Calendar, Form} from "@/features";
import {useSchedule} from "./hooks";

export const Schedule = () => {

  const {changeLastWorkDate, calcSchedule, setWorksHandle, restDays, workDays, lastWorkDate, restDaysHandle, isShowCalendar} = useSchedule()

  return (
    <section className={'wrapper'}>
      <Form
        changeLastWorkDateHandle={changeLastWorkDate}
        submitFormHandle={calcSchedule}
        setWorksHandle={setWorksHandle}
        restDays={restDays}
        workDays={workDays}
        lastWorkDate={lastWorkDate}
        restDaysHandle={restDaysHandle}
      />
      {isShowCalendar && (
        <Calendar
          lastWorkDay={lastWorkDate}
          restDays={restDays}
          workDays={workDays}
        />
      )}
    </section>
  )
}