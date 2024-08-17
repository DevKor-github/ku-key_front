import heic2any from 'heic2any'

export const convertHeic = async (file: File) => {
  const blob = (await heic2any({ blob: file, toType: 'image/jpeg', quality: 1 })) as Blob
  return new File([blob], `${file.name.split('.')[0]}.jpeg`, { ...file, type: 'image/jpeg' })
}
