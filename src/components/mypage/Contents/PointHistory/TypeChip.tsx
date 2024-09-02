import { cva } from '@styled-stytem/css'

interface TypeChipProps {
  type: boolean
}
const TypeChip = ({ type }: TypeChipProps) => {
  return (
    <div
      className={cva({
        base: {
          w: '78px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: '5px',
          rounded: 10,
          color: 'white',
          fontSize: 14,
          fontWeight: 700,
        },
        variants: {
          type: {
            true: {
              bgColor: 'red.2',
            },
            false: {
              bgColor: 'red.3',
            },
          },
        },
      })({ type })}
    >
      {type ? 'Get' : 'Purchase'}
    </div>
  )
}

export default TypeChip
