import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider';
import { toast } from 'react-toastify';
import { PartyAccount } from '../../../../domain/entities/Account';
import { AccountRepositoryContext } from '../../../../application/context/AccountRepositoryProvider';
import SelectBoxId from '../../../components/SelectBoxId';

const AddSales = () => {
    const navigate = useNavigate()
    const [partyId, setPartyId] = useState<number>(0);
    const [voucherNo, setVoucherNo] = useState<string>('');
    const [invoiceNo, setInvoiceNo] = useState<string>('');
    const [remarks, setRemarks] = useState<string>('');
    const [taxableAmount, setTaxableAmount] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [paymentId, setPaymentId] = useState<number>(0);

    const agencyRepo = useContext(AgencyRepositoryContext)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createSales({
                partyId: partyId,
                voucherNo: voucherNo,
                invoiceNo: invoiceNo,
                remarks: remarks,
                taxableAmount: taxableAmount,
                tax: tax,
                discount: discount,
                paymentId: paymentId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            })
            if (resp.sales) {
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
                navigate('/agency/sales')
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

    //fetching Account
    const [accounts,setAccounts] = useState<PartyAccount[]>([])
    const accountRepo = useContext(AccountRepositoryContext)
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const resp = await accountRepo.getManyPartyAccount();
  
                setAccounts(resp.accounts)
              } catch (error) {
                console.error("Error fetching data:", error); 
              }
        }
        fetchData()
    },[])

    const resetForm = () => {
        setPartyId(0)
        setVoucherNo('')
        setInvoiceNo('')
        setRemarks('')
        setTaxableAmount(0)
        setTax(0)
        setDiscount(0)
        setPaymentId(0)
    };

    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Sales</div>
            </div>

            
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Sales Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Party Id:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <SelectBoxId className="max-w-[284px] w-full" placeholder={'Select'} id="partyACId" SelectChangeEvent={(e)=>setPartyId(Number(e.target.value))} options={accounts}/>
                </div>

                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Voucher No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setVoucherNo(e.target.value)} value={voucherNo}/>
                </div>

                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Invoice No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setInvoiceNo(e.target.value)} value={invoiceNo}/>
                </div>

                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setRemarks(e.target.value)} value={remarks}/>
                </div>

                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Taxable Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' type='number' InputChangeEvent={(e)=>setTaxableAmount(Number(e.target.value))} value={taxableAmount}/>
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

export default AddSales