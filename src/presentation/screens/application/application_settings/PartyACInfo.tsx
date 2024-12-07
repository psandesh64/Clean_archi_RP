import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import { useContext, useEffect, useState } from 'react'
import AddButton from '../../../components/AddButton'
import { AccountRepositoryContext } from '../../../../application/context/AccountRepositoryProvider'
import { PartyAccount } from '../../../../domain/entities/Account'
import { toast } from 'react-toastify'

const PartyACInfo = () => {


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

    const accountRepository = useContext(AccountRepositoryContext);
    const [partyAccounts,setPartyAccounts] = useState<PartyAccount[]>([])

    const handleDelete = async (id: number) => {
        try {
            const resp = await accountRepository.deletePartyAccount(id)
            if (resp.message) {
                toast.success(resp.message, {
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

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await accountRepository.getManyPartyAccount();
              setPartyAccounts(resp.accounts); 
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
          fetchData();
    },[handleDelete])
    
    return (
        <>
            <div className='w-full bg-white rounded-xl shadow border border-[#ced4da]'>

                <div className='flex flex-wrap gap-4 px-2 justify-between items-center'>

                    <div className='font-plus_jakarta text-[#ce1b22] text-[32px] font-bold'>Party AC Information</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <AddButton onClick={()=>navigate('party-AC-registration')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Party Name</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Party Address</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">VAT</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Contact Info</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Email</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Contact Person</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partyAccounts.map((account,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#5b58e7] text-sm text-center font-semibold font-inter">{account.name}</td>
                            <td className="px-[22px] text-[#333843] text-sm text-center font-medium font-inter">{account.address}</td>
                            <td className="px-[22px] text-[#667085] text-sm text-center font-medium font-inter">{account.panNumber}</td>
                            <td className="px-[22px] text-[#333843] text-sm text-center font-medium font-inter">{account.contactInfo}</td>
                            <td className="px-[22px] text-[#667085] text-sm text-center font-medium font-inter">{account.email}</td>
                            <td className="px-[22px] text-[#667085] text-sm text-center font-medium font-inter">{account.backUpContact}</td>
                            <td>
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(account.id)}/>
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

export default PartyACInfo