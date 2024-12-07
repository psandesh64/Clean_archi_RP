import React from 'react'
import { FaPlus } from 'react-icons/fa';
interface AddButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({label, className, onClick}) => {
  return (
    <div className={`flex items-center gap-1 bg-erp rounded-[8px] px-[14px] py-2.5 cursor-pointer ${className}`}
    onClick={onClick}>
        <FaPlus className="w-5 h-5 p-[1px] text-white" />
        <div className="text-white text-sm font-semibold font-inter text-nowrap">{label}</div>
    </div>
  )
}

export default AddButton