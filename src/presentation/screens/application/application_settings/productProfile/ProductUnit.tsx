import CustomButton from "../../../../components/CustomButton"
import InputBox from "../../../../components/InputBox"
import { GoPencil } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import Pagination, { PageData } from "../../../../components/Pagination"
import { useContext, useEffect, useState } from "react"
import FilterButton from "../../../../components/FilterButton"
import { ProductRepositoryContext } from "../../../../../application/context/ProductRepositoryProvider"
import { toast } from "react-toastify"
import type { ProductUnit } from "../../../../../domain/entities/Product"


const ProductUnit = () => {
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
    const formData = {
        name: name
    }
    const productRepository = useContext(ProductRepositoryContext);

    // Creating
    const handleAdd = async () => {
        try {
            const response = await productRepository.createUnit(formData);
            if (response.productUnits) {
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
                setName('')
            }

        } catch (error: any) {
            // Check if the error is a 400 error with response data
            if (error.response?.status === 400) {
                // Set errors to display on the screen
                toast.error('An error occurred', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            } else {
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
    }
    // Deleting
    const handleDelete = async (id:number) => {
        try {
            const response = await productRepository.deleteUnit(id);
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
            // Check if the error is a 400 error with response data
            if (error.response?.status === 400) {
                // Set errors to display on the screen
                toast.error('An error occurred', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            } else {
                console.error("Error", error);
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
    }
    // Updating
    const [editId,setEditId] = useState<number>(0)
    const handleEdit = async () => {
        try {
            const response = await productRepository.updateUnit({id:editId,name:name});
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
    const [products,setProducts] = useState<ProductUnit[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepository.getManyUnit(); // Wait for the promise to resolve
              setProducts(resp.productUnits); // Print the resolved response
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
      
          fetchData();
    },[handleAdd,handleEdit])

  return (
    <div>
        <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
            lg:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            ">

            <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                Product Unit Setup
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product Unit Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setName(e.target.value)} value={name}/>
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

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Product Unit List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Product Group Name</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{product.name}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>{
                                        setEditId(product.id)
                                        setName(product.name)
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

export default ProductUnit
