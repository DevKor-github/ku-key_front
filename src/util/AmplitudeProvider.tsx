import { useUserData } from '@/providers/UserProvider'
import { initAmplitude, setInitialUserProperties } from '@/util/analytics/amplitude'
import { useEffectOnce } from '@/util/hooks/useEffectOnce'

const AmplitudeProvider = () => {
  const user = useUserData()
  const AMPLITUDE_API_KEY = import.meta.env.VITE_API_AMPLITUDE_API_KEY
  useEffectOnce(() => {
    if (!user) return
    if (!AMPLITUDE_API_KEY) return
    initAmplitude(AMPLITUDE_API_KEY, user.id, () => setInitialUserProperties(user))
  })

  return null
}

export default AmplitudeProvider
