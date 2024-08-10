import { useState } from 'react'

interface SearchAreaProps {
  onSubmit: (inputKeyword: string) => void
}
const SearchArea = ({ onSubmit }: SearchAreaProps) => {
  const [keyword, setKeyword] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(keyword)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
    </form>
  )
}

export default SearchArea
