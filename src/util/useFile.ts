import { useCallback, useState } from 'react'

import { resizeFile } from '@/util/resizeFile'

export const useFile = (fileType?: string) => {
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
      for (const file of currentFiles) {
        try {
          const image = (await resizeFile(file)) as File
          resizedFiles.push(image)
        } catch (e) {
          console.log(e)
        }
      }
      setFiles(prev => (prev ? [...prev, ...resizedFiles] : resizedFiles))
    },
    [fileType],
  )

  const handleFileDelete = useCallback(
    (index: number) => setFiles(prev => (prev ? prev?.filter((_, i) => i !== index) : [])),
    [],
  )

  return { files, handleFilesChange, handleFileDelete }
}
