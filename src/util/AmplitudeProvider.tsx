import { init } from '@amplitude/analytics-browser'

const AmplitudeProvider = () => {
  if (import.meta.env.VITE_API_AMPLITUDE_API_KEY) {
    // TODO: defaultTracking is deprecated
    init(import.meta.env.VITE_API_AMPLITUDE_API_KEY, { defaultTracking: true })
  }

  return <></>
}

export default AmplitudeProvider
