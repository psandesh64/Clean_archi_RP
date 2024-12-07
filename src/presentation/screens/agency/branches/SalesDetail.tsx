import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import { useContext, useEffect, useState } from 'react'
import AddButton from '../../../components/AddButton'
import FilterButton from '../../../components/FilterButton'
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider'
import { SalesDetail } from '../../../../domain/entities/Agency'
import { toast } from 'react-toastify'

const SalesDetailPage = () => {
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
    const [salesDetails,setSalesDetails]=useState<SalesDetail[]>([])
    const agencyRepo = useContext(AgencyRepositoryContext)

    // Deleting
    const handleDelete = async (id:number) => {

        try {
            const response = await agencyRepo.deleteSalesDetail(id);
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
              const resp = await agencyRepo.getManySalesDetail();
              setSalesDetails(resp)
            } catch (error) {
              console.error("Error fetching data:", error); 
            }
          };
      
          fetchData();
    },[handleDelete])

    return (
        <>
            <div className='w-full bg-white rounded-xl shadow border border-[#ced4da]'>

                <div className='flex flex-wrap gap-4 px-2 justify-between items-center'>

                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales Detail</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                        <AddButton onClick={()=>navigate('add-sales-detail')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Product Id</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Quantity</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Unit Cost</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Discount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Remarks</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesDetails.map((sales,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px] border border-b border-[#F0F1F3]'>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{sales.productID}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{sales.quantity}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{sales.unitPrice}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{sales.discount}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{sales.remarks}</td>
                            <td>
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(sales.id)}/>
                                </div>                                
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                </div>
                <Pagination
                page = {page}
                setPage = {setPage}
                pageSize={pageSize}
                setPageSize = {setPageSize}
                pageData = {pageData}/>
            </div>
        
        </>
    )

}

export default SalesDetailPage
