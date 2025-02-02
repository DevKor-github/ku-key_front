import { useState } from 'react'
import { toast } from 'sonner'

import * as s from './style.css'

import OptionIcon from '@/assets/icon/OptionIcon'
import { Checkbox } from '@/components/ui/checkbox'
import Toast from '@/components/ui/toast'
import CategoryDrawer from '@/features/Club/components/CategoryDrawer'
import { CLUB_SEARCH_MESSAGE } from '@/lib/messages/club'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { ClubSearchParams } from '@/types/club'
import Input from '@/ui/Input'
import { useAuth } from '@/util/auth/useAuth'
import useDrawer from '@/util/hooks/useDrawer'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const SearchForm = () => {
  const isMobile = useMediaQueryByName('smDown')
  const isLogin = useAuth().authState

  const [param, setParam] = useQueryParams<ClubSearchParams>()
  const { open: openDrawer, close: closeDrawer } = useDrawer()

  const [input, setInput] = useState(param.keyword || '')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.length === 0) {
      setParam({ keyword: undefined })
      return
    }

    if (input.length < 2) {
      toast.custom(() => <Toast message={CLUB_SEARCH_MESSAGE.REQUIRED_LENGTH} type="warning" />)
      return
    }
    setParam({ keyword: input })
  }

  const onOptionButtonClick = () => {
    openDrawer({ element: <CategoryDrawer close={closeDrawer} /> })
  }

  const handleWishList = () => {
    if (isLogin) setParam({ filter: param.filter === 'like' ? undefined : 'like' })
    else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
  }

  return (
    <form className={s.FormWrapper} onSubmit={onSubmit}>
      <Input
        variant="search"
        recipeVariant={{ color: 'lightGray' }}
        placeholder="Search For a Club"
        value={input}
        onChange={onChange}
      />
      {isMobile ? (
        <button className={s.OptionButton({ selected: param.category != undefined })} onClick={onOptionButtonClick}>
          <OptionIcon />
        </button>
      ) : (
        <div className={s.FilterWrapper}>
          <Checkbox checked={param.filter === 'like'} onCheckedChange={handleWishList} />
          <p className={s.FilterText}>View only I like</p>
        </div>
      )}
    </form>
  )
}
export default SearchForm
