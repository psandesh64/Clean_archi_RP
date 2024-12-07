import CustomButton from "../../../components/CustomButton"
import InputBox from "../../../components/InputBox"
import { GoPencil } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import Pagination, { PageData } from "../../../components/Pagination"
import { useContext, useEffect, useState } from "react"
import FilterButton from "../../../components/FilterButton"
import { toast } from "react-toastify"
import { AccountRepositoryContext } from "../../../../application/context/AccountRepositoryProvider"
import type { GroupLedger, Ledger } from "../../../../domain/entities/Account"
import SelectBoxId from "../../../components/SelectBoxId"


const Ledger = () => {
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

    const [ledgerName,setLedgerName] = useState('')
    const [groupLedgerId,setGroupLedgerId] = useState<number>(0)

    const formData = {
        name: ledgerName,
        groupLedgerId:groupLedgerId
    }

    const accountRepository = useContext(AccountRepositoryContext);

    // Creating
    const handleAdd = async () => {
        try {
            const response = await accountRepository.createLedger(formData);
            if (response.ledgers) {
                toast.success('Account Ledger Added', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                setLedgerName('')
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
            const response = await accountRepository.deleteLedgers(id);
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
    // Updating
    const [editId,setEditId] = useState<number>(0)
    const handleEdit = async () => {
        try {
            const response = await accountRepository.updateLedgers({id:editId,name:ledgerName,groupLedgerId:groupLedgerId});
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
                setLedgerName('')
                setEditId(0)
            }

        } catch (error: any) {
            // Check if the error is a 400 error with response data
            // if (error.response?.status === 400) {
            console.error("Error:", error);
            toast.error('An unexpected error occurred', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });   
   
        }
    }

    // Gettig Ledgers
    const [ledgers,setLedgers] = useState<Ledger[]>([])
    const [groupLedgers,setGroupLedgers] = useState<GroupLedger[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await accountRepository.getManyLedgers();
              const resp1 = await accountRepository.getManyGroupLedgers()
              setLedgers(resp.ledgers)
              setGroupLedgers(resp1.groupLedgers);
            } catch (error) {
              console.error("Error fetching data:", error); 
            }
          };
      
          fetchData();
    },[handleAdd])

  return (
    <div>
        <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
            lg:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            ">

            <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                Ledger Setup
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Ledger Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setLedgerName(e.target.value)} value={ledgerName}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Group Ledger</p>
                <SelectBoxId className="w-full" placeholder={'Select'} id="groupLedgerId" SelectChangeEvent={(e)=>setGroupLedgerId(Number(e.target.value))} options={groupLedgers}/>
            </div>
            
        </fieldset>

        <div className='flex items-center justify-end gap-5 px-1'>
                
            <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('hello')}/>
            {!editId ? <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={handleAdd}/> :
             <CustomButton className='px-5 bg-[#1a7338] text-white' label='Edit' onClick={handleEdit}/>}

        </div>

        <div className="w-full mt-5 shadow border border-[#e0e2e7]">
            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Ledger List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Ledger Name</th>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Group Ledger</th>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Group Ledger Type</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ledgers && ledgers.map((ledger,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{ledger.name}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{groupLedgers.map((gledger) => (gledger.id === ledger.groupLedgerId ? gledger.name:''))}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{groupLedgers.map((gledger) => (gledger.id === ledger.groupLedgerId ? gledger.type:''))}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    {/* <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/> */}
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>{
                                        setEditId(ledger.id)
                                        setLedgerName(ledger.name)
                                        setGroupLedgerId(ledger.groupLedgerId)
                                    }}/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer' onClick={()=>handleDelete(ledger.id)}/>
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
  )
}

export default Ledger