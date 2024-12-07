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
    { pc_name: 'Noodles', product_name: 'Wai Wai', notes: '2PM Noodles', retail_rate: '600' },
    { pc_name: 'Beverages', product_name: 'Coca Cola', notes: 'Soft Drink', retail_rate: '150' },
    { pc_name: 'Snacks', product_name: 'Lays', notes: 'Potato Chips', retail_rate: '100' },
    { pc_name: 'Dairy', product_name: 'Milk', notes: 'Full Cream Milk', retail_rate: '50' },
    { pc_name: 'Confectionery', product_name: 'Cadbury', notes: 'Dairy Milk Chocolate', retail_rate: '200' },
    { pc_name: 'Bakery', product_name: 'Bread', notes: 'Whole Wheat Bread', retail_rate: '40' },
    { pc_name: 'Canned Goods', product_name: 'Tuna', notes: 'Canned Tuna', retail_rate: '120' },
    { pc_name: 'Household', product_name: 'Detergent', notes: 'Laundry Detergent', retail_rate: '300' },
    { pc_name: 'Personal Care', product_name: 'Shampoo', notes: 'Herbal Shampoo', retail_rate: '250' },
    { pc_name: 'Frozen Foods', product_name: 'Ice Cream', notes: 'Vanilla Ice Cream', retail_rate: '350' },
];

const SalesInvoice = () => {
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
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales Invoice</div>
            </div>

            <fieldset className="max-w-[950px] my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Invoice Type
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
                        <input id='abbv-tax' 
                        type="radio"
                        name="invoicetype"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Abbreviated Tax Invoice</div>
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

        <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Product List</p>

        <div className="flex flex-wrap gap-3">
            <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
            </div>
            <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            <AddButton label="Add New" onClick={()=>navigate('add-sales-invoice')}/>
        </div>

      </div>

      {/* -----------------------table---------------- */}
      <div className='overflow-x-auto max-w-full'>
        <table className='w-full'>
            <thead>
                <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                    <th className="text-[#333843] text-sm font-medium font-inter">Product Category Name</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Product Name</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Notes</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Retail Rate(RS)</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data,index)=>(
                <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                    <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{data.pc_name}</td>
                    <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.product_name}</td>
                    <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.notes}</td>
                    <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.retail_rate}</td>
                    <td className="border-b border-[#f0f1f3]">
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

export default SalesInvoice
