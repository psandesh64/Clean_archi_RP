import { useState } from 'react'
import Interval from '../../components/Interval'

import { BiBadgeCheck } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineScan } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";

const Inventory = () => {
  const [intervalSelect, setIntervalSelect] = useState<string | null>('All Time')

  return (
  <div className='flex flex-col space-y-4 mt-4 pr-2'>

  <div className="min-h-min max-sm:w-[120px] p-1 bg-white rounded-lg border border-[#e0e2e7] justify-start items-start flex max-sm:flex-col">
    <Interval intervalSelct={'All Time'} intervalSelect={intervalSelect} setIntervalSelect={setIntervalSelect}>All Time</Interval>
    <Interval intervalSelct={'12 Months'} intervalSelect={intervalSelect} setIntervalSelect={setIntervalSelect}>12 Months</Interval>
    <Interval intervalSelct={'30 Days'} intervalSelect={intervalSelect} setIntervalSelect={setIntervalSelect}>30 Days</Interval>
    <Interval intervalSelct={'7 Days'} intervalSelect={intervalSelect} setIntervalSelect={setIntervalSelect}>7 Days</Interval>
    <Interval intervalSelct={'24 Hour'} intervalSelect={intervalSelect} setIntervalSelect={setIntervalSelect}>24 Hour</Interval>
  </div>


  <div className='flex flex-wrap gap-6 pt-6'>
      <div className='flex flex-col px-5 py-5 items-start w-[256px] h-[160px] bg-white rounded-md shadow-md'>
          <div><BiBadgeCheck className='w-10 h-10 text-[#4b4bf9] bg-[#dedefa] border-[5px] rounded-full border-[#efeffd]'/></div>
          <div className='text-[#667085] text-base font-medium font-inter leading-normal tracking-tight mt-4'>Total Revenue</div>
          <div className='inline-flex items-center gap-2'>
              <div className='text-zinc-700 text-2xl font-medium font-inter leading-loose tracking-tight'>$ 75,500</div>
              <div className='w-[45px] h-[22px] px-1.5 py-0.5 bg-[#e7f4ee] rounded-[100px] justify-center items-center inline-flex'>
                  <div className='text-center text-[#0d894f] text-xs font-semibold font-inter leading-[18px] tracking-tight'>+10%</div>
              </div>
          </div>
      </div>

      <div className='flex flex-col px-5 py-5 items-start w-[256px] h-[160px] bg-white rounded-md shadow-md'>
          <div><FiShoppingCart className='w-10 h-10 p-1 pl-0 text-[#52e1a1] bg-[#cfe7dc] border-[5px] rounded-full border-[#e7f4ee]'/></div>
          <div className='text-[#667085] text-base font-medium font-inter leading-normal tracking-tight mt-4'>Total Sales</div>
          <div className='inline-flex items-center gap-2'>
              <div className='text-zinc-700 text-2xl font-medium font-inter leading-loose tracking-tight'>$ 31,500</div>
              <div className='w-[45px] h-[22px] px-1.5 py-0.5 bg-[#e7f4ee] rounded-[100px] justify-center items-center inline-flex'>
                  <div className='text-center text-[#0d894f] text-xs font-semibold font-inter leading-[18px] tracking-tight'>+15%</div>
              </div>
          </div>
      </div>

      <div className='flex flex-col px-5 py-5 items-start w-[256px] h-[160px] bg-white rounded-md shadow-md'>
          <div><AiOutlineScan className='w-10 h-10 p-1 text-[#f6594b] bg-[#fcdad7] border-[5px] rounded-full border-[#feedec]'/></div>
          <div className='text-[#667085] text-base font-medium font-inter leading-normal tracking-tight mt-4'>Total Stock</div>
          <div className='inline-flex items-center gap-2'>
              <div className='text-zinc-700 text-2xl font-medium font-inter leading-loose tracking-tight'>247</div>
              <div className='w-[45px] h-[22px] px-1.5 py-0.5 bg-[#f0f1f3] rounded-[100px] justify-center items-center inline-flex'>
                  <div className='text-center text-[#667085] text-xs font-semibold font-inter leading-[18px] tracking-tight'>0%</div>
              </div>
          </div>
      </div>

      <div className='flex flex-col px-5 py-5 items-start w-[256px] h-[160px] bg-white rounded-md shadow-md'>
          <div><IoWalletOutline className='w-10 h-10 p-1 text-[#f8964f] bg-[#fae1cf] border-[5px] rounded-full border-[#fdf1e8]'/></div>
          <div className='text-[#667085] text-base font-medium font-inter leading-normal tracking-tight mt-4'>Balance</div>
          <div className='inline-flex items-center gap-2'>
              <div className='text-zinc-700 text-2xl font-medium font-inter leading-loose tracking-tight'>$ 24,500</div>
              <div className='w-[45px] h-[22px] px-1.5 py-0.5 bg-[#feedec] rounded-[100px] justify-center items-center inline-flex'>
                  <div className='text-center text-[#f04437] text-xs font-semibold font-inter leading-[18px] tracking-tight'>-25%</div>
              </div>
          </div>
      </div>

      


    </div>
  </div>
  )
}

export default Inventory
