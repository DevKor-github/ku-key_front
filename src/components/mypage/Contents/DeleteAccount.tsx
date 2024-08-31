import { css } from '@styled-stytem/css'
import { useCallback } from 'react'

import { useDeleteUser } from '@/api/hooks/user'
import Button from '@/components/ui/button'
import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/useModal'

const SectionStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: 5,
  textAlign: 'center',
  color: 'darkGray.1',
  fontSize: 18,
  '& p': {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '-0.4px',
    color: 'black.1',
  },
})

const DeleteAccount = () => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()
  const { mutate: deleteUser } = useDeleteUser()

  const handleDelete = useCallback(() => deleteUser(), [deleteUser])

  return (
    <div className={css({ display: 'flex', gap: 15, flexDir: 'column', alignItems: 'center' })}>
      <h1 className={css({ fontSize: 30, fontWeight: 700 })}>Delete Account</h1>
      <div
        className={css({
          width: '608px',
          py: 10,
          display: 'flex',
          alignItems: 'center',
          flexDir: 'column',
          gap: '30px',
          bgColor: 'white',
          rounded: 10,
          border: '1px solid {colors.lightGray.1}',
        })}
      >
        <div className={css({ color: 'red.2', fontSize: 30, fontWeight: 700 })}>warning</div>
        <div className={css({ gap: 10, display: 'flex', flexDir: 'column', alignItems: 'center' })}>
          <section className={SectionStyle}>
            <p>
              All of the following information will be deleted
              <br />
              and cannot be restored upon deleting account
            </p>
            profile information
            <br />
            point
            <br />
            timetable
          </section>
          <section className={SectionStyle}>
            <p>
              Even if you delete this account,
              <br />
              the following information will not be deleted
            </p>
            post
            <br />
            comment
          </section>
        </div>
      </div>
      <Button variant={'loginColored'} className={css({ w: 'fit-content' })} onClick={handleOpen}>
        Delete this account
      </Button>
      <AlertModal
        modalRef={modalRef}
        title="Are you sure you want to delete the account?"
        content={`If you delete your account, you cannot recover it again`}
        closeText="Cancel"
        confirmText="Delete"
        onConfirm={handleDelete}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </div>
  )
}

export default DeleteAccount