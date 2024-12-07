// import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import InputBox from "../../../components/InputBox";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Sales } from "../../../../domain/entities/Agency";
import { Product } from "../../../../domain/entities/Product";
import { AgencyRepositoryContext } from "../../../../application/context/AgencyRepositoryProvider";
import { ProductRepositoryContext } from "../../../../application/context/ProductRepositoryProvider";
import ReactCalendar from "../../../components/calendar/ReactCalendar";
import { IoCalendarOutline } from "react-icons/io5";
import SelectBoxId from "../../../components/SelectBoxId";

const AddSalesReturn = () => {
  const navigate = useNavigate()

    const [saleId, setSaleId]=useState<number>(0)
    const [productId,setProductId]=useState<number>(0)
    const [returnDate,setReturnDate]=useState<string>('')
    const [returnInvoiceNo,setReturnInvoiceNo]=useState<string>('')
    const [returnedQuantity,setReturnedQuantity]=useState<number>(0)
    const [returnReason,setReturnReason]=useState<string>('')
    const [taxableAmount,setTaxableAmount]=useState<number>(0)
    const [discount,setDiscount]=useState<number>(0)

    const agencyRepo = useContext(AgencyRepositoryContext)
    const productRepo = useContext(ProductRepositoryContext)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createSalesReturn({
              saleId:saleId,
              productId:productId,
              returnDate:returnDate,
              returnInvoiceNo:returnInvoiceNo,
              returnedQuantity:returnedQuantity,
              returnReason:returnReason,
              taxableAmount:taxableAmount,
              discount:discount,
            })
            if (resp.salesReturn) {
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
                navigate('/agency/sales-return')
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
      setSaleId(0)
      setProductId(0)
      setReturnDate('')
      setReturnedQuantity(0)
      setReturnReason('')
      setTaxableAmount(0)
      setDiscount(0)
    };

    // fetching Purchase and Products
    const [sales,setSales]=useState<Sales[]>([])
    const [products,setProducts]=useState<Product[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await agencyRepo.getManySales();
              const resp1 = await productRepo.getManyProduct();
                
              setSales(resp)
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
        <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales Return</div>
      </div>

      {/* <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
      lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
      md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
      ">
        <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
          Credit Note Information
        </legend>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Cr. Note No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>
          <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>
          <InputBox className='max-w-[284px] w-full' placeHolder="6/25/2024" InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
      </fieldset> */}

      {/* <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
      lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
      md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
      ">
          <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
              Product Detail
          </legend>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Product:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
              </div>
              <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Rate:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
              </div>
              <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Unit:
              </div>
              <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Batch No.:
              </div>
              <InputBox className='max-w-[284px] w-full' placeHolder="Select" InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Qty:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
              </div>
              <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
              </div>
              <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>                
          
          <div className='flex flex-wrap items-center gap-y-4'>
              <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
              Discount Mode:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
              </div>
              <InputBox className='max-w-[284px] w-full' placeHolder='Non Discountable' InputChangeEvent={(e)=>console.log(e.target.value)}/>
          </div>
          <div className="flex items-center gap-x-6">
              <InputBox className='w-[150px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
              <div className="inline-flex gap-3">
                  <input id='percent' 
                  type="radio"
                  name="valuetype"
                  className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                  <div className="text-black text-xs font-normal font-plus_jakarta">%</div>
              </div>

              <div className="inline-flex gap-3">
                  <input id='rs' 
                  type="radio"
                  name="valuetype"
                  className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                  <div className="text-black text-xs font-normal font-plus_jakarta">Rs.</div>
              </div>
          </div>
      </fieldset> */}

      {/* <fieldset className="flex-1 h-max my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
      lg:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
      md:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
      ">
        <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
            A/C Information
        </legend>
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
            Issue To:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <InputBox className='max-w-[492px] w-full' placeHolder='Credit' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
              Address:
            </div>
            <InputBox className='max-w-[492px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
            VAT No.:
          </div>
          <InputBox className='max-w-[492px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
            Invoice Type:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <InputBox className='max-w-[492px] w-full' placeHolder='Tax Invoice' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
            Remarks:
            </div>
            <InputBox className='max-w-[492px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
        </div>

        <CustomButton className='px-5 max-w-[91px] bg-erp cursor-pointer text-white' label='Add' onClick={()=>console.log('add')}/>
         
      </fieldset>            */}
      <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
      lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
      md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
      ">
        <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
            Order Information
        </legend>

        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Sales Id:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>

          <div className={`max-w-[284px] w-full relative rounded-[10px] border border-[#a2a1a8]/40 p-4`}>
            <select id={'purchaseId'} onChange={(e)=>setSaleId(Number(e.target.value))} className='relative flex w-full outline-none cursor-pointer
            text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
            defaultValue=''>
              <option value="" disabled>
                  Select
              </option>
              {sales && sales.map((option, index) => (
                  <option key={index} value={option.id}>
                      {option.id}
                  </option>
              ))}
            </select>
          </div>


        </div>

        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
            Product Id.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <SelectBoxId className="max-w-[284px] w-full" placeholder={'Select'} id="ProductId" SelectChangeEvent={(e)=>setProductId(Number(e.target.value))} options={products}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Return Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>
          <div className='relative flex items-center z-50 px-4 max-w-[284px] h-[49px] w-full rounded-[10px] border border-[#a2a1a8]/40'>
            <ReactCalendar className='text-black text-sm font-normal font-plus_jakarta' selectDate={(date)=>setReturnDate(date)}/>
            <IoCalendarOutline className='h-6 w-6 text-[#16151C] absolute right-2 top-3 hover:cursor-pointer'/>                        
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Return Invoice No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>
          <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setReturnInvoiceNo(e.target.value)} value={returnInvoiceNo}/>
        </div>      
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
            Returned Quantity:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setReturnedQuantity(Number(e.target.value))} value={returnedQuantity}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
          <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
          Return Reason:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
          </div>
          <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setReturnReason(e.target.value)} value={returnReason}/>
        </div>           
        
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
            Taxable Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setTaxableAmount(Number(e.target.value))} value={taxableAmount}/>
        </div>
        <div className='flex flex-wrap items-center gap-y-4'>
            <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
            Discount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
            </div>
            <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setDiscount(Number(e.target.value))} value={discount}/>
        </div>                                
          
      </fieldset>

      <div className='flex items-center justify-end gap-5 pb-6'>
          
        <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>resetForm()}/>
        <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Submit' onClick={()=>handleAdd()}/>

      </div>
    </div>
    </>
  )
}

export default AddSalesReturn
