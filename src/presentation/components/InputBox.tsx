import { ChangeEventHandler } from 'react'

type InputBoxProps = {
    className?: string
    placeHolder?: string
    InputChangeEvent: ChangeEventHandler<HTMLInputElement>
    required?: boolean
    value?:string | number
    type?:string
}

const InputBox = ({ className = '', placeHolder = '', InputChangeEvent, required = false, value,type='text' }: InputBoxProps) => {
  return (
    <div className={className}>
        <input 
        type={type}
        className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40
                 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
        onChange={InputChangeEvent}
        placeholder={`${placeHolder}${required ? ' *' : ''}`}
        value={value}/>
    </div>
  )
}

export default InputBox
