import {
  SelectTagsInput,
  SelectTagsItem,
  SelectTagsItemButton,
  SelectTagsList,
  SelectTagsWrapper
} from '@/ui'
import type { SetStateAction, KeyboardEvent, Dispatch, FC } from 'react'

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

interface Props {
  name: string
  placeholder: string
  required?: boolean
  data: string[]
  setData: (value: SetStateAction<string[]>) => void
}

const SelectTags: FC<Props> = ({ name, placeholder, data, setData }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const deleteWord = (word: string): void => {
    setData((prevData) => prevData.filter((d) => d !== word))
  }

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<string[]>>
  ): void => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      const word = event.currentTarget.value.trim()
      if (word !== '') {
        setValue((prevState) => [...prevState, word])
        event.currentTarget.value = ''
        setInputValue('')
      }
    }

    if (
      (event.key === 'Backspace' || event.key === 'Delete') &&
      event.currentTarget.value === ''
    ) {
      setValue((prevState) => {
        const newData = [...prevState]
        newData.pop()
        return newData
      })
    }
  }

  const handleBlur = (): void => {
    const word = inputValue.trim()
    if (word !== '') {
      setData((prevState) => [...prevState, word])
      setInputValue('')
    }
  }

  return (
    <SelectTagsWrapper>
      <SelectTagsList>
        {data.map((service, index) => (
          <SelectTagsItem key={index}>
            {service}
            <SelectTagsItemButton
              type="button"
              onClick={() => deleteWord(service)}
            >
              <IoClose size={18} />
            </SelectTagsItemButton>
          </SelectTagsItem>
        ))}

        <SelectTagsInput
          name={name}
          placeholder={data.length > 0 ? '...' : placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, setData)}
          onBlur={handleBlur}
        />
      </SelectTagsList>
    </SelectTagsWrapper>
  )
}

export default SelectTags
