import Resizer from 'react-image-file-resizer'

export const resizeFile = (file: File) =>
  new Promise(resolve => {
    Resizer.imageFileResizer(file, 777, 777, 'jpeg', 100, 0, uri => resolve(uri), 'file')
  })
