import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';

const ItemBase = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Debit Note-Item Base</div>
            </div>

            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-y-4
            lg:grid-cols-[190px,repeat(auto-fill,minmax(405px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(405px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Debit Note-Item Base
                </legend>

                
                <div className="text-black text-sm font-normal font-plus_jakarta leading-[16.80px] min-w-[130px]">
                Ref Purchase Invoice No.:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                </div>
                <InputBox className='w-[405px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                <CustomButton className='bg-erp w-[91px] place-self-center text-white' label='Search' onClick={()=>navigate('../debit-note/add-item-base')}/>
                <div className='lg:min-w-[874px] p-2 items-center flex text-[#1a7338] text-sm font-normal font-plus_jakarta justify-center'>* Search Purchase Bill Here</div>
            </fieldset>
            
            <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid items-center gap-y-4
            lg:grid-cols-[190px,repeat(auto-fill,minmax(405px,1fr))]
            md:grid-cols-[repeat(auto-fill,minmax(405px,1fr))]
            ">
                <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                    Bill Info-Item Base
                </legend>

                
                <div className="text-black text-sm font-normal font-plus_jakarta leading-[16.80px] min-w-[130px]">
                Product:<span className="text-[#ff5960]/80 text-sm font-normal font-plus_jakarta">*</span>
                </div>
                <InputBox className='w-[405px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                <InputBox className='w-[405px]' InputChangeEvent={(e)=>console.log(e.target.value)}/>
                <div></div>
                <div></div>
                <CustomButton className='bg-erp w-[91px] place-self-center text-white' label='Search' onClick={()=>navigate('../debit-note/add-item-base')}/>
            </fieldset>
        </div>
        </>
    )
    
}

export default ItemBase