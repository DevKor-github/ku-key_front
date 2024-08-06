import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useGetReviewSummary } from '@/api/hooks/courseReview'
import ReviewRadio from '@/components/courseReview/ReviewRadio'
import ReviewText from '@/components/courseReview/ReviewText'
import {
  attendaceArray,
  classLevelArray,
  learnAmountArray,
  teachingSkillsArray,
  teamProjectArray,
} from '@/util/reviewUtil'
import { getCurSemester } from '@/util/timetableUtil'

const ReviewSectionStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  gap: 2.5,
})
const LabelStyle = css({
  fontWeight: 700,
  fontSize: 14,
  color: 'lightGray.1',
})

interface WriteReviewForm {
  rate: number
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
  attendance: number
  textReview: string
  year: string
  semester: string
  professorName: string
  courseCode: string
}

const WriteReviewPage = () => {
  const { courseCode = '', prof = '' } = useParams()

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

  const onSubmit = (formData: WriteReviewForm) => {
    console.log(formData)
  }

  return (
    <FormProvider {...methods}>
      <form
        className={cx(
          css({
            flexGrow: 1,
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
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
            <span className={css({ fontWeight: 600, fontSize: 26, color: 'black.2' })}>{totalData?.courseName}</span>
            <span className={css({ fontSize: 18, color: 'darkGray.2' })}>{prof}</span>
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 5, alignItems: 'flex-start' })}>
          <div className={ReviewSectionStyle}>
            <div className={LabelStyle}>Total Rate</div>
          </div>
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
