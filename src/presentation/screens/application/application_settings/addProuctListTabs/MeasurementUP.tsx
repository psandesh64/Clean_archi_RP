type MeasurementUpProps = {
  mrp: number|undefined;
  sPrice: number|undefined;
  setMrp: (value: number) => void;
  setSPrice: (value: number) => void;

}
const MeasurementUP: React.FC<MeasurementUpProps> = ({ mrp, sPrice, setMrp, setSPrice }) => {
  return (
    <div className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded flex flex-wrap justify-between gap-y-6">
        <div className='w-[580px] space-y-7'>
            <div className='grid grid-cols-2 w-[370px] items-center' style={{gridTemplateColumns: '0.4fr 1fr'}}>
                <div className="text-black text-sm font-normal font-plus_jakarta leading-[16.80px] min-w-[130px]">Company MRP:</div>
                <input className="outline-none h-[49px] pl-2 relative rounded-[10px] border border-[#a2a1a8]/40 w-[235px]" value={!mrp?'':mrp} 
                onChange={e=>setMrp(Number(e.target.value))}/>
            </div>
            <div className='grid grid-cols-2 w-[370px] items-center' style={{gridTemplateColumns: '0.4fr 1fr'}}>
                <div className="text-black text-sm font-normal font-plus_jakarta leading-[16.80px] min-w-[130px]">Selling Price:</div>
                <input className="outline-none h-[49px] pl-2 relative rounded-[10px] border border-[#a2a1a8]/40 w-[235px]" value={!sPrice?'':sPrice} 
                onChange={e=>setSPrice(Number(e.target.value))}/>
            </div>
            <div className='w-full flex flex-wrap gap-x-4 gap-y-4'>
                <div className='grid grid-cols-2 w-[370px] items-center' style={{gridTemplateColumns: '0.4fr 1fr'}}>
                    <div className="text-black text-sm font-normal font-plus_jakarta leading-[16.80px] min-w-[130px]">Stock Unit:</div>
                    <input className="outline-none h-[49px] pl-2 relative rounded-[10px] border border-[#a2a1a8]/40 w-[235px]"
                    onChange={e=>console.log(Number(e.target.value))}/>
                </div>
                <button className='h-[50px] flex p-5 bg-[#1a7338] rounded-[10px] justify-center items-center
                text-white text-sm font-bold font-plus_jakarta leading-[16.80px]'>Alternate Unit Setting</button>
            </div>
        </div>
        <fieldset className="relative border border-[#92a5b5] p-8 rounded flex w-[392px]">                     
            <legend className="text-[#92a5b5] z-10 bg-white absolute left-6 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">Product Type</legend>
            <div className='flex flex-wrap w-full gap-y-5 min-w-[200px]'>
                <div className="flex gap-3 items-center w-[50%]">
                    <input id='taxable' 
                    type="radio"
                    name="product-type"
                    value="taxable"
                    className='outline-none w-4 h-4 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                    <div className="text-black text-xs font-normal font-plus_jakarta leading-[14.40px]">Taxable</div>
                </div>
                <div className="flex gap-3 items-center w-[50%]">
                    <input id='post-ti' 
                    type="radio"
                    name="product-type"
                    value="post-ti"
                    className='outline-none w-4 h-4 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                    <div className="text-black text-xs font-normal font-plus_jakarta leading-[14.40px]">Post TI</div>
                </div>
                <div className="flex gap-3 items-center w-[50%]">
                    <input id='non-taxable' 
                    type="radio"
                    name="product-type"
                    value="non-taxable"
                    className='outline-none w-4 h-4 bg-white rounded-md border-2 border-[#a2a1a8]/50'/>
                    <div className="text-black text-xs font-normal font-plus_jakarta leading-[14.40px]">Non-Taxable</div>
                </div>
            </div>
        </fieldset>
    </div>
  )
}

export default MeasurementUP
