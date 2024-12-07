import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import { useEffect, useState } from 'react'
import AddButton from '../../../components/AddButton'
import FilterButton from '../../../components/FilterButton'

const datas = [
    { orderno: '150215', s_name: 'Kamana Traders', is_active:'yes', date: '06/21/2024' },
    { orderno: '150216', s_name: 'Everest Suppliers',  is_active:'yes', date: '06/22/2024' },
    { orderno: '150217', s_name: 'Himalaya Distributors',  is_active:'yes', date: '06/23/2024' },
    { orderno: '150218', s_name: 'Shree Ganesh Store',  is_active:'yes', date: '06/24/2024' },
    { orderno: '150219', s_name: 'Sunrise Enterprises',  is_active:'yes', date: '06/25/2024' },
    { orderno: '150220', s_name: 'KTM Mart',  is_active:'yes', date: '06/26/2024' },
    { orderno: '150221', s_name: 'Nepal Bazaar', is_active:'yes', date: '06/27/2024' },
    { orderno: '150222', s_name: 'Valley Wholesalers', is_active:'yes', date: '06/28/2024' },
    { orderno: '150223', s_name: 'Prime Distributors', is_active:'yes', date: '06/29/2024' },
    { orderno: '150224', s_name: 'City Traders', is_active:'yes', date: '06/30/2024' },
];

const PurchaseOrder = () => {
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
    
    return (
        <>
            <div className='w-full bg-white rounded-xl shadow border border-[#ced4da]'>

                <div className='flex flex-wrap gap-4 px-2 justify-between items-center'>

                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Purchase Order</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                        <AddButton onClick={()=>navigate('add-purchase-order')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Purchase Order No.</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Suppplier Name</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Is Active</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Created Date</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px] border border-b border-[#F0F1F3]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center">{data.orderno}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.s_name}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.is_active}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.date}</td>
                            <td>
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
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

export default PurchaseOrder
