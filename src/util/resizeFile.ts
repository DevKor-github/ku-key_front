import Resizer from 'react-image-file-resizer'

export const resizeFile = <T>(file: File) =>
  new Promise<T>(resolve => {
    Resizer.imageFileResizer(file, 1554, 874, 'jpeg', 100, 0, uri => resolve(uri as T), 'file')
  })
