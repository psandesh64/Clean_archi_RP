import { MdOutlineRemoveRedEye } from "react-icons/md";
import AddButton from "../../../../components/AddButton"
import FilterButton from "../../../../components/FilterButton"
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination, { PageData } from "../../../../components/Pagination";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductRepositoryContext } from "../../../../../application/context/ProductRepositoryProvider";
import { Product, ProductCategory } from "../../../../../domain/entities/Product";
import { toast } from "react-toastify";


const ProductList = () => {
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
    // Deleting
    const handleDelete = async (id:number) => {
      try {
          const response = await productRepository.deleteProduct(id);
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
    //getting all products
    const [products,setProducts] = useState<Product[]>([])
    const [categories,setCategories] = useState<ProductCategory[]>([])

    const productRepository = useContext(ProductRepositoryContext);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepository.getManyProduct();
              const resp1 = await productRepository.getManyCategories(); 
              setProducts(resp.products);
              setCategories(resp1.productCategories)
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
      
          fetchData();
    },[handleDelete])

  return (
    <div className="w-full mt-9 shadow border border-[#e0e2e7]">

      {/* Heading */}
      <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-[18px]">

        <p className="text-[#333843] text-lg font-medium font-inter text-nowrap">Product List</p>

        <div className="flex gap-3">
            <FilterButton label="Filter" onClick={()=>console.log('clicked')}/>
            <AddButton label="Add New" onClick={()=>navigate('add-product')}/>
        </div>

      </div>

      {/* -----------------------table---------------- */}
      <div className='overflow-x-auto max-w-full'>
        <table className='w-full'>
            <thead>
                <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                    <th className="text-[#333843] text-sm font-medium font-inter">Product Category Name</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Product Name</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Description</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Retail Rate(RS)</th>
                    <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index)=>(
                <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                    <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{categories.map((category) => (category.id === product.productCategoryId ? category.name:''))}</td>
                    <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.name}</td>
                    <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.description}</td>
                    <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.mrp}</td>
                    <td className="border-b border-[#f0f1f3]">
                        <div className='flex gap-2 justify-center'>
                            <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                            <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                            <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'
                            onClick={()=>handleDelete(product.id)}/>
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
  )
}

export default ProductList
