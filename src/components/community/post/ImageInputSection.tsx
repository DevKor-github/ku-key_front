import { css } from '@styled-stytem/css'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleX, Paperclip, Plus } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'

interface ImageInputSectionProps {
  files: File[] | null
  handleFilesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFileDelete: (index: number) => void
  anonymous: boolean
  handleAnonymous: () => void
}
const ImageInputSection = ({
  files,
  handleFileDelete,
  handleFilesChange,
  anonymous,
  handleAnonymous,
}: ImageInputSectionProps) => {
  return (
    <div className={css({ display: 'flex', w: 'full', flexDir: 'column', alignItems: 'flex-start', gap: '50px' })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
        })}
      >
        <label
          htmlFor="postImage"
          className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}
        >
          <p hidden>Choose files</p>
          <Paperclip
            className={css({
              color: 'lightGray.1',
              _hover: { color: 'darkGray.1', transition: 'color 0.25s ease-in-out' },
            })}
            size={22}
          />
          <input
            id="postImage"
            type="file"
            hidden
            onChange={handleFilesChange}
            accept="image/*,image/heic"
            multiple
            disabled={files ? files.length >= 5 : false}
          />
        </label>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 1.5 })}>
          <Checkbox checked={anonymous} onCheckedChange={handleAnonymous} />
          <p className={css({ textStyle: 'heading4_M', color: 'darkGray.2' })}>Anonymous</p>
        </div>
      </div>
      <AnimatePresence>
        {files && (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, east: 'ease' }}
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              rowGap: 2.5,
              columnGap: 1.5,
              alignSelf: 'stretch',
              flexWrap: 'wrap',
            })}
          >
            {files.map((file, i) => (
              <div key={`${i}-${file.name}`} className={css({ display: 'flex', alignItems: 'flex-start', gap: 0.5 })}>
                <img
                  src={URL.createObjectURL(file)}
                  alt="postImage"
                  className={css({
                    w: 233,
                    h: '88px',
                    rounded: 10,
                    border: '1px solid {colors.lightGray.1}',
                    objectFit: 'cover',
                  })}
                />
                <button
                  className={css({
                    display: 'flex',
                    p: 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    rounded: 'full',
                    color: 'darkGray.1',
                    cursor: 'pointer',
                    _hover: { bgColor: 'lightGray.1', transition: 'background-color 0.25s ease-in-out' },
                  })}
                  onClick={() => handleFileDelete(i)}
                >
                  <CircleX size={16} />
                </button>
              </div>
            ))}
            {files && files.length < 5 && (
              <label
                htmlFor="postImage"
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  w: 233,
                  h: '88px',
                  rounded: 10,
                  bgColor: 'bg.gray',
                  border: '1px solid {colors.lightGray.1}',
                })}
              >
                <p hidden>Choose files</p>
                <Plus
                  className={css({
                    color: 'lightGray.1',
                    _hover: { color: 'darkGray.1', transition: 'color 0.25s ease-in-out' },
                  })}
                  size={16}
                />
              </label>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageInputSection
