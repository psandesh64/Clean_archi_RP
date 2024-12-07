import { MdOutlineRemoveRedEye } from "react-icons/md"
import CustomButton from "../../../../components/CustomButton"
import InputBox from "../../../../components/InputBox"
import { GoPencil } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import Pagination, { PageData } from "../../../../components/Pagination"
import { useContext, useEffect, useState } from "react"
import FilterButton from "../../../../components/FilterButton"
import { ProductRepositoryContext } from "../../../../../application/context/ProductRepositoryProvider"
import type { ProductCategory, ProductGroup, ProductType } from "../../../../../domain/entities/Product"
import SelectBoxId from "../../../../components/SelectBoxId"
import { toast } from "react-toastify"
import SelectBox from "../../../../components/SelectBox"


const ProductCategory = () => {
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

    const productRepository = useContext(ProductRepositoryContext);
    // Gettig Products
    const [groups,setGroups] = useState<ProductGroup[]>([])
    const [types,setTypes] = useState<ProductType[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepository.getManyGroups(); 
              const resp1 = await productRepository.getManyTypes(); 
              setGroups(resp.productGroups);
              setTypes(resp1.productTypes);
              
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
      
          fetchData();
    },[])

    const [group,setGroup] = useState<number>(0)
    const [catName,setCatName] = useState<string>('')
    const [note,setNote] = useState<string>('')
    const [type,setType] = useState<number>(0)
    const [margin,setMargin] = useState<string>('')
    const [isActive,setIsActive] = useState<boolean>(true)



    const handleAdd = async () => {
        try {
            const response = await productRepository.createCategories({productGroupId:group,name:catName,notes:note,productTypeId:type,margin:margin,isActive:isActive});
            if (response.productCategory) {
                toast.success('Product Category Added', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setGroup(0)
                setCatName('')
                setNote('')
                setType(0)
                setMargin('')
                setIsActive(true)
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
    // Deleting
    const handleDelete = async (id:number) => {
        try {
            const response = await productRepository.deleteCategory(id);
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
            const response = await productRepository.updateCategory({id:editId,productGroupId:group,name:catName,notes:note,productTypeId:type,margin:margin,isActive:isActive});
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
                setGroup(0)
                setCatName('')
                setNote('')
                setType(0)
                setMargin('')
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
    // Gettig categories
    const [categories,setCategories] = useState<ProductCategory[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepository.getManyCategories();
              setCategories(resp.productCategories);
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
                Product Category Setup
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product Group</p>
                <SelectBoxId className="w-full" placeholder={'Select'} id="pGroup" SelectChangeEvent={(e)=>setGroup(Number(e.target.value))} options={groups}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product Category Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setCatName(e.target.value)} value={catName}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Notes</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setNote(e.target.value)} value={note}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product Type</p>
                <SelectBoxId className="w-full" placeholder={'Select'} id="pTypes" SelectChangeEvent={(e)=>setType(Number(e.target.value))} options={types}/>
                
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Recommended Margin(%)</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setMargin(e.target.value)} value={margin}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Is Active</p>
                <SelectBox className="w-full" placeholder={'Select'} id="isActive" SelectChangeEvent={(e)=>{e.target.value === 'Yes' ? setIsActive(true) : setIsActive(false)}} options={['Yes','No']}/>
            </div>
            

        </fieldset>

        <div className='flex items-center justify-end gap-5 px-1'>
                
            <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('Cancelled')}/>
            {!editId ? <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={handleAdd}/> :
             <CustomButton className='px-5 bg-[#1a7338] text-white' label='Edit' onClick={handleEdit}/>}

        </div>

        <div className="w-full mt-5 shadow border border-[#e0e2e7]">
            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Product List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Product Category Name</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Notes</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Margin</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">isActive</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{category.name}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{category.notes}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{category.margin}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{category.isActive? 'true':'false'}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>{
                                        setEditId(category.id)
                                        setGroup(category.productGroupId)
                                        setCatName(category.name)
                                        setNote(category.notes)
                                        setType(category.productTypeId)
                                        setMargin(category.margin)
                                        setIsActive(category.isActive)                
                                    }}/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(category.id)}/>
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

export default ProductCategory
