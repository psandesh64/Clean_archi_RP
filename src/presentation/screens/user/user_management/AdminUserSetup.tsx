import { useEffect, useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import FilterButton from '../../../components/FilterButton'
import AddButton from '../../../components/AddButton'

const datas = [
    { Bdetail: 'MMN-WareHouse', u_name: 'admin', uf_name: 'Administration My Mart', mobile: '9842563145', email: 'mymart@gmail.com', created_by: 'admin', lock_status: 'True' },
    { Bdetail: 'MMN-Store', u_name: 'john_doe', uf_name: 'John Doe Store', mobile: '9876543210', email: 'johndoe.store@gmail.com', created_by: 'admin', lock_status: 'False' },
    { Bdetail: 'MMN-Depot', u_name: 'janedoe', uf_name: 'Jane Doe Depot', mobile: '9912345678', email: 'janedoe.depot@gmail.com', created_by: 'john_doe', lock_status: 'True' },
    { Bdetail: 'MMN-Supply', u_name: 'mark_smith', uf_name: 'Mark Smith Supply', mobile: '9876545678', email: 'mark.smith@gmail.com', created_by: 'janedoe', lock_status: 'False' },
    { Bdetail: 'MMN-Warehouse', u_name: 'susan_taylor', uf_name: 'Susan Taylor Warehouse', mobile: '9812345987', email: 'susan.taylor@warehouse.com', created_by: 'mark_smith', lock_status: 'True' },
    { Bdetail: 'MMN-Retail', u_name: 'alice_brown', uf_name: 'Alice Brown Retail', mobile: '9923456789', email: 'alice.brown@retail.com', created_by: 'susan_taylor', lock_status: 'False' },
    { Bdetail: 'MMN-Logistics', u_name: 'michael_clark', uf_name: 'Michael Clark Logistics', mobile: '9934567890', email: 'michael.clark@logistics.com', created_by: 'alice_brown', lock_status: 'True' },
    { Bdetail: 'MMN-Services', u_name: 'emily_davis', uf_name: 'Emily Davis Services', mobile: '9845678901', email: 'emily.davis@services.com', created_by: 'michael_clark', lock_status: 'False' },
    { Bdetail: 'MMN-Factory', u_name: 'robert_lee', uf_name: 'Robert Lee Factory', mobile: '9956789012', email: 'robert.lee@factory.com', created_by: 'emily_davis', lock_status: 'True' },
    { Bdetail: 'MMN-Branch', u_name: 'david_wilson', uf_name: 'David Wilson Branch', mobile: '9967890123', email: 'david.wilson@branch.com', created_by: 'robert_lee', lock_status: 'False' }
];

const AdminUserSetup = () => {
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

                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Admin User Setup</div>

                <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                    <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                        <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                        <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                    </div>
                    <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                    <AddButton onClick={()=>navigate('user-info')} label='Add New'/>

                </div>

            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
            <table className='w-full'>
                <thead>
                    <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                        <th className="text-[#333843] text-sm font-medium font-inter">Branch Detail</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">User Name</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">User Full Name</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Mobile</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Email</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Created By</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Lock Status</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data,index)=>(
                    <tr key={index} className='px-[22px] py-[18px] h-[80px] border border-b border-[#F0F1F3]'>
                        <td className="px-[22px] text-[#5C59E8] text-sm font-semibold font-inter text-center">{data.Bdetail}</td>
                        <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.u_name}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.uf_name}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.mobile}</td>
                        <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.email}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.created_by}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">
                            <div className='px-3 py-1 bg-[#e7f4ee] rounded-[100px] text-center justify-center items-center flex text-[#0d894f] text-sm font-semibold font-inter'>{data.lock_status}</div>
                        </td>
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

export default AdminUserSetup