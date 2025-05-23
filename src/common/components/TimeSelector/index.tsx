import { useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

import * as s from './style.css'

import Dropdown from '@/components/timetable/Dropdown'
import { AddOnMyOwnForm } from '@/domain/Timetable/components/LectureBottomSheet/AddOnMyOwn/types'
import { hSelectors, mSelectors } from '@/lib/constants/timeSelectors'

interface TimeSelector {
  type: 'startTime' | 'endTime'
  value: string
  setValue: UseFormSetValue<AddOnMyOwnForm>
}
const TimeSelector = ({ type, value, setValue }: TimeSelector) => {
  // Set initial curH and curM from value string
  const [hours, minutes] = value.split(':')
  const hIndex = hSelectors.findIndex(h => h.startsWith(hours))
  const mIndex = mSelectors.findIndex(m => m.startsWith(minutes))

  const [curH, setCurH] = useState(hIndex === -1 ? 0 : hIndex)
  const [curM, setCurM] = useState(mIndex === -1 ? 0 : mIndex)

  useEffect(() => {
    setValue(type, `${hSelectors[curH].slice(0, 2)}:${mSelectors[curM].slice(0, 2)}:00`)
  }, [curH, curM, setValue, type])

  return (
    <div className={s.Wrapper}>
      <Dropdown dropdownList={hSelectors} curIndex={curH} setCurIndex={setCurH} isTimeSelector={true} />
      <Dropdown dropdownList={mSelectors} curIndex={curM} setCurIndex={setCurM} isTimeSelector={true} />
    </div>
  )
}

export default TimeSelector
