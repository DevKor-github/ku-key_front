import { css, cva } from '@styled-system/css'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

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
  fontSize: { base: 18, mdDown: 10, smDown: 14 },
  smDown: {
    fontWeight: 600,
  },
  '& p': {
    fontSize: { base: 20, mdDown: 10, smDown: 14 },
    fontWeight: { base: 600, smDown: 500 },
    letterSpacing: '-0.4px',
    color: 'black.1',
  },
})

const MobileButtonStyle = cva({
  base: {
    w: '150px',
    h: '46px',
    p: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rounded: 10,
    border: '1px solid {colors.red.5}',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      cancel: {
        color: 'red.2',
      },
      delete: {
        color: 'var(--white-high-emphasis-87, rgba(255, 255, 255, 0.87))',
        bgColor: 'red.5',
      },
    },
  },
})

const DeleteAccount = () => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()
  const { mutate: deleteUser } = useDeleteUser()

  const handleDelete = useCallback(() => deleteUser(undefined), [deleteUser])

  return (
    <div
      className={css({
        display: 'flex',
        gap: { base: 15, mdDown: 5 },
        flexDir: 'column',
        alignItems: 'center',
        smDown: {
          h: 'full',
          justifyContent: 'center',
        },
      })}
    >
      <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700, smDown: { display: 'none' } })}>
        Delete Account
      </h1>
      <div
        className={css({
          width: { base: 608, mdDown: 200, smDown: 350 },
          py: { base: 10, mdDown: 3, smDown: 7 },
          px: { mdDown: 1, smDown: 5 },
          display: 'flex',
          alignItems: 'center',
          flexDir: 'column',
          gap: { base: '30px', mdDown: 2, smDown: 5 },
          bgColor: 'white',
          rounded: { base: 10, smDown: 16 },
          border: { base: '1px solid {colors.lightGray.1}', smDown: 'none' },
        })}
      >
        <div
          className={css({
            color: 'red.2',
            fontSize: { base: 30, mdDown: 16, smDown: 20 },
            fontWeight: 700,
            lineHeight: 1.2,
          })}
        >
          WARNING
        </div>
        <div
          className={css({
            gap: { base: 10, mdDown: 5, smDown: '30px' },
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
          })}
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
        <div
          // 모바일에서만 표시
          className={css({
            w: 'full',
            display: { base: 'none', smDown: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <Link className={MobileButtonStyle({ variant: 'cancel' })} to={'/mypage'}>
            Cancel
          </Link>
          <button className={MobileButtonStyle({ variant: 'delete' })} onClick={handleOpen}>
            Delete
          </button>
        </div>
      </div>
      <Button
        variant={'loginColored'}
        className={css({ w: 'fit-content', smDown: { display: 'none' } })}
        onClick={handleOpen}
      >
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
