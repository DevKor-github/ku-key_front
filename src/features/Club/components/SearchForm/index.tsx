import { useState } from 'react'
import { toast } from 'sonner'

import * as s from './style.css'

import { Responsive } from '@/common/Responsive'
import { Checkbox } from '@/components/ui/checkbox'
import Toast from '@/components/ui/toast'
import MobileCategorySelector from '@/features/Club/components/MobileCategorySelector.tsx'
import { CLUB_SEARCH_MESSAGE } from '@/lib/messages/club'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { ClubSearchParams } from '@/types/club'
import Input from '@/ui/Input'
import { useAuth } from '@/util/auth/useAuth'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const SearchForm = () => {
  const isMobile = useMediaQueryByName('smDown')
  const isLogin = useAuth().authState

  const [param, setParam] = useQueryParams<ClubSearchParams>()

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

  const handleWishList = () => {
    if (isLogin) setParam({ filter: param.filter === 'like' ? undefined : 'like' })
    else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
  }

  const clearSearchInput = () => {
    setInput('')
    setParam({ keyword: undefined })
  }

  return (
    <form className={s.FormWrapper} onSubmit={onSubmit}>
      <Input
        variant={'search'}
        placeholder="Search For a Club"
        value={input}
        onChange={onChange}
        clearInput={isMobile ? undefined : clearSearchInput}
      />
      <Responsive
        mobile={<MobileCategorySelector curCategory={param.category} />}
        desktop={
          <div className={s.FilterWrapper}>
            <Checkbox checked={param.filter === 'like'} onCheckedChange={handleWishList} />
            <p className={s.FilterText}>View only I like</p>
          </div>
        }
      />
    </form>
  )
}
export default SearchForm
