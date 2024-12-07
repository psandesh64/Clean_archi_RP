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
    { billno: '150215', p_name: 'Kushal Kunwar', qty: '20', amt: '70000', vat: '10%', paid: '60000', date: '06/21/2024' },
    { billno: '150216', p_name: 'Rita Sharma', qty: '15', amt: '45000', vat: '5%', paid: '30000', date: '06/22/2024' },
    { billno: '150217', p_name: 'Sunil Shrestha', qty: '25', amt: '125000', vat: '12%', paid: '125000', date: '06/23/2024' },
    { billno: '150218', p_name: 'Maya Gurung', qty: '10', amt: '35000', vat: '8%', paid: '20000', date: '06/24/2024' },
    { billno: '150219', p_name: 'Pratik Thapa', qty: '18', amt: '54000', vat: '7%', paid: '50000', date: '06/25/2024' },
    { billno: '150220', p_name: 'Anita Joshi', qty: '30', amt: '90000', vat: '10%', paid: '75000', date: '06/26/2024' },
    { billno: '150221', p_name: 'Kiran Manandhar', qty: '22', amt: '66000', vat: '9%', paid: '60000', date: '06/27/2024' },
    { billno: '150222', p_name: 'Deepak Rai', qty: '12', amt: '36000', vat: '6%', paid: '30000', date: '06/28/2024' },
    { billno: '150223', p_name: 'Binita Tamang', qty: '17', amt: '51000', vat: '7%', paid: '45000', date: '06/29/2024' },
    { billno: '150224', p_name: 'Nabin Adhikari', qty: '20', amt: '80000', vat: '15%', paid: '70000', date: '06/30/2024' },
];

const PurchaseInvoice = () => {
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

                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Purchase Invoice List</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                        <AddButton onClick={()=>navigate('add-purchase-invoice')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Bill No.</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Supplier Name</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Quantity</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Amount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">VAT</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Paid</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Bill Date</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center">{data.billno}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.p_name}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.qty}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.amt}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.vat}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.paid}</td>
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

export default PurchaseInvoice
