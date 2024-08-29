import { atom } from 'jotai'

import { DayProps } from '@/types/calendar'

export const todayAtom = atom<Date>(new Date())
export const selectedDateAtom = atom<Date>(new Date())
export const calendarAtom = atom<DayProps[][]>([])
