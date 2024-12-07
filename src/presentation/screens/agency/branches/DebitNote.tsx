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
    { billno: '150215', p_name: 'Kamana Traders', amt: '70000', paid: '50000', email: 'None', date: '06/21/2024' },
    { billno: '150216', p_name: 'Everest Suppliers', amt: '85000', paid: '85000', email: 'everest@suppliers.com', date: '06/22/2024' },
    { billno: '150217', p_name: 'Himalaya Distributors', amt: '120000', paid: '100000', email: 'contact@himalaya.com', date: '06/23/2024' },
    { billno: '150218', p_name: 'Shree Ganesh Store', amt: '60000', paid: '40000', email: 'ganesh@store.com', date: '06/24/2024' },
    { billno: '150219', p_name: 'Sunrise Enterprises', amt: '95000', paid: '70000', email: 'info@sunrise.com', date: '06/25/2024' },
    { billno: '150220', p_name: 'KTM Mart', amt: '50000', paid: '30000', email: 'ktm@mart.com', date: '06/26/2024' },
    { billno: '150221', p_name: 'Nepal Bazaar', amt: '75000', paid: '75000', email: 'contact@nepalbazaar.com', date: '06/27/2024' },
    { billno: '150222', p_name: 'Valley Wholesalers', amt: '105000', paid: '50000', email: 'valley@wholesalers.com', date: '06/28/2024' },
    { billno: '150223', p_name: 'Prime Distributors', amt: '80000', paid: '60000', email: 'prime@distributors.com', date: '06/29/2024' },
    { billno: '150224', p_name: 'City Traders', amt: '90000', paid: '45000', email: 'city@traders.com', date: '06/30/2024' },
];

const DebitNote = () => {
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

                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Debit Note</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                        <AddButton onClick={()=>navigate('item-base')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Bill No.</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Party Name</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Amount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Paid</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Bill Notes</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Bill Date</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#5b58e7] text-sm font-semibold font-inter">{data.billno}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter">{data.p_name}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter">{data.amt}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter">{data.paid}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-['Inter']">{data.email}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-['Inter']">{data.date}</td>
                            <td>
                                <div className='flex gap-2'>
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

export default DebitNote
