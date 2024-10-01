import { init } from '@amplitude/analytics-browser'

const AmplitudeProvider = () => {
  init(import.meta.env.VITE_API_AMPLITUDE_API_KEY)

  return <></>
}

export default AmplitudeProvider
