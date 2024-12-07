import React, { ReactNode } from 'react'
type IntervalProps = {
    intervalSelct: string
    intervalSelect: string | null
    setIntervalSelect : React.Dispatch<React.SetStateAction<string | null>>
    children: ReactNode
}

const Interval = ({intervalSelct,intervalSelect,setIntervalSelect,children}:IntervalProps) => {

  return (
    <>
        <div className={`px-3 py-1.5 ${intervalSelect === intervalSelct ? ' bg-[#00b074]/10 rounded-md' : 'rounded-lg'} justify-center items-center gap-2 flex`}>
            <div className={`${intervalSelect === intervalSelct ? 'text-[#00b074] font-semibold':'text-[#667085] font-medium'} cursor-pointer text-[#00b074] text-sm font-semibold font-inter leading-tight tracking-tight`}
            onClick={()=>setIntervalSelect(intervalSelct)}>{children}</div>
        </div>
    </>
  )
}

export default Interval
