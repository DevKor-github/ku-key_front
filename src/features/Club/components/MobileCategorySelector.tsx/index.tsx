import * as s from './style.css'

import OptionIcon from '@/assets/icon/OptionIcon'
import CategoryDrawer from '@/features/Club/components/CategoryDrawer'
import { CATEGORY_LIST, CategoryType } from '@/domain/Club/constants'
import useDrawer from '@/util/hooks/useDrawer'

interface Props {
  curCategory: CategoryType
}
const MobileCategorySelector = ({ curCategory }: Props) => {
  const { open: openDrawer, close: closeDrawer } = useDrawer()
  const onClick = () => {
    openDrawer({ element: <CategoryDrawer close={closeDrawer} /> })
  }

  return (
    <button className={s.OptionButton({ selected: curCategory != undefined })} onClick={onClick}>
      {CATEGORY_LIST.map(({ type, Icon }) => {
        if (type !== undefined && type === curCategory) return <Icon />
      })}
      {curCategory === undefined && <OptionIcon />}
    </button>
  )
}
export default MobileCategorySelector
