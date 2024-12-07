import { useEffect, useRef, useState } from 'react'
import barcode from '../../../assets/barcode.png'
import { FaSearch } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';

const AddSalesInvoice = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const searchRef = useRef<HTMLDivElement | null>(null)

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
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales Invoice</div>
            </div>
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[50px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Sales Invoice Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                    CustomerType:
                    </div>
                    <InputBox className='max-w-[284px] w-full' placeHolder='Agency' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                    VAT No.:
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                        Customer Name:
                    </div>
                    <InputBox className='max-w-[284px] w-full' placeHolder='Agency' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                    Remaining Credit Limit:
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                    Address:
                    </div>
                    <InputBox className='max-w-[284px] w-full' placeHolder='Agency' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[176px] text-black text-sm font-normal font-plus_jakarta">
                    Credit Limit Date:
                    </div>
                    <InputBox className='max-w-[284px] w-full' placeHolder='All' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                
            </fieldset>
                        
            <div className='flex w-full flex-wrap m-1 my-5 px-10 justify-between gap-4'>
                <div className='flex gap-6 flex-1'>
                    <div className='flex flex-col'>
                        <img src={barcode} className='h-[39px] w-[70px]' alt=''/>
                        <div className='flex w-[70px] h-[10.50px] items-center justify-center mt-1 text-black text-xs font-normal font-inter'>barcode</div>
                    </div>
                    <InputBox className='max-w-[550px] min-w-[300px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>

                <div className='flex w-min items-center justify-end gap-x-[32px]'>
                    <div className=" h-full flex gap-9 items-center" ref={searchRef}>

                        <div className={`flex items-center justify-center h-full rounded-full ${isExpanded ? 'w-[300px] bg-gray-200' :'w-[60px] bg-[#1a7338]'} shadow-sm`} 
                        onClick={handleSearchClick}>
                            {isExpanded ? <input className="text-[#232323] text-base font-normal font-poppins bg-gray-200 outline-none" placeholder='Search'/>: ''}
                            <div className=''>
                                <FaSearch className={`${isExpanded ? 'text-[#1a7338]':'text-white'}  h-6 w-6`}/>
                            </div>
                        </div>
                    </div>

                    <div className='w-[60px] h-[60px] px-3.5 py-2.5 bg-[#1a7338] rounded-[39px] justify-center items-center gap-1 flex'>
                        <FaPlus className={`text-white h-7 w-7`}/>
                    </div>
                </div>

            </div>

            <fieldset className="flex flex-wrap my-5 relative border border-[#e0e2e7] shadow p-10 rounded items-center gap-x-[32px] gap-y-4">
                <div className='space-y-1'>
                    <div className='w-60 text-[#16141b] text-xs font-semibold font-inter leading-[14.40px]'>Bill No.</div>
                    <InputBox className='max-w-[237px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='space-y-1'>
                    <div className='w-60 text-[#16141b] text-xs font-semibold font-inter leading-[14.40px]'>Invoice Type</div>
                    <InputBox className='max-w-[237px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>

                <CustomButton className='w-[91px] translate-y-2 bg-erp text-white flex items-center justify-center h-[50px]' label='Save' onClick={()=>console.log('save')}/>
                
                <div className='space-y-1'>
                    <div className='w-60 text-[#16141b] text-xs font-semibold font-inter leading-[14.40px]'>Date(AD)</div>
                    <InputBox className='max-w-[237px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='space-y-1'>
                    <div className='w-60 text-[#16141b] text-xs font-semibold font-inter leading-[14.40px]'>Date(BS)</div>
                    <InputBox className='max-w-[237px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>


            </fieldset>
            
            <div className='flex flex-wrap justify-between gap-6'>
                {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full min-w-fit flex-1 shadow-sm border border-[#e0e2e7] rounded-sm'>
            <table className='w-full'>
                <thead>
                <tr className='h-14 bg-[#f9f9fc] border-b border-[#f0f1f3] py-[18px]'>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-[30px]">SN</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Item</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Qty</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Unit</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Rate</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Amount</th>
                    <th className="text-[#212529] text-sm font-semibold font-inter text-center px-2">Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr className='h-20 py-[18px] bg-white border-b border-[#f0f1f3]'>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-[30px]">1</td>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-2">Wai Wai</td>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-2">25</td>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-2">bottle</td>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-2">240</td>
                        <td className="text-[#333843] text-sm font-medium font-inter text-center px-2">1000</td>
                        <td className=''>
                                
                                <div className="h-5 justify-center items-center gap-2 inline-flex">
                                    <GoPencil className='w-5 h-5 text-[#667085]'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085]'/>
                                </div>
                            </td>
                    </tr>            
                </tbody>
            </table>
            </div>
                
            <div className='w-max max-w-[480px] px-10 py-5 bg-[#f9f9fc] rounded-lg border border-[#e0e2e7] justify-start items-start space-y-4'>
                <div className="inline-flex items-center">
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Item Code:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className="inline-flex items-center">
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Units:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className="inline-flex items-center">
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Quantity:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className="inline-flex items-center">
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Amount:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <div className='inline-flex items-center'>
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Discount:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                    </div>
                    <div className="inline-flex gap-3 items-center">
                        <input id='discount-type' 
                        type="radio"
                        name="discount-type"
                        value="%"
                        className='outline-none w-4 h-4 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta leading-[14.40px]">%</div>
                    </div>
                    <div className="inline-flex gap-3 items-center">
                        <input id='discount-type' 
                        type="radio"
                        name="discount-type"
                        value="rs"
                        className='outline-none w-4 h-4 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta leading-[14.40px]">Rs.</div>
                    </div>
                </div>
                <div className="inline-flex items-center">
                    <div className="w-[122px] text-black text-sm font-normal font-plus_jakarta">Net Stock:</div>
                    <InputBox className='w-[157px] h-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                
                <CustomButton className='w-[91px] h-[50px] p-5 bg-[#1a7338] rounded-[10px] text-white text-sm font-bold' label='Save' onClick={()=>console.log('clicked')}/>
            </div>
            </div>
        </div>
        </>
      )
}

export default AddSalesInvoice