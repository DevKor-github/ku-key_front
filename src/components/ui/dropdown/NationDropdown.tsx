import { css } from '@styled-stytem/css'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { alpha2Codes, findByAlpha2 } from 'iso-3166-1-ts'
import { MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import Select, { components, ControlProps, OptionProps, SingleValue } from 'react-select'

interface NationOption {
  readonly value: string
  readonly label: string
  readonly emoji: string
}

interface NationDropdownProps {
  curNation?: string
  handleChange: (nation: string) => void
}
const NationDropdown = ({ curNation, handleChange }: NationDropdownProps) => {
  const [defaultIndex, setDefaultIndex] = useState<number | null>(null)

  const options = alpha2Codes.map(val => {
    const value = val.toUpperCase()
    return {
      value,
      label: findByAlpha2(val)?.name ?? '',
      emoji: getUnicodeFlagIcon(val),
    }
  })

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === curNation) {
        setDefaultIndex(i)
        break
      }
    }
  }, [curNation, options])

  const handleChangeNation = (newValue: SingleValue<NationOption>) => {
    const value = newValue ? newValue.value : ''
    handleChange(value)
  }

  const Control = ({ children, ...props }: ControlProps<NationOption, false>) => {
    return (
      <components.Control
        {...props}
        className={css({
          px: '14px',
          h: '46px',
          color: 'lightGray.1',
          fontSize: 16,
          fontWeight: 600,
        })}
      >
        <MapPin />
        {children}
      </components.Control>
    )
  }
  const CustomOption = (props: OptionProps<NationOption>) => (
    <components.Option {...props}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'darkGray.1',
          fontSize: 18,
          fontWeight: 500,
          px: 4,
          py: 2.5,
        })}
      >
        <span>{props.data.label}</span>
        <span>{props.data.emoji}</span>
      </div>
    </components.Option>
  )

  return (
    <Select
      value={defaultIndex ? options[defaultIndex] : undefined}
      className={css({ w: 'full' })}
      components={{ Option: CustomOption, Control }}
      options={options}
      placeholder={'Country/Region Selection'}
      onChange={handleChangeNation}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          border: '1px solid #D9D9D9',
          borderRadius: '10px',
        }),
        placeholder: baseStyles => ({
          ...baseStyles,
          color: '#D9D9D9',
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isDisabled ? undefined : isSelected ? '#D9D9D9' : isFocused ? '#F4F4F4' : undefined,
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
              ...styles[':active'],
              backgroundColor: !isDisabled ? (isSelected ? '#D9D9D9' : '#F4F4F4') : undefined,
            },
          }
        },
        dropdownIndicator: baseStyles => ({
          ...baseStyles,
          color: '#D9D9D9',
        }),
        indicatorSeparator: baseStyles => ({
          ...baseStyles,
          display: 'none',
        }),
      }}
    />
  )
}

export default NationDropdown
