import { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import profile  from '../../assets/chloe.jpg'
import { IoIosArrowDown } from "react-icons/io";
import Cookies from 'js-cookie';
import useAuthStore from '../../../hooks/authStore';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const searchRef = useRef<HTMLDivElement | null>(null)
  const [drop,setDrop] = useState<Boolean>(false)
  const setAccessToken = useAuthStore(state => state.setAccessToken);

  const handleSearchClick = () => {
    setIsExpanded(true);
  }

  const handleClickOutside = (event:MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the component
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-4 px-2 justify-between items-center'>

        <div className='font-plus_jakarta text-[#ce1b22] text-[32px] font-bold'>Dashboard</div>
        
        <div className="relative max-sm:w-full flex flex-wrap items-center justify-end gap-9">

          <div  ref={searchRef} className={`flex items-center justify-center h-[60px] rounded-full ${isExpanded ? 'w-[300px] bg-gray-200' :'w-[60px] bg-[#1a7338]'} shadow-sm`} 
          onClick={handleSearchClick}>
            
            {isExpanded ? <input className="text-[#232323] text-base font-normal font-poppins bg-gray-200 outline-none" placeholder='Search'/>: ''}

            <FaSearch className={`cursor-pointer ${isExpanded ? 'text-[#1a7338]':'text-white'}  h-6 w-6`}/>

          </div>

          <div className={`flex w-[60px] h-[60px] items-center justify-center rounded-full gap-9 shadow-sm bg-erp`}>
            <IoNotificationsOutline className={`text-white h-6 w-6`}/>
          </div>

          <div className="h-[52px] px-2.5 py-[7px] bg-[#d3edd4] rounded-2xl items-center inline-flex gap-3">
            <img className="w-[38px] h-[38px] rounded-full" alt='profile' src={profile} />
            <IoIosArrowDown className='h-6 w-6 py-[1px] cursor-pointer' onClick={()=>setDrop(!drop)}/>
            {drop && (
            <>
            <div className='absolute w-[94px] rounded-lg bg-[#d3edd4]/50 cursor-pointer hover:bg-[#d3edd4] right-0 top-[60px] flex items-center justify-center'
            onClick={()=>{Cookies.remove('session_access_token'),setAccessToken('')}}>
              Logout </div>
            </>
          )}
          </div>
          {/* {drop && (
            <>
            <div className='absolute bg-red-300 w-[94px] right-0 top-[]'>Hello </div>
            </>
          )} */}


        </div>
        
      </div>
    </>
  )
}

export default Header