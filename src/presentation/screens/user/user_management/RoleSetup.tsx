import { useEffect, useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Pagination, { PageData } from '../../../components/Pagination'
import AddButton from '../../../components/AddButton'

const datas = [
    { RName: 'Admin', R_type: 'Admin Panel', crtd_by: 'Admin', crtd_at: '2021-01-15', mdfied_by: 'Admin', mdfied_at: '2022-11-05' },
    { RName: 'John Doe', R_type: 'User Dashboard', crtd_by: 'Admin', crtd_at: '2022-02-10', mdfied_by: 'John Doe', mdfied_at: '2023-05-25' },
    { RName: 'Jane Smith', R_type: 'Support Panel', crtd_by: 'Admin', crtd_at: '2022-03-05', mdfied_by: 'Jane Smith', mdfied_at: '2023-07-14' },
    { RName: 'Mark Johnson', R_type: 'Sales Dashboard', crtd_by: 'Admin', crtd_at: '2022-05-20', mdfied_by: 'Mark Johnson', mdfied_at: '2023-04-18' },
    { RName: 'Emily Davis', R_type: 'Product Management', crtd_by: 'Admin', crtd_at: '2022-06-10', mdfied_by: 'Emily Davis', mdfied_at: '2023-06-02' },
    { RName: 'Robert Lee', R_type: 'Order Management', crtd_by: 'Admin', crtd_at: '2022-07-22', mdfied_by: 'Robert Lee', mdfied_at: '2023-08-11' },
    { RName: 'Susan Taylor', R_type: 'Inventory Dashboard', crtd_by: 'Admin', crtd_at: '2022-09-15', mdfied_by: 'Susan Taylor', mdfied_at: '2023-09-30' },
    { RName: 'David Wilson', R_type: 'Finance Panel', crtd_by: 'Admin', crtd_at: '2022-10-05', mdfied_by: 'David Wilson', mdfied_at: '2023-10-20' },
    { RName: 'Alice Brown', R_type: 'Marketing Panel', crtd_by: 'Admin', crtd_at: '2022-11-01', mdfied_by: 'Alice Brown', mdfied_at: '2023-08-22' },
    { RName: 'Michael Clark', R_type: 'Customer Support', crtd_by: 'Admin', crtd_at: '2023-01-12', mdfied_by: 'Michael Clark', mdfied_at: '2023-09-15' }
];


const RoleSetup = () => {
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

                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Role Setup</div>

                <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                    <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                        <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                        <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                    </div>                    
                    <AddButton onClick={()=>console.log('clicked')} label='Add New'/>

                </div>

            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
            <table className='w-full'>
                <thead>
                    <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                        <th className="text-[#333843] text-sm font-medium font-inter">Role Name</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Role Type</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Created By</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Created At</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Modified By</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Modified At</th>
                        <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data,index)=>(
                    <tr key={index} className='px-[22px] py-[18px] h-[80px] border border-b border-[#F0F1F3]'>
                        <td className="px-[22px] text-[#5C59E8] text-sm font-semibold font-inter text-center">{data.RName}</td>
                        <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.R_type}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.crtd_by}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.crtd_at}</td>
                        <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{data.mdfied_by}</td>
                        <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{data.mdfied_at}</td>                        
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

export default RoleSetup
