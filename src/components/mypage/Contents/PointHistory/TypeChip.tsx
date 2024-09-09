import { cva } from '@styled-stytem/css'

interface TypeChipProps {
  type: boolean
}
const TypeChip = ({ type }: TypeChipProps) => {
  return (
    <div
      className={cva({
        base: {
          w: { base: '78px', mdDown: '39px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { base: '5px', mdDown: 0.5 },
          rounded: 10,
          color: 'white',
          fontSize: { base: 14, mdDown: 11 },
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
