import { useContext, useEffect, useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import FilterButton from '../../../components/FilterButton'
import AddButton from '../../../components/AddButton'
import type { SalesReturn } from '../../../../domain/entities/Agency'
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider'
import { toast } from 'react-toastify'
import { formatISOString } from '../../../../customFunction/formatISOString'

const SalesReturn = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [pageData, setPageData] = useState<PageData>({ 
    page_size: 10,
    page_count: 3,
    total_items: 30,
    page_number: 1})
    useEffect(()=>{
        setPageData({ 
            page_size: 10,
            page_count: 3,
            total_items: 30,
            page_number: 1})
    },[])

    const [salesReturns,setSalesReturns]=useState<SalesReturn[]>([])
    const agencyRepo = useContext(AgencyRepositoryContext)

    // Deleting
    const handleDelete = async (id:number) => {

        try {
            const response = await agencyRepo.deleteSalesReturn(id);
            if (response.message) {
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }

        } catch (error: any) {
           
            console.error("Error:", error);
            toast.error('An unexpected error occurred', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        
    }
    // fetching Purchase
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await agencyRepo.getManySalesReturn();
              setSalesReturns(resp)
            } catch (error) {
              console.error("Error fetching data:", error); 
            }
          };
      
          fetchData();
    },[handleDelete])
    

    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales Return</div>
            </div>

            <fieldset className="max-w-[950px] my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Return Type
                </legend>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                    <div className="inline-flex gap-3">
                        <input id='tax' 
                        type="radio"
                        name="invoicetype"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Tax Invoice</div>
                    </div>

                    <div className="inline-flex gap-3">
                        <input id='pending' 
                        type="radio"
                        name="invoicetype"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Pending Invoice</div>
                    </div>
                </div>
            </fieldset>

            <div className="w-full mt-9 shadow border border-[#e0e2e7]">

            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">List View</p>

                <div className="flex flex-wrap gap-3">

                    <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                        <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                        <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                    </div>

                    <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>

                    <AddButton label="Add New" onClick={()=>navigate('add-sales-return')}/>
                </div>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">sale Id</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Product Id</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Return Date</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Invoice No.</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Returned Quantity</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Reason</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesReturns.map((salesReturn,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{salesReturn.saleId}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{salesReturn.productId}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{formatISOString(salesReturn.returnDate)}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{salesReturn.returnInvoiceNo}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{salesReturn.returnedQuantity}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{salesReturn.returnReason}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(salesReturn.id)}/>
                                </div>                                
                            </td>
                        </tr>
                        ))}                        
                    </tbody>
                </table>
            </div>

            {/* ---------------Pagination----------------- */}
            <Pagination
            page = {page}
            setPage = {setPage}
            pageSize={pageSize}
            setPageSize = {setPageSize}
            pageData = {pageData}/>

            </div>

        </div>
</>
)
}

export default SalesReturn
