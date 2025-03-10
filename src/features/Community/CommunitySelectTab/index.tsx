import * as s from './style.css'

import { Button } from '@/ui/Button'
import { useQueryParams } from '@/util/hooks/useQueryParams'

const boardConfig = [
  {
    board: 'All',
    boardId: 0,
    displayText: 'All',
  },
  {
    board: 'CommunityBoard',
    boardId: 1,
    displayText: 'Community Board',
  },
  {
    board: 'QuestionBoard',
    boardId: 2,
    displayText: 'Question Board',
  },
  {
    board: 'InformationBoard',
    boardId: 3,
    displayText: 'Information Board',
  },
] as const

export type BoardType = (typeof boardConfig)[number]['board']
export type BoardQueryParam = {
  board: BoardType
  boardId: number
}

const CommunitySelectTab = () => {
  const [queryParam, setQueryParam] = useQueryParams<BoardQueryParam>()

  return (
    <div className={s.Wrapper}>
      {boardConfig.map(board => (
        <Button
          variant="default"
          isActive={queryParam.board === board.board}
          onClick={() => setQueryParam({ board: board.board, boardId: board.boardId })}
        >
          {board.displayText}
        </Button>
      ))}
    </div>
  )
}

export default CommunitySelectTab
