import { IoCalendarOutline } from 'react-icons/io5';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider';
import { toast } from 'react-toastify';
import ReactCalendar from '../../../components/calendar/ReactCalendar';

const AddPurchase = () => {
    const navigate = useNavigate()
    const agencyRepo = useContext(AgencyRepositoryContext)
    const [supplierId, setSupplierId]=useState<number>(0)
    const [date,setDate]=useState<string>("2024-11-29T12:24:29.473Z")
    const [billDate,setBillDate]=useState<string>("2024-11-29T12:24:29.473Z")
    const [voucherNo,setVoucherNo]=useState<string>('')
    const [billNo,setBillNo]=useState<string>('')
    const [remarks,setRemarks]=useState<string>('')
    const [taxamt,setTaxamt]=useState<number>(0)
    const [tax,setTax]=useState<number>(0)
    const [discount,setDiscount]=useState<number>(0)
    const [paymentId,setPaymentId]=useState<number>(0)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createPurchase({
                supplierId: supplierId,
                date: date,
                billDate: billDate, 
                voucherNo: voucherNo,
                billNo: billNo,
                remarks: remarks,
                taxableAmount: taxamt,
                tax: tax,
                discount: discount,
                paymentID: paymentId, 
                createdAt: new Date().toISOString(), 
                updatedAt: new Date().toISOString(), 
            })
            if (resp.purchase) {
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
                navigate('/agency/purchase')
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
        setSupplierId(0);
        setDate("2024-11-29T12:24:29.473Z");
        setBillDate("2024-11-29T12:24:29.473Z");
        setVoucherNo('');
        setBillNo('');
        setRemarks('');
        setTaxamt(0);
        setTax(0);
        setDiscount(0);
        setPaymentId(0);
    };
    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Purchase</div>
            </div>

            
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Purchase Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Supplier:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' type='number' InputChangeEvent={(e)=>setSupplierId(Number(e.target.value))} value={supplierId}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <div className='relative flex items-center z-50 px-4 max-w-[284px] h-[49px] w-full rounded-[10px] border border-[#a2a1a8]/40'>
                        <ReactCalendar className='text-black text-sm font-normal font-plus_jakarta' selectDate={(date)=>setDate(date)}/>
                        <IoCalendarOutline className='h-6 w-6 text-[#16151C] absolute right-2 top-3 hover:cursor-pointer'/>                        
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Voucher No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setVoucherNo(e.target.value)} value={voucherNo}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <div className='relative flex items-center z-50 px-4 max-w-[284px] h-[49px] w-full rounded-[10px] border border-[#a2a1a8]/40'>
                        <ReactCalendar className='text-black text-sm font-normal font-plus_jakarta' selectDate={(date)=>setBillDate(date)}/>
                        <IoCalendarOutline className='h-6 w-6 text-[#16151C] absolute right-2 top-3 hover:cursor-pointer'/>                        
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setBillNo(e.target.value)} value={billNo}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setRemarks(e.target.value)} value={remarks}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Taxable Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' type='number' InputChangeEvent={(e)=>setTaxamt(Number(e.target.value))} value={taxamt}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Tax:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' type='number' InputChangeEvent={(e)=>setTax(Number(e.target.value))} value={tax}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Discount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' type='number' InputChangeEvent={(e)=>setDiscount(Number(e.target.value))} value={discount}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Payment Id:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setPaymentId(Number(e.target.value))} value={paymentId}/>
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

export default AddPurchase