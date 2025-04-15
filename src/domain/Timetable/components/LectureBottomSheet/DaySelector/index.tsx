import { css } from '@styled-system/css'
import { UseFormRegisterReturn } from 'react-hook-form'

import { DayArray, DayType } from '@/types/timetable'
import { Button } from '@/ui/Button'

interface Props {
  value: DayType
  setValue: (day: DayType) => void
  registerReturn: UseFormRegisterReturn<'day'>
}
const DaySelector = ({ value, setValue, registerReturn }: Props) => {
  return (
    <>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
        {DayArray.map((day, index) => (
          <Button key={index} type="button" variant={value === day ? 'red' : 'default'} onClick={() => setValue(day)}>
            {day}
          </Button>
        ))}
      </div>
      <input type="hidden" {...registerReturn} />
    </>
  )
}
export default DaySelector
