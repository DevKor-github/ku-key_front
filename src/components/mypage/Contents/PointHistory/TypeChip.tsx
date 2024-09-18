import { cva } from '@styled-system/css'

interface TypeChipProps {
  type: boolean
}
const TypeChip = ({ type }: TypeChipProps) => {
  return (
    <div
      className={cva({
        base: {
          w: { base: '78px', mdDown: '48px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { base: '5px', mdDown: 0.5 },
          rounded: 10,
          color: 'white',
          fontSize: { base: 14, mdDown: 10 },
          fontWeight: { base: 700, mdDown: 500 },
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
