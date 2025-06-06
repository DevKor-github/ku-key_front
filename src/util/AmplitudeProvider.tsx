import { useUserData } from '@/providers/UserProvider'
import { initAmplitude, setInitialUserProperties } from '@/util/analytics/amplitude'
import { useEffectOnce } from '@/util/hooks/useEffectOnce'

const AmplitudeProvider = () => {
  const user = useUserData()
  useEffectOnce(() => {
    initAmplitude(user?.id, () => {
      if (user) setInitialUserProperties(user)
    })
  })

  return null
}

export default AmplitudeProvider
