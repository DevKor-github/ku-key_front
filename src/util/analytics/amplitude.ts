import { identify, Identify, init, setUserId } from '@amplitude/analytics-browser'

import { UserInfo } from '@/providers/UserProvider'

export const initAmplitude = async (userId?: string, callback?: () => void) => {
  init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, {
    userId,
    defaultTracking: true,
  })
    .promise.then(() => {
      console.log('[[[[[Amplitude Initiated]]]]]')
      callback?.()
    })
    .catch(error => {
      console.log('[[[[[Amplitude Init Error]]]]]', error)
    })
}

export const setInitialUserProperties = (user: UserInfo) => {
  const identifyObj = new Identify()
  const exchangePeriod = user.startDay && user.endDay ? `${user.startDay} ~ ${user.endDay}` : ''
  setUserId('ku-key-' + user.id)
  identifyObj.set('id', user.id)
  identifyObj.set('user_name', user.username)
  identifyObj.set('country_from', user.country)
  identifyObj.set('home_university', user.homeUniversity)
  identifyObj.set('major', user.major)
  identifyObj.set('languages', user.languages)
  identifyObj.set('exchange_period', exchangePeriod)
  identifyObj.set('level', user.level)
  identifyObj.set('point', user.point)
  identify(identifyObj)
}
