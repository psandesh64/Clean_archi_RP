import { useEffect, useRef, useState } from "react"
import { AiOutlineBarChart } from "react-icons/ai"
import { BsGrid1X2 } from "react-icons/bs"
import { HiOutlineArrowTrendingUp } from "react-icons/hi2"
import { MdOutlineAddHome, MdOutlineInventory2 } from "react-icons/md"
import { PiUserCirclePlusLight } from "react-icons/pi"
import Application from "../partials/sidemenus/Application"
import Agency from "../partials/sidemenus/Agency"
import Inventory from "../partials/sidemenus/Inventory"
import Reports from "../partials/sidemenus/Reports"
import User from "../partials/sidemenus/User"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()

  const [drop,setDrop] = useState<Boolean>(false)
  const [sideMenu,setSidemenu] = useState<string>('application')
  // ---------------side menu functionality ------------------------
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = (event:MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setDrop(false);
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
  // ---------------------------------------------------------------------------
  const sidemenuSelection = (selection:string) => {
    return () => {
      setSidemenu(selection);
      setDrop(true);
    };
  }

  return (
    <div className="flex flex-col items-center w-full h-full rounded-tl-2xl rounded-bl-2xl bg-erp">
      
      <div className="w-[58px] h-[58px] my-[49px] rounded-full bg-[#88DBA4]"></div>
      
      <div className="w-[10px] mt-[39px] flex-col items-center justify-start gap-10 inline-flex">
        
          <BsGrid1X2 className="w-6 h-6 p-[2.33px] text-white cursor-pointer" onClick={()=>navigate('/')}/>
          <HiOutlineArrowTrendingUp className="w-7 h-7 p-[2.33px] text-white cursor-pointer" onClick={sidemenuSelection('application')}/>
          <MdOutlineAddHome className="w-7 h-7 p-[2.33px] text-white cursor-pointer" onClick={sidemenuSelection('agency')}/>
          <MdOutlineInventory2 className="w-7 h-7 p-[2.33px] text-white cursor-pointer" onClick={sidemenuSelection('inventory')}/>
          <AiOutlineBarChart className="w-7 h-7 p-[2.33px] text-white cursor-pointer" onClick={sidemenuSelection('reports')}/>
          <PiUserCirclePlusLight className="w-7 h-7 p-[2.33px] text-white cursor-pointer" onClick={sidemenuSelection('user')}/>

      </div>

      {drop && 
      <div className='absolute top-0 left-[140px] w-[282px] h-full bg-white z-50 ' ref={sidebarRef}>
        <div>
          {sideMenu==='application' && <Application/>}
          {sideMenu==='agency' && <Agency/>}
          {sideMenu==='inventory' && <Inventory/>}
          {sideMenu==='reports' && <Reports/>}
          {sideMenu==='user' && <User/>}
        </div>
      </div>}


    </div>
  )
}

export default Sidebar
