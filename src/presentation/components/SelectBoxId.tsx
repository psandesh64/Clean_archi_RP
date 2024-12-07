import { ChangeEventHandler } from 'react'

type SelectBoxProps = {
    className?: string
    id: string
    SelectChangeEvent: ChangeEventHandler<HTMLSelectElement>
    placeholder?: string
    options: Array<any> | undefined
}

const SelectBoxId = ({ className = '',placeholder='', id, SelectChangeEvent,options }: SelectBoxProps) => {
  return (
    <div className={`${className} relative rounded-[10px] border border-[#a2a1a8]/40 p-4`}>
        <select id={id} onChange={SelectChangeEvent} className='relative flex w-full outline-none cursor-pointer
        text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
        defaultValue=''>
            <option value="" disabled>
                {placeholder}
            </option>
            {options && options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
        </select>
    </div>
  )
}

export default SelectBoxId
