import { apiInterface } from '@/util/axios/custom-axios'

export const getTest = async () => {
  const response = await apiInterface.get('/timetable/user')
  return response.data
}
