import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  to: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

const MenuDropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdown && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [dropdown]);

  return (
    <div>
      <div 
        className="h-10 p-2 border-b border-black justify-center items-center gap-2 inline-flex w-full cursor-pointer" 
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="text-black text-lg font-bold font-plus_jakarta leading-snug">{title}</div>
        {dropdown ? 
          <IoIosArrowUp className='h-6 w-6 py-[1px]' /> 
          : 
          <IoIosArrowDown className='h-6 w-6 py-[1px]' />}
      </div>
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${dropdown ? 'opacity-100' : 'opacity-0'}`}
        style={{ maxHeight: dropdown ? '500px' : '0px' }} // Adjust 500px as needed
      >
        <div className="flex flex-col gap-2 mt-2">
          {items.map((item, index) => (
            <Link key={index} to={item.to}>
              <div className="group w-full h-[35px] p-2 hover:bg-[#1a7338] rounded-md justify-center items-center gap-2 inline-flex">
                <div className="group-hover:text-white text-base font-normal font-plus_jakarta leading-tight">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
