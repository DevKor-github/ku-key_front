import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

import Toast from '@/components/ui/toast'
import { convertHeic } from '@/util/convert-heic'
import { resizeFile } from '@/util/resizeFile'
export const useFile = (fileType?: string, limit?: number, initialData?: File[]) => {
  const [files, setFiles] = useState<File[] | null>(null)
  const [isChanged, setIsChanged] = useState(false)
  const handleFilesChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentFiles = e.target.files
      if (!currentFiles?.length) return
      if (fileType) {
        const isInvalidFileType = Array.from(currentFiles).some(file => !file.type.includes(fileType))
        if (isInvalidFileType) {
          return toast.custom(() => <Toast message={'Please upload image files only'} type="warning" />)
        }
      }

      const resizedFiles: File[] = []
      if (limit && (files ? files.length : 0) + currentFiles.length > limit)
        return toast.custom(() => <Toast message={`You can upload up to ${limit} files`} type="warning" />)

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
      setIsChanged(true)
      e.target.value = ''
    },
    [fileType, files, limit],
  )

  const handleFileDelete = useCallback((index: number) => {
    setFiles(prev => (prev ? prev?.filter((_, i) => i !== index) : []))
    setIsChanged(true)
  }, [])

  useEffect(() => initialData && setFiles(initialData), [initialData])
  return { files, isChanged, handleFilesChange, handleFileDelete }
}
