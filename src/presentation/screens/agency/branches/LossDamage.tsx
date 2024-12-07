import { GoPencil } from 'react-icons/go'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineRemoveRedEye} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Pagination, { PageData } from '../../../components/Pagination'
import { useContext, useEffect, useState } from 'react'
import AddButton from '../../../components/AddButton'
import FilterButton from '../../../components/FilterButton'
import { DamageLoss } from '../../../../domain/entities/Agency'
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider'
import { toast } from 'react-toastify'


const LossDamage = () => {
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

    const [damageLosses,setDamageLosses]=useState<DamageLoss[]>([])
    const agencyRepo = useContext(AgencyRepositoryContext)

    // Deleting
    const handleDelete = async (id:number) => {

        try {
            const response = await agencyRepo.deleteDamageLoss(id);
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
                autoClose: 3000,
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
              const resp = await agencyRepo.getManyDamageLoss();

              setDamageLosses(resp.damageLosses)
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

                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Loss and Damage</div>

                    <div className='flex items-center flex-wrap py-6 gap-3 pr-6'>

                        <div className='flex items-center w-[300px] h-9 bg-neutral-50/95 rounded-[15px] overflow-hidden'>
                            <IoMdSearch className='w-7 h-7 text-[#3c3c43]/60 ml-2'/>
                            <input type="text" className='outline-0 flex-auto px-2 bg-neutral-50/95 text-[17px] font-normal font-lexend leading-snug' placeholder='Search'/>
                        </div>
                        <FilterButton label='Filters' onClick={()=>console.log('Filter Clicked')}/>
                        <AddButton onClick={()=>navigate('add-loss-damage')} label='Add New'/>

                    </div>

                </div>

                {/* -----------------------table---------------- */}
                <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Id.</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Product ID</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Quantity</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Remarks</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Rate</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {damageLosses.map((damageLoss,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center">{damageLoss.id}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{damageLoss.productId}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{damageLoss.qty}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center">{damageLoss.remarks}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center">{damageLoss.rate}</td>
                            <td>
                                <div className='flex w-full gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(damageLoss.id)}/>
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

export default LossDamage
