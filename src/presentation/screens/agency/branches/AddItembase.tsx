import { GoPencil } from 'react-icons/go';
// import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';

const datas = [
    { description: 'Wai Wai', quantity: '12', unit: 'noodle', rate: '20',amt:'240',dis:'10%',vat:'5%',net:'225' },
];

const AddItembase = () => {
    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Debit Note</div>
            </div>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[400px,repeat(auto-fill,minmax(440px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Bill Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Voucher No(DN).:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill No:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Branch:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' placeHolder='MMN-WareHouse' InputChangeEvent={(e)=>console.log(e.target.value)}/>
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
                    Qty:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
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
                    Int-company Sale:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Whole Sale:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='max-lg:hidden'></div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Discount Mode:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
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
                    Selling Rate:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Supplier Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Supplier:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks:
                    </div>
                    <InputBox className='max-w-[284px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset>

            <div className='flex items-center justify-end gap-5 pb-6'>
                
                <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('cancel')}/>
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Add' onClick={()=>console.log('add')}/>

            </div>
            {/* -----------------------table---------------- */}
            <div className='overflow-x-auto max-w-full rounded-lg shadow border border-[#e0e2e7]'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-[22px] py-[18px] h-[56px] bg-[#f9f9fc]'>
                            <th className="text-[#333843] text-sm font-medium font-inter">Item Description</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Quantity</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Unit</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Rate</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Amount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Discount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">VAT</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Net Amount</th>
                            <th className="text-[#333843] text-sm font-medium font-inter">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data,index)=>(
                        <tr key={index} className='px-[22px] py-[18px] h-[80px]'>
                            <td className="px-[22px] text-[#333843] text-sm font-semibold font-inter text-center border-b border-[#f0f1f3]">{data.description}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.quantity}</td>
                            <td className="px-[22px] text-[#667085] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.unit}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.rate}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.amt}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.dis}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">{data.vat}</td>
                            <td className="px-[22px] text-[#333843] text-sm font-medium font-inter text-center border-b border-[#f0f1f3]">Rs.{data.net}</td>
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

export default AddItembase