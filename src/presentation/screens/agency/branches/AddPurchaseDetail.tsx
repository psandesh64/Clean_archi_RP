import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider';
import { toast } from 'react-toastify';
import SelectBoxId from '../../../components/SelectBoxId';
import { Purchase } from '../../../../domain/entities/Agency';
import { ProductRepositoryContext } from '../../../../application/context/ProductRepositoryProvider';
import { Product } from '../../../../domain/entities/Product';

const AddPurchaseDetail = () => {
    const navigate = useNavigate()

    const [purchaseId, setPurchaseId]=useState<number>(0)
    const [productId,setProductId]=useState<number>(0)
    const [quantity,setQuantity]=useState<number>(0)
    const [unitCost,setUnitCost]=useState<number>(0)
    const [discount,setDiscount]=useState<number>(0)
    const [remarks,setRemarks]=useState<string>('')
    const [hscode,setHscode]=useState<string>('')



    const agencyRepo = useContext(AgencyRepositoryContext)
    const productRepo = useContext(ProductRepositoryContext)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createPurchaseDetail({
                purchaseId: purchaseId,
                productID: productId,
                quantity: quantity,
                unitCost: unitCost,
                discount: discount,
                remarks: remarks,
                hscode: hscode,
            })
            if (resp.purchaseDetail) {
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
                navigate('/agency/purchase-detail')
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
        setPurchaseId(0)
        setProductId(0)
        setQuantity(0)
        setUnitCost(0)
        setDiscount(0)
        setRemarks('')
        setHscode('')
    };

    // fetching Purchase and Products
    const [purchases,setPurchases]=useState<Purchase[]>([])
    const [products,setProducts]=useState<Product[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await agencyRepo.getManyPurchase();
              const resp1 = await productRepo.getManyProduct();
                
              setPurchases(resp.purchases)
              setProducts(resp1.products)
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
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Purchase Detail</div>
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
                    Purchase Id:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>

                    <div className={`max-w-[284px] w-full relative rounded-[10px] border border-[#a2a1a8]/40 p-4`}>
                        <select id={'purchaseId'} onChange={(e)=>setPurchaseId(Number(e.target.value))} className='relative flex w-full outline-none cursor-pointer
                        text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
                        defaultValue=''>
                            <option value="" disabled>
                                Select
                            </option>
                            {purchases && purchases.map((option, index) => (
                                <option key={index} value={option.id}>
                                    {option.id}
                                </option>
                            ))}
                        </select>
                    </div>


                    {/* <SelectBoxId className="max-w-[284px] w-full" placeholder={'Select'} id="PurchaseId" SelectChangeEvent={(e)=>setPurchaseId(Number(e.target.value))} options={purchases}/> */}
                </div>
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
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setQuantity(Number(e.target.value))} value={quantity}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Unit Cost:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setUnitCost(Number(e.target.value))} value={unitCost}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Discount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setDiscount(Number(e.target.value))} value={discount}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setRemarks(e.target.value)} value={remarks}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Hs code:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setHscode(e.target.value)} value={hscode}/>
                </div>

                        
                
            </fieldset>
            
            <div className='flex items-center justify-end gap-5 pb-6'>
                
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Add' onClick={handleAdd}/>
                <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={resetForm}/>

            </div>
            
        </div>
        </>
      )
}

export default AddPurchaseDetail