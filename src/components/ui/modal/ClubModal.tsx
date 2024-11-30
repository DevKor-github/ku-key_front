import { css } from '@styled-system/css'

import ContactButton from '@/components/club/ContactButton'
import ModalCard from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { ClubInterface } from '@/types/club'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface ClubModalProps {
  clubData: ClubInterface | null
  handleModalLayoutClose: () => void
}
const ClubModal = ({ clubData, handleModalLayoutClose }: ClubModalProps) => {
  const isOpen = clubData !== null

  if (!isOpen) return

  return (
    <ModalPortal isOpen={isOpen} handleLayoutClose={handleModalLayoutClose}>
      <ModalCard
        className={css({
          bgColor: 'white',
          rounded: 20,
          p: 5,
          border: 'none',
          display: 'flex',
          flexDir: 'column',
          gap: 2.5,
          w: '350px',
          alignItems: 'stretch',
        })}
      >
        <img
          src={clubData.imageUrl}
          alt="clubImage"
          className={css({ w: '310px', h: '264px', objectFit: 'cover', rounded: 5 })}
        />
        <div className={css({ display: 'flex', flexDir: 'column', gap: 4 })}>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
            <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 1 })}>
              <h2 className={css({ fontSize: 16, fontWeight: 400, lineHeight: 1.2 })}>{clubData.summary}</h2>
              <h1 className={css({ fontSize: 30, fontWeight: 700, lineHeight: 1.2 })}>{clubData.name}</h1>
            </div>
            <div className={css({ display: 'flex', flexDir: 'column', gap: 3 })}>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  gap: 1,
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  '& h3': {
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: 'darkGray.1',
                  },
                })}
              >
                <div className={css({ display: 'flex', flexDir: 'column', gap: 0.5 })}>
                  <h3>Regular Meeting</h3>
                  <p>{upperCaseHighlight(clubData.regularMeeting)}</p>
                </div>
                <div className={css({ display: 'flex', flexDir: 'column', gap: 0.5 })}>
                  <h3>Recruitment Period</h3>
                  <p>{upperCaseHighlight(clubData.recruitmentPeriod)}</p>
                </div>
              </div>
              <p className={css({ fontSize: 12, fontWeight: 400, lineHeight: 1.2, color: 'darkGray.1' })}>
                {clubData.description}
              </p>
            </div>
          </div>
          <div className={css({ display: 'flex', gap: '6px' })}>
            {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
            {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
          </div>
        </div>
      </ModalCard>
    </ModalPortal>
  )
}

export default ClubModal
