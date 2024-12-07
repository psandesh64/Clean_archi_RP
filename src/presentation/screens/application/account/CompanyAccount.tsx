import { useContext, useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton"
import FilterButton from "../../../components/FilterButton"
import InputBox from "../../../components/InputBox"
import Pagination, { PageData } from "../../../components/Pagination"
import { AccountRepositoryContext } from "../../../../application/context/AccountRepositoryProvider"
import { toast } from "react-toastify"
import { Company } from "../../../../domain/entities/Account"
import { GoPencil } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"

const CompanyAccount = () => {
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
    const [companyName,setCompanyName] = useState('')
    const [ownerName,setOwnerName] = useState('')
    const [designation,setDesignation] = useState('')
    const [contactInfo,setContactInfo] = useState('')
    const [contactPerson,setContactPerson] = useState('')
    const [designationContactPerson,setDesignationContactPerson] = useState('')
    const [contactInfoContactPerson,setContactInfoContactPerson] = useState('')

    const accountRepository = useContext(AccountRepositoryContext);
    
    // Creating Company
    const handleAdd = async () => {
        try {
            const response = await accountRepository.createCompany({
                companyName: companyName,
                ownerName: ownerName,
                designation: designation,
                contactInfo: contactInfo,
                contactPerson: contactPerson,
                designationContactPerson: designationContactPerson,
                contactInfoContactPerson: contactInfoContactPerson
            });
            if (response.companyInfo) {
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
                    setCompanyName('')
                    setOwnerName('')
                    setDesignation('')
                    setContactInfo('')
                    setContactPerson('')
                    setDesignationContactPerson('')
                    setContactInfoContactPerson('')
            }

        } catch (error: any) {
    
            console.error("Error logging in:", error);
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
    // Deleting Company
    const handleDelete = async (id:number) => {
        try {
            const response = await accountRepository.deleteCompany(id);
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
                    setCompanyName('')
                    setOwnerName('')
                    setDesignation('')
                    setContactInfo('')
                    setContactPerson('')
                    setDesignationContactPerson('')
                    setContactInfoContactPerson('')
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
    // Editing Company
    const [editId,setEditId] = useState<number>(0)
    const handleEdit = async () => {

        try {
            const response = await accountRepository.updateCompany({
                id:editId,
                companyName: companyName,
                ownerName: ownerName,
                designation: designation,
                contactInfo: contactInfo,
                contactPerson: contactPerson,
                designationContactPerson: designationContactPerson,
                contactInfoContactPerson: contactInfoContactPerson});
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
                    setEditId(0)
                    setCompanyName('')
                    setOwnerName('')
                    setDesignation('')
                    setContactInfo('')
                    setContactPerson('')
                    setDesignationContactPerson('')
                    setContactInfoContactPerson('')
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
    //Fetch Companys
    const [companys,setCompanys] = useState<Company[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await accountRepository.getManyCompany();

              setCompanys(resp.companyInfoList);
              
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
          fetchData();
    },[handleAdd,handleEdit])


    return(
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Company Account</div>
            </div>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
            lg:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            ">

            <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                Company Info
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Company Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setCompanyName(e.target.value)} value={companyName}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Owner Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setOwnerName(e.target.value)} value={ownerName}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Designation</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setDesignation(e.target.value)} value={designation}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Contact</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setContactInfo(e.target.value)} value={contactInfo}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Contact Person</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setContactPerson(e.target.value)} value={contactPerson}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Designation Contact Person</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setDesignationContactPerson(e.target.value)} value={designationContactPerson}/>
            </div>
            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Contact Information Contact Person</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setContactInfoContactPerson(e.target.value)} value={contactInfoContactPerson}/>
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

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Company Info List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Company Name</th>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Owner Name</th>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Designation</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companys && companys.map((company,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{company.companyName}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{company.ownerName}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{company.designation}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>

                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer' onClick={()=>{
                                        setEditId(company.id)
                                        setCompanyName(company.companyName)
                                        setOwnerName(company.ownerName)
                                        setDesignation(company.designation)
                                        setContactInfo(company.contactInfo)
                                        setContactPerson(company.contactPerson)
                                        setDesignationContactPerson(company.designationContactPerson)
                                        setContactInfoContactPerson(company.contactInfoContactPerson)
                                    }}/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer' onClick={()=>handleDelete(company.id)}/>
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

export default CompanyAccount