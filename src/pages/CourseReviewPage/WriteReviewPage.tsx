import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetReviewSummary, usePostReview } from '@/api/hooks/courseReview'
import ReviewRadio from '@/components/courseReview/ReviewRadio'
import ReviewText from '@/components/courseReview/ReviewText'
import ReviewTotalRate from '@/components/courseReview/ReviewTotalRate'
import Dropdown from '@/components/timetable/Dropdown'
import { SemesterType } from '@/types/timetable'
import {
  attendaceArray,
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
  const { data: totalData } = useGetReviewSummary({ courseCode, professorName: prof })
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
    postReview(formData)
    navigate(`/course-review/info/${courseCode}/${prof}`)
  }

  return (
    <FormProvider {...methods}>
      <form
        className={cx(
          css({
            flexGrow: 1,
            minW: 0,
            rounded: 10,
            p: 5,
            pb: 10,
            display: 'flex',
            flexDir: 'column',
            gap: 12,
          }),
          shadow(),
        )}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3 })}>
          <div
            className={css({
              display: 'flex',
              gap: 5,
              alignItems: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            })}
          >
            <span
              className={css({
                fontWeight: 600,
                fontSize: 26,
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
                fontSize: 18,
                color: 'darkGray.2',
              })}
            >
              {prof}
            </span>
          </div>
          <div className={css({ flexBasis: 68, flexShrink: 0 })}>
            <Dropdown dropdownList={semesterList} curIndex={curSemester} setCurIndex={setCurSemester} />
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 5, alignItems: 'flex-start' })}>
          <ReviewTotalRate />
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, alignItems: 'flex-start' })}>
            <ReviewRadio title="Attendance" options={attendaceArray} category="attendance" />
            <ReviewRadio title="Class Level" options={classLevelArray} category="classLevel" />
            <ReviewRadio title="Difficulty of Team Project" options={teamProjectArray} category="teamProject" />
            <ReviewRadio title="Amount Learned" options={learnAmountArray} category="amountLearned" />
            <ReviewRadio title="Teaching Skills" options={teachingSkillsArray} category="teachingSkills" />
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