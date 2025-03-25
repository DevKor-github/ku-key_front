import { css } from '@styled-system/css'
import { useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

import Dropdown from '@/components/timetable/Dropdown'
import { AddOnMyOwnForm } from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn/types'
import { hSelectors, mSelectors } from '@/lib/constants/timeSelectors'

interface TimeSelector {
  type: 'startTime' | 'endTime'
  setValue: UseFormSetValue<AddOnMyOwnForm>
}
const TimeSelector = ({ type, setValue }: TimeSelector) => {
  const [curH, setCurH] = useState(0)
  const [curM, setCurM] = useState(0)

  useEffect(() => {
    setValue(type, `${hSelectors[curH].slice(0, 2)}:${mSelectors[curM].slice(0, 2)}:00`)
  }, [curH, curM, setValue, type])

  return (
    <div className={css({ display: 'flex', gap: 5 })}>
      <Dropdown dropdownList={hSelectors} curIndex={curH} setCurIndex={setCurH} isTimeSelector={true} />
      <Dropdown dropdownList={mSelectors} curIndex={curM} setCurIndex={setCurM} isTimeSelector={true} />
    </div>
  )
}

export default TimeSelector
