import { GoPencil } from 'react-icons/go';
// import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider';
import { ProductRepositoryContext } from '../../../../application/context/ProductRepositoryProvider';
import { toast } from 'react-toastify';
import { Product } from '../../../../domain/entities/Product';
import SelectBoxId from '../../../components/SelectBoxId';
import { formatISOString } from '../../../../customFunction/formatISOString';

const AddLossDamage = () => {
    const navigate = useNavigate()

    const [productId,setProductId]=useState<number>(0)
    const [qty,setQty]=useState<number>(0)
    const [remarks,setRemarks]=useState<string>('')
    const [rate,setRate]=useState<number>(0)

    const agencyRepo = useContext(AgencyRepositoryContext)
    const productRepo = useContext(ProductRepositoryContext)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createDamageLoss({
                productID: productId,
                qty: qty,
                remarks: remarks,
                rate: rate,
            })
            if (resp.damageLoss) {
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
                navigate('/agency/loss-damage')
            }

        } catch (error){
            console.error(error)
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
    const resetForm = () => {
        setProductId(0)
        setQty(0)
        setRemarks('')
        setRate(0)
    };

    // fetching Purchase and Products
    const [products,setProducts]=useState<Product[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepo.getManyProduct();
              setProducts(resp.products)
            } catch (error) {
              console.error("Error fetching data:", error); 
            }
          };
      
          fetchData();
    },[])


    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Loss and Damage</div>
            </div>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Purchase Detail Information
                </legend>
                
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Product Id.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <SelectBoxId className="max-w-[284px] w-full" placeholder={'Select'} id="ProductId" SelectChangeEvent={(e)=>setProductId(Number(e.target.value))} options={products}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Quantity:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setQty(Number(e.target.value))} value={qty}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setRemarks(e.target.value)} value={remarks}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Unit Cost:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setRate(Number(e.target.value))} value={rate}/>
                </div>                

                        
                
            </fieldset>

            {/* <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded flex items-center gap-x-[100px] gap-y-4">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Bill Information
                </legend>
                <div className='flex flex-wrap items-center gap-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[400px,repeat(auto-fill,minmax(440px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Product Detail
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Product:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    P-Rate:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Unit:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Qty:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Batch No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[400px,repeat(auto-fill,minmax(440px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Sales Price
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Retail Sale:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Int-Company Sale:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Whole Sale:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>                
            </fieldset>
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[400px,repeat(auto-fill,minmax(440px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Stock Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Stock Qty:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Is VAT:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Selling Rate:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>                
            </fieldset>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Stock Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset> */}

            

            <div className='flex items-center justify-end gap-5 pb-6'>                
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Add' onClick={handleAdd}/>
                <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={resetForm}/>
            </div>

            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full rounded-lg shadow border border-[#e0e2e7]'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Item Description</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Unit Id</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">MRP</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Selling Price</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Discount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Discount Type</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Expire Date</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{product.description}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.unitId}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.mrp}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.sPrice}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.discount}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{product.discountType}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">Rs.{formatISOString(product.expireDate)}</td>
                            <td className="border-b border-[#f0f1f3]">
                                <div className='flex gap-2 justify-center'>
                                    <MdOutlineRemoveRedEye className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <GoPencil className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                    <RiDeleteBin6Line className='w-5 h-5 text-[#667085] hover:cursor-pointer'/>
                                </div>                                
                            </td>
                        </tr>
                        ))}                
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    )
}

export default AddLossDamage