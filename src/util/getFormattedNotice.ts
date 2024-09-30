import { NoticeType } from '@/types/notice'

const getFormattedNotice = (data: NoticeType[]) => {
  const dateRecord: Record<string, NoticeType[]> = {}
  data.map(notice => {
    const createDate = notice.createdAt.slice(0, 10)
    if (dateRecord[createDate]) {
      dateRecord[createDate].push(notice)
    } else {
      dateRecord[createDate] = [notice]
    }
  })

  const ret: { createDate: string; notices: NoticeType[] }[] = []
  Object.keys(dateRecord).map(createDate => {
    ret.push({
      createDate,
      notices: dateRecord[createDate].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    })
  })
  return ret.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime())
}

export default getFormattedNotice
