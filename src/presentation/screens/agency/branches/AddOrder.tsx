import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AgencyRepositoryContext } from '../../../../application/context/AgencyRepositoryProvider';
import { toast } from 'react-toastify';
import ReactCalendar from '../../../components/calendar/ReactCalendar';
import { IoCalendarOutline } from 'react-icons/io5';

const AddOrderPage = () => {
    const navigate = useNavigate()

    const [customerID, setCustomerID] = useState<string>('94e83b1d-cc24-49b3-81f5-780c5ff67da9');
    const [orderDate, setOrderDate] = useState<string>('');
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [orderStatus, setOrderStatus] = useState<string>('');
    const [paymentStatus, setPaymentStatus] = useState<string>('');
    const currentDate = new Date();


    const agencyRepo = useContext(AgencyRepositoryContext)

    const handleAdd = async () => {
        try {
            const resp = await agencyRepo.createOrders({
                customerID: customerID,
                orderDate: orderDate,
                totalAmount: totalAmount,
                orderStatus: orderStatus,
                paymentStatus: paymentStatus,
                createdAt: currentDate.toISOString(),
                updatedAt: currentDate.toISOString(),
            })
            if (resp.order) {
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
                navigate('/agency/order')
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
        setCustomerID('');
        setOrderDate('');
        setTotalAmount(0);
        setOrderStatus('');
        setPaymentStatus('');
    };

    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Order</div>
            </div>

            
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Order Information
                </legend>

                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Customer ID:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setCustomerID(e.target.value)} value={customerID}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Order Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <div className='relative flex items-center z-50 px-4 max-w-[284px] h-[49px] w-full rounded-[10px] border border-[#a2a1a8]/40'>
                        <ReactCalendar className='text-black text-sm font-normal font-plus_jakarta' selectDate={(date)=>setOrderDate(date)}/>
                        <IoCalendarOutline className='h-6 w-6 text-[#16151C] absolute right-2 top-3 hover:cursor-pointer'/>                        
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Total Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setTotalAmount(Number(e.target.value))} value={totalAmount}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Order Status:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setOrderStatus(e.target.value)} value={orderStatus}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Payment Status:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>setPaymentStatus(e.target.value)} value={paymentStatus}/>
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

export default AddOrderPage