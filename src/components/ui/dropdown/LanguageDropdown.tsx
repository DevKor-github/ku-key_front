import { css } from '@styled-stytem/css'
import { useMemo } from 'react'
import Select, {
  components,
  ControlProps,
  GroupBase,
  MultiValue,
  OptionProps,
  SingleValue,
  StylesConfig,
} from 'react-select'

import { Language, LanguageLabel, LanguageMap } from '@/lib/constants/language'
import getKeyByValue from '@/util/getKeyByValue'

function isMultiValue<T>(arg: MultiValue<T> | SingleValue<T>): arg is MultiValue<T> {
  return Array.isArray(arg)
}

interface LanguageOption {
  readonly value: Language
  readonly label: LanguageLabel
}

const DropdownStyle: StylesConfig<LanguageOption, false, GroupBase<LanguageOption>> = {
  control: baseStyles => ({
    ...baseStyles,
    border: '1px solid #D9D9D9',
    borderRadius: '10px',
  }),
  valueContainer: base => ({
    ...base,
    overflowX: 'scroll',
    flexWrap: 'unset',
  }),
  multiValue: base => ({
    ...base,
    flex: '0 0 auto',
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
}

interface LanguageDropdownProps {
  handleChange: (languages: Language[]) => void
  curLanguage?: Language[]
}
const LanguageDropdown = ({ handleChange, curLanguage }: LanguageDropdownProps) => {
  const options = useMemo(() => {
    const LanguageMapKeys = Object.keys(LanguageMap) as Array<LanguageLabel>
    return LanguageMapKeys.map(key => {
      return {
        value: LanguageMap[key],
        label: key,
      }
    })
  }, [])

  const handleChangeLanguage = (newValue: MultiValue<LanguageOption> | SingleValue<LanguageOption>) => {
    if (isMultiValue(newValue)) {
      if (newValue.length > 5) {
        alert('You can add up to five languages!')
      } else {
        const value = newValue.map(option => option.value)
        handleChange(value)
      }
    } else {
      if (newValue) {
        handleChange([newValue.value])
      } else {
        handleChange([])
      }
    }
  }

  const Control = ({ children, ...props }: ControlProps<LanguageOption, false>) => {
    return (
      <components.Control
        {...props}
        className={css({
          pr: '14px',
          h: '46px',
          color: 'lightGray.1',
          fontSize: 16,
          fontWeight: 600,
        })}
      >
        {children}
      </components.Control>
    )
  }
  const CustomOption = (props: OptionProps<LanguageOption>) => (
    <components.Option {...props}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          color: 'darkGray.1',
          fontSize: 18,
          fontWeight: 500,
          px: 4,
          py: 2.5,
        })}
      >
        <span>{props.data.label}</span>
        <span>|</span>
        <span>{props.data.value.toUpperCase()}</span>
      </div>
    </components.Option>
  )

  return (
    <Select
      value={
        curLanguage
          ? curLanguage.map(lang => {
              return { value: lang, label: getKeyByValue(LanguageMap, lang) } as LanguageOption
            })
          : undefined
      }
      className={css({ w: 'full' })}
      components={{ Option: CustomOption, Control }}
      options={options}
      placeholder={'Language Selection'}
      onChange={handleChangeLanguage}
      styles={DropdownStyle}
      isMulti
      isClearable={false}
    />
  )
}

export default LanguageDropdown
