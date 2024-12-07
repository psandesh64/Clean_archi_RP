import { useContext, useEffect, useState } from "react"
import InputBox from "../../../components/InputBox"
import MeasurementUP from "./addProuctListTabs/MeasurementUP"
import CustomButton from "../../../components/CustomButton"
import { ProductCategory, ProductGroup, ProductUnit } from "../../../../domain/entities/Product"
import { ProductRepositoryContext } from "../../../../application/context/ProductRepositoryProvider"
import SelectBoxId from "../../../components/SelectBoxId"
import SelectBox from "../../../components/SelectBox"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const AddProductList = () => {
    const [selectedTab, setSelectedTab] = useState('measurement')

    const [name,setName] = useState('')
    const [barcode,setBarcode] = useState('')
    const [isExpiredDate,setIsExpiredDate] = useState<boolean>(false)
    const [description,setDescription] = useState('')
    const [productGroupId,setProductGroupId] = useState<number>(0)
    const [productCategoryId,setProductCategoryId] = useState<number>(0)
    const [supplierId,setSupplierId] = useState<number|undefined>()
    const [discountable,setDiscountable] = useState<boolean>(false)
    const [discount,setDiscount] = useState('')
    const [discountType,setDiscountType] = useState('')
    const [serialed,setSerialed] = useState('')
    const [isActive,setIsActive] = useState<boolean>(false)
    const [mrp,setMrp] = useState<number|undefined>()
    const [sPrice,setSPrice] = useState<number|undefined>()
    const [unitId,setUnitId] = useState<number|undefined>()

    const productRepository = useContext(ProductRepositoryContext);
    const navigate = useNavigate()

    const handleAdd = async () => {
   
        try {
            const response = await productRepository.createProduct({
                name: name,
                barcode: barcode,
                isExpiredDate: isExpiredDate,
                expireDate: '2025-11-25T15:17:38.570Z',
                description: description,
                productGroupId: productGroupId,
                productCategoryId: productCategoryId,
                supplierId: supplierId,
                discountable: discountable,
                discount: discount,
                discountType: discountType,
                serialed: serialed,
                isActive: isActive,
                mrp: mrp,
                sPrice: sPrice,
                unitId: unitId
            });
            if (response.product) {
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
                // console.log(
                //     name,
                //     barcode,
                //     isExpiredDate,
                //     description,
                //     productGroupId,
                //     productCategoryId,
                //     supplierId,
                //     discountable,
                //     discount,
                //     discountType,
                //     serialed,
                //     isActive,
                //     mrp,
                //     sPrice,
                //     unitId
                // )
                setName('')
                setBarcode('')
                setIsExpiredDate(false)
                setDescription('')
                setSupplierId(undefined)
                setDiscountable(false)
                setDiscount('')
                setDiscountType('')
                setSerialed('')
                setIsActive(false)
                setMrp(undefined)
                setSPrice(undefined)
                setUnitId(undefined)
                navigate('/application/product-profile')
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
    // Gettig Products
    const [groups,setGroups] = useState<ProductGroup[]>([])
    const [units,setUnits] = useState<ProductUnit[]>([])
    const [categories,setCategories] = useState<ProductCategory[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await productRepository.getManyGroups();
              const resp1 = await productRepository.getManyUnit(); 
              const resp2 = await productRepository.getManyCategories(); 
              setGroups(resp.productGroups);
              setUnits(resp1.productUnits);
              setCategories(resp2.productCategories)
              
            } catch (error) {
              console.error("Error fetching data:", error); // Handle errors, if any
            }
          };
      
          fetchData();
    },[handleAdd])

    
    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Add Product List</div>
            </div>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Product Setup
                </legend>
                <div className="flex flex-wrap items-center w-full gap-2.5">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Barcode:</p>
                    <InputBox className="w-full max-w-[459px]" InputChangeEvent={(e)=>setBarcode(e.target.value)} value={barcode}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6 gap-y-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Product Name:</p>
                    <InputBox className="w-full max-w-[459px]" InputChangeEvent={(e)=>setName(e.target.value)} value={name}/>
                    <div className="flex gap-x-6">
                        <div className="inline-flex gap-3">
                            <input id='expiry-date' 
                            type="checkbox"
                            name="expiry-date"
                            className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'
                            onChange={(e)=>setIsExpiredDate(e.target.checked)}
                            checked={isExpiredDate}/>
                            <div className="text-black text-xs font-normal font-plus_jakarta">Expiry Date Required</div>
                        </div>

                        <div className="inline-flex gap-3">
                            <input id='is-unknown' 
                            type="checkbox"
                            name="is-unknown"
                            className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                            <div className="text-black text-xs font-normal font-plus_jakarta">Is Unknown Item</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Product Description:</p>
                    <InputBox className="w-full max-w-[459px]" InputChangeEvent={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Product Group:</p>
                    <SelectBoxId className="w-full max-w-[459px]" placeholder={'Select*'} id="pGroup" SelectChangeEvent={(e)=>setProductGroupId(Number(e.target.value))} options={groups}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Product Unit:</p>
                    <SelectBoxId className="w-full max-w-[459px]" placeholder={'Select*'} id="pType" SelectChangeEvent={(e)=>setUnitId(Number(e.target.value))} options={units}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Product Category:</p>
                    <SelectBoxId className="w-full max-w-[459px]" placeholder={'Select*'} id="pType" SelectChangeEvent={(e)=>setProductCategoryId(Number(e.target.value))} options={categories}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Supplier Id:</p>
                    <InputBox placeHolder="All" className="w-full max-w-[459px]" InputChangeEvent={(e)=>setSupplierId(Number(e.target.value))} value={!supplierId?'':supplierId} required/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6 gap-y-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Discount Mode:</p>
                    <InputBox placeHolder='Discountable' className="w-full max-w-[459px]" InputChangeEvent={(e)=>{if(e.target.value) {setDiscountable(true)} else {setDiscountable(false)};setDiscount(e.target.value)}} value={discount} required/>
                    <div className="flex items-center gap-x-6">
                        <InputBox className='w-[150px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                        <div className="inline-flex gap-3">
                            <input id='percent' 
                            type="radio"
                            name="valuetype"
                            value="%"
                            onChange={(e)=>setDiscountType(e.target.value)}
                            className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                            <div className="text-black text-xs font-normal font-plus_jakarta">%</div>
                        </div>

                        <div className="inline-flex gap-3">
                            <input id='rs' 
                            type="radio"
                            name="valuetype"
                            value="Rs"
                            onChange={(e)=>setDiscountType(e.target.value)}
                            className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                            <div className="text-black text-xs font-normal font-plus_jakarta">Rs.</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Serialed:</p>
                    <InputBox placeHolder="No" className="w-full max-w-[459px]" InputChangeEvent={(e)=>setSerialed(e.target.value)} value={serialed}/>
                </div>
                <div className="flex flex-wrap items-center w-full gap-2.5 mt-6 gap-y-6">
                    <p className="min-w-[200px] text-black text-sm font-normal font-plus_jakarta">Is Active:</p>
                    <SelectBox className="w-full max-w-[459px]" placeholder={'Select'} id="isActive" SelectChangeEvent={(e)=>{e.target.value === 'True' ? setIsActive(true) : setIsActive(false)}} options={['True','False']}/>
                    
                    <div className="inline-flex gap-3">
                        <input id='s_discontinued' 
                        type="checkbox"
                        name="is_discontinued"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Set as Discontinued Item</div>
                    </div>
                        
                </div>

            </fieldset>

            <div className='flex px-2 gap-x-6 justify-around bg-[#D3EDD4]/50 overflow-x-auto no-scrollbar'>

                <p onClick={()=>setSelectedTab('measurement')} 
                    className={`text-nowrap py-6 ${selectedTab === 'measurement' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm text-center font-bold font-plus_jakarta border-b-2`}>
                    Measurement Unit/Price
                </p>

                <p onClick={()=>setSelectedTab('inventory')} 
                    className={`text-nowrap py-6 ${selectedTab === 'inventory' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Inventory Control Setting
                </p>

                <p onClick={()=>setSelectedTab('item bar')} 
                    className={`text-nowrap py-6 ${selectedTab === 'item bar' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Item Bar Code List
                </p>

                <p onClick={()=>setSelectedTab('account mapping')} 
                    className={`text-nowrap py-6 ${selectedTab === 'account mapping' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Account Mapping
                </p>

                <p onClick={()=>setSelectedTab('batch list')} 
                    className={`text-nowrap py-6 ${selectedTab === 'batch list' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Batch List
                </p>
                
            </div>

            {selectedTab === 'measurement' && <MeasurementUP mrp={mrp} sPrice={sPrice} setMrp ={setMrp} setSPrice={setSPrice}/>}

            <div className='flex items-center justify-end gap-5 px-1 my-2'>
                
                <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>{
                   setName('')
                   setBarcode('')
                   setIsExpiredDate(false)
                   setDescription('')
                   setSupplierId(undefined)
                   setDiscountable(false)
                   setDiscount('')
                   setDiscountType('')
                   setSerialed('')
                   setIsActive(false)
                   setMrp(undefined)
                   setSPrice(undefined)
                   setUnitId(undefined)
                }}/>
                <CustomButton className='px-5 bg-[#1a7338] text-white' label='Submit' onClick={handleAdd}/>

            </div>

        </div>
        </>
    )
}

export default AddProductList
