import { createContext } from 'react'

export interface LectureBottomSheetContextInterface {
  timetableId: number
}
export const LectureBottomSheetContext = createContext<LectureBottomSheetContextInterface | undefined>(undefined)
