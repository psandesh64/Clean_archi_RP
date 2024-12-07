import React from 'react'
interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, className, onClick}) => {
  return (
    <div 
        onClick={onClick}    
        className={`font-plus_jakarta py-4 text-center rounded-xl transition cursor-pointer ${className}`}>
      {label}
    </div>
  )
}

export default CustomButton
