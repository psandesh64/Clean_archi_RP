import { MdOutlineRemoveRedEye } from "react-icons/md"
import CustomButton from "../../../../components/CustomButton"
import InputBox from "../../../../components/InputBox"
import { GoPencil } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import Pagination, { PageData } from "../../../../components/Pagination"
import { useContext, useEffect, useState } from "react"
import FilterButton from "../../../../components/FilterButton"
import { ProductRepositoryContext } from "../../../../../application/context/ProductRepositoryProvider"
import { toast } from "react-toastify"
import type { ProductGroup } from "../../../../../domain/entities/Product"
import SelectBox from "../../../../components/SelectBox"


const ProductGroup = () => {
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

    const [name,setName] = useState('')
    const [isActive,setIsActive] = useState<boolean>(true)
    const formData = {
        name: name,
        isActive: isActive
    }
    const productRepository = useContext(ProductRepositoryContext);

    // Creating Product Group
    const handleAdd = async () => {

        try {
            console.log(formData);
            const response = await productRepository.createGroup(formData);
            if (response.productGroup) {
                console.log(response.productGroup)
                toast.success('Product Group Added', {
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
            // Check if the error is a 400 error with response data
            
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
            const response = await productRepository.deleteGroup(id);
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
    // Updating
    const [editId,setEditId] = useState<number>(0)
    const handleEdit = async () => {
        try {
            const response = await productRepository.updateGroup({id:editId,name:name,isActive:isActive});
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
                setName('')
                setIsActive(false)
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

    // Gettig Products
    const [products,setProducts] = useState<ProductGroup[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {

              const resp = await productRepository.getManyGroups(); // Wait for the promise to resolve
              setProducts(resp.productGroups); // Print the resolved response
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
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
                Product Group Setup
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product Group Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setName(e.target.value)} value={name}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Is Active</p>
                <SelectBox className="w-full" placeholder={'Select'} id="isActive" SelectChangeEvent={(e)=>{e.target.value === 'Yes' ? setIsActive(true) : setIsActive(false)}} options={['Yes','No']}/>
            </div>
            
        </fieldset>

        <div className='flex items-center justify-end gap-5 px-1'>
                
            <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>setName('')}/>
            {!editId ? <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={handleAdd}/> :
             <CustomButton className='px-5 bg-[#1a7338] text-white' label='Edit' onClick={handleEdit}/>}

        </div>

        <div className="w-full mt-5 shadow border border-[#e0e2e7]">
            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Product Group List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Product Group Name</th>
                            <th className="text-[#333843] text-left text-sm font-medium font-inter">Is Active</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{product.name}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-medium font-inter border-b border-[#f0f1f3]">{product.isActive? 'true':'false'}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>{
                                        setEditId(product.id)
                                        setName(product.name)
                                        setIsActive(product.isActive)
                                    }}/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>{handleDelete(product.id);setEditId(0)}}/>
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

export default ProductGroup
