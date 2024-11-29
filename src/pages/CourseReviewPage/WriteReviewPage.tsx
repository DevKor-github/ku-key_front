import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { useAtomValue } from 'jotai/react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { usePostReview } from '@/api/hooks/courseReview'
import ReviewChoiceChips from '@/components/courseReview/ReviewChoiceChips'
import ReviewText from '@/components/courseReview/ReviewText'
import ReviewTotalRate from '@/components/courseReview/ReviewTotalRate'
import Dropdown from '@/components/timetable/Dropdown'
import { courseSummary } from '@/lib/store/review'
import { SemesterType } from '@/types/timetable'
import {
  attendanceArray,
  classLevelArray,
  learnAmountArray,
  teachingSkillsArray,
  teamProjectArray,
} from '@/util/reviewUtil'
import { getCurSemester, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

interface WriteReviewForm {
  rate: number
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
  textReview: string
  year: string
  semester: SemesterType
  professorName: string
  courseCode: string
}

const WriteReviewPage = () => {
  const { courseCode = '', prof = '' } = useParams()

  const navigate = useNavigate()
  const { mutate: postReview } = usePostReview()
  const totalData = useAtomValue(courseSummary)
  const { year, semester } = getCurSemester()
  const methods = useForm<WriteReviewForm>({
    defaultValues: {
      rate: 0,
      classLevel: 0,
      amountLearned: 0,
      attendance: 0,
      teachingSkills: 0,
      teamProject: 0,
      textReview: '',
      professorName: prof,
      courseCode,
      year: `${year}`,
      semester,
    },
    mode: 'onSubmit',
  })

  const semesters = timetablePreprocess([])
  const semesterList = makeSemesterDropdownList(semesters)
  const [curSemester, setCurSemester] = useState(2)

  useEffect(() => {
    methods.setValue('year', semesters[curSemester].year)
    methods.setValue('semester', semesters[curSemester].semester)
  }, [curSemester, semesters, methods])

  const onSubmit = (formData: WriteReviewForm) => {
    postReview(formData, {
      onSuccess: () => navigate(`/course-review/info/${courseCode}/${prof}`),
    })
  }

  return (
    <FormProvider {...methods}>
      <form
        className={cx(
          css({
            flexGrow: 1,
            minW: 0,
            rounded: 10,
            p: { base: 5, smDown: 3.5, xsDown: 2 },
            pb: 10,
            display: 'flex',
            flexDir: 'column',
            gap: 12,
          }),
          shadow(),
        )}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 3,
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 1,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            })}
          >
            <span
              className={css({
                fontWeight: 600,
                fontSize: { base: 26, mdDown: 20, smDown: 16 },
                color: 'black.2',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              })}
            >
              {totalData?.courseName}
            </span>
            <span
              className={css({
                fontSize: { base: 18, mdDown: 16, smDown: 14 },
                color: 'darkGray.2',
              })}
            >
              {prof}
            </span>
          </div>
          <Dropdown dropdownList={semesterList} curIndex={curSemester} setCurIndex={setCurSemester} />
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 5, alignItems: 'flex-start' })}>
          <ReviewTotalRate />
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, alignItems: 'flex-start' })}>
            <ReviewChoiceChips title="Attendance" options={attendanceArray} category="attendance" />
            <ReviewChoiceChips title="Class Level" options={classLevelArray} category="classLevel" />
            <ReviewChoiceChips title="Difficulty of Team Project" options={teamProjectArray} category="teamProject" />
            <ReviewChoiceChips title="Amount Learned" options={learnAmountArray} category="amountLearned" />
            <ReviewChoiceChips title="Teaching Skills" options={teachingSkillsArray} category="teachingSkills" />
          </div>
          <ReviewText />
        </div>
        <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <button
            type="submit"
            className={css({
              w: 52,
              bgColor: 'red.2',
              color: 'white',
              rounded: 'full',
              py: 3,
              fontSize: 18,
              cursor: 'pointer',
            })}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
export default WriteReviewPage
