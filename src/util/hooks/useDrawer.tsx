import { useContext } from 'react'

import { DrawerContext } from '@/util/DrawerProvider'

const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (!context) throw new Error('DrawerProvider not found')

  return context
}

export default useDrawer
