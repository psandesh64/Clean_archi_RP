import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';

const AddPurchaseOrder = () => {
    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Purchase Order</div>
            </div>

            <div className='flex flex-wrap justify-between gap-6'>
            <fieldset className="flex-1 my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[repeat(auto-fill,minmax(580px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(580px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Bill Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Bill Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[414px] w-full' placeHolder='6/25/2024' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Order No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[414px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Branch:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[414px] w-full' placeHolder='MMN Warehouse' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
            </fieldset>

            <fieldset className="flex-1 h-max my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Item Listing Option
                </legend>
                <div className="flex items-center gap-x-6 h-12">
                    <div className="inline-flex gap-3">
                        <input id='supplier' 
                        type="radio"
                        name="item-list"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Supplier Wise</div>
                    </div>

                    <div className="inline-flex gap-3">
                        <input id='productGroup' 
                        type="radio"
                        name="item-list"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Product Group Wise</div>
                    </div>
                </div>
                <InputBox className='max-w-[443px] w-full' placeHolder='All' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[90px] text-black text-sm font-normal font-plus_jakarta">
                    Stock Qty:
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <InputBox className='max-w-[245px] w-full' placeHolder='All' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                        <CustomButton className='w-[91px] bg-erp text-white flex items-center justify-center h-[50px]' label='Search' onClick={()=>console.log('clicked')}/>
                    </div>
                </div>
                
            </fieldset>
            </div>
            
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[460px,repeat(auto-fill,minmax(460px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(440px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Product/Supplier Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Product:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    P-Rate:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Qty:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Total Amount:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    MRP Rate:
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Order Qty:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[156px] text-black text-sm font-normal font-plus_jakarta">
                    Supplier Name:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[284px] w-full' placeHolder='All' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                
                <div className="inline-flex gap-3">
                    <input id='free-of-cost' 
                    type="checkbox"
                    name="free-of-cost"
                    className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                    <div className="text-black text-xs font-normal font-plus_jakarta">Free of Cost</div>
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
            </fieldset>
            <fieldset className="flex-1 h-max my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-x-[100px] gap-y-4
            lg:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(600px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Delivery Information
                </legend>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
                    Delivery Location:
                    </div>
                    <InputBox className='max-w-[492px] w-full' placeHolder='Credit' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
                    Contact Person (Name/Number):
                    </div>
                    <InputBox className='max-w-[492px] w-full' placeHolder='Auto Complete' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
                    Delivery Date:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                    </div>
                    <InputBox className='max-w-[492px] w-full' placeHolder='6/25/2024' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
                    Remarks:
                    </div>
                    <InputBox className='max-w-[492px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>
                <div className='flex flex-wrap items-center gap-y-4'>
                    <div className="min-w-[256px] text-black text-sm font-normal font-plus_jakarta">
                    Other Discount:
                    </div>
                    <InputBox className='max-w-[492px] w-full' placeHolder='' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                </div>             
                
            </fieldset>           

            <div className='flex items-center justify-end gap-5 pb-6'>
                
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Add' onClick={()=>console.log('add')}/>
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Save' onClick={()=>console.log('add')}/>
                <CustomButton className='px-5 min-w-[91px] bg-erp cursor-pointer text-white' label='Add Additional Info' onClick={()=>console.log('add')}/>
                <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('cancel')}/>

            </div>
            
        </div>
        </>
      )
}

export default AddPurchaseOrder