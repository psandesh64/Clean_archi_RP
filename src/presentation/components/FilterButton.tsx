import React from 'react'
import { MdOutlineTune } from "react-icons/md";
interface FilterButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({label, className, onClick}) => {
  return (
    <div className={`flex items-center gap-1 bg-white rounded-lg border border-[#e0e2e7] px-[14px] py-2.5 cursor-pointer ${className}`}
    onClick={onClick}>
        <MdOutlineTune className="w-5 h-5 p-[1px] text-[#667085]" />
        <div className="text-[#667085] text-sm font-medium font-inter text-nowrap">{label}</div>
    </div>
  )
}

export default FilterButton
