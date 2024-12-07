import { useContext, useEffect, useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';
import FilterButton from '../../../components/FilterButton';
import { AccountRepositoryContext } from '../../../../application/context/AccountRepositoryProvider';
import { toast } from 'react-toastify';
import { Master } from '../../../../domain/entities/Account';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Pagination, { PageData } from '../../../components/Pagination';

const MasterPage = () => {
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

    const [voucher,setVoucher] = useState<number>(0)
    const [voucherType,setVoucherType] = useState<string>('')
    const [userId,setUserId] = useState("94e83b1d-cc24-49b3-81f5-780c5ff67da9")

    const accountRepository = useContext(AccountRepositoryContext);
    // Creating Inventory
    const handleAdd = async () => {
    
        try {
            const response = await accountRepository.createMaster({
                voucher_No: voucher,
                voucherType: voucherType,
                userId: userId
            });
            if (response.master) {
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
                setVoucher(0)
                setVoucherType('')
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

    // Deleting
    const handleDelete = async (id:number) => {

        try {
            const response = await accountRepository.deleteMaster(id);
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

    // Gettig Masters
    const [masters,setMasters] = useState<Master[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const resp = await accountRepository.getManyMaster()
                setMasters(resp.masters);
            } catch (error) {
                console.error("Error fetching data:", error); // Handle errors, if any
            }
        };
        fetchData();

    },[handleAdd,handleDelete])

    return(
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Masters</div>
            </div>

            

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
            lg:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            ">

            <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                Add Master
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Voucher No</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setVoucher(Number(e.target.value))} value={voucher}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Voucher Type</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setVoucherType(e.target.value)} value={voucherType}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">User ID</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setUserId(e.target.value)} value={userId}/>
            </div>
            
            
        </fieldset>

        <div className='flex items-center justify-end gap-5 px-1'>
                
            <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('hello')}/>
            <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={handleAdd}/>

        </div>

        <div className="w-full mt-5 shadow border border-[#e0e2e7]">
            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Master List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Master Id</th>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Voucher No</th>
                            <th className="text-[#333843] text-left text-sm font-medium font-inter">Voucher Type</th>
                            <th className="text-[#333843] text-left text-sm font-medium font-inter">User ID</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {masters.map((master,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{master.id}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{master.voucher_No}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{master.voucherType}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{master.userId}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(master.id)}/>
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

export default MasterPage