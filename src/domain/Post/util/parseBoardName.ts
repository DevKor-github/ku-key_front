/**
 * 게시판 이름을 파싱하여 소문자로 반환합니다.
 * @param boardName - 게시판 이름
 * @returns 소문자로 변환된 게시판 이름
 */
export const parseBoardName = (boardName: string) => {
  const parsedBoardName = boardName.split(' ')[0].toLowerCase()
  if (board.includes(parsedBoardName as BoardType)) {
    return parsedBoardName as BoardType
  }
  return 'community' as const
}

const board = ['community', 'information', 'question'] as const

type BoardType = (typeof board)[number]
