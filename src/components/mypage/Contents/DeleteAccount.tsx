import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { useCallback } from 'react'

import { useDeleteUser } from '@/api/hooks/user'
import Button from '@/components/ui/button'
import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/hooks/useModal'

const SectionStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: { base: 5, mdDown: 2 },
  textAlign: 'center',
  color: 'darkGray.1',
  fontSize: { base: 18, mdDown: 10 },
  '& p': {
    fontSize: { base: 20, mdDown: 10 },
    fontWeight: 600,
    letterSpacing: '-0.4px',
    color: 'black.1',
  },
})

const DeleteAccount = () => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()
  const { mutate: deleteUser } = useDeleteUser()

  const handleDelete = useCallback(
    () =>
      deleteUser(undefined, {
        onError: error => {
          if (isAxiosError(error)) {
            alert(error.response?.data.message)
          } else {
            alert('Something is Wrong!')
          }
        },
      }),
    [deleteUser],
  )

  return (
    <div className={css({ display: 'flex', gap: { base: 15, mdDown: 5 }, flexDir: 'column', alignItems: 'center' })}>
      <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700 })}>Delete Account</h1>
      <div
        className={css({
          width: { base: 608, mdDown: 200 },
          py: { base: 10, mdDown: 3 },
          px: { mdDown: 1 },
          display: 'flex',
          alignItems: 'center',
          flexDir: 'column',
          gap: { base: '30px', mdDown: 2 },
          bgColor: 'white',
          rounded: 10,
          border: '1px solid {colors.lightGray.1}',
        })}
      >
        <div className={css({ color: 'red.2', fontSize: { base: 30, mdDown: 16 }, fontWeight: 700 })}>WARNING</div>
        <div
          className={css({ gap: { base: 10, mdDown: 5 }, display: 'flex', flexDir: 'column', alignItems: 'center' })}
        >
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
