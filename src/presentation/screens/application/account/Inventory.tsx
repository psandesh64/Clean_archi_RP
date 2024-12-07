import { useContext, useEffect, useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';
import SelectBoxId from '../../../components/SelectBoxId';
import FilterButton from '../../../components/FilterButton';
import { Product } from '../../../../domain/entities/Product';
import { ProductRepositoryContext } from '../../../../application/context/ProductRepositoryProvider';
import { AccountRepositoryContext } from '../../../../application/context/AccountRepositoryProvider';
import { toast } from 'react-toastify';
import { Inventory } from '../../../../domain/entities/Account';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Pagination, { PageData } from '../../../components/Pagination';

const InventoryPage = () => {
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

    const [stock,setStock] = useState<number>(0)
    const [productId,setProductId] = useState<number>(0)

    const accountRepository = useContext(AccountRepositoryContext);
    // Creating Inventory
    const handleAdd = async () => {
    
        try {
            const response = await accountRepository.createInventory({
                stock: stock,
                productId: productId
            });
            if (response.inventory) {
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
                setStock(0)
                setProductId(0)
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
            const response = await accountRepository.deleteInventory(id);
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


    const productRepo = useContext(ProductRepositoryContext)
    // Gettig Sub Ledgers
    const [products,setProducts] = useState<Product[]>([])
    const [inventories,setInventories] = useState<Inventory[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const resp = await productRepo.getManyProduct()
                const resp1 = await accountRepository.getManyInventory()
                setProducts(resp.products);
                setInventories(resp1.inventories);
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
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Inventory</div>
            </div>

            

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
            lg:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(316px,1fr))]
            ">

            <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                Add Inventory
            </legend>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Product</p>
                <SelectBoxId className="w-full" placeholder={'Select'} id="ledgerId" SelectChangeEvent={(e)=>setProductId(Number(e.target.value))} options={products}/>
            </div>

            <div className="space-y-2">
                <p className="text-[#16141b] text-xs font-semibold font-['Open Sans']">Stock Name</p>
                <InputBox className='w-full'
                    placeHolder={''} InputChangeEvent={(e)=>setStock(Number(e.target.value))} value={stock}/>
            </div>
            
            
        </fieldset>

        <div className='flex items-center justify-end gap-5 px-1'>
                
            <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('hello')}/>
            <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={handleAdd}/>

        </div>

        <div className="w-full mt-5 shadow border border-[#e0e2e7]">
            {/* Heading */}
            <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

                <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Inventory List</p>

                <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="pl-4 text-[#333843] text-left text-sm font-medium font-inter">Stock Id</th>
                            <th className="text-[#333843] text-left text-sm font-medium font-inter">Product Name</th>
                            <th className="text-[#333843] text-center text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventories.map((inventory,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{inventory.stock}</td>
                            <td className="px-[22px] text-[#333843] text-left text-sm font-semibold font-inter border-b border-[#f0f1f3]">{products.map((product) => (product.id === inventory.productId ? product.name:''))}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                                    onClick={()=>handleDelete(inventory.id)}/>
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

export default InventoryPage