import { useCallback, useState } from 'react'

import { convertHeic } from '@/util/convert-heic'
import { resizeFile } from '@/util/resizeFile'

export const useFile = (fileType?: string, limit?: number) => {
  const [files, setFiles] = useState<File[] | null>(null)

  const handleFilesChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentFiles = e.target.files
      if (!currentFiles?.length) return
      if (fileType) {
        const isInvalidFileType = Array.from(currentFiles).some(file => !file.type.includes(fileType))
        if (isInvalidFileType) {
          alert('Please upload image files only')
          return
        }
      }

      const resizedFiles: File[] = []
      if (limit && (files ? files.length : 0) + currentFiles.length > limit)
        return alert(`You can upload up to ${limit} files`)

      for (const file of currentFiles) {
        if (file.type === 'image/heic' || file.type === 'image/HEIC') {
          try {
            const jpgFile = await convertHeic(file)
            const image = await resizeFile<File>(jpgFile)
            resizedFiles.push(image)
            continue
          } catch (e) {
            console.log(e)
          }
        }

        try {
          const image = await resizeFile<File>(file)
          resizedFiles.push(image)
        } catch (e) {
          console.log(e)
        }
      }

      setFiles(prev => (prev ? [...prev, ...resizedFiles] : resizedFiles))
    },
    [fileType, files, limit],
  )

  const handleFileDelete = useCallback(
    (index: number) => setFiles(prev => (prev ? prev?.filter((_, i) => i !== index) : [])),
    [],
  )

  return { files, handleFilesChange, handleFileDelete }
}
