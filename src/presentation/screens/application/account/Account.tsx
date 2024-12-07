import { useState } from 'react'
import Ledger from './Ledger';
import Subledger from './Subledger';
import useGroupLedRegModal from '../../../../hooks/useGroupLedRegModal';
import CustomButton from '../../../components/CustomButton';

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('create ledger')
    const groupLedRegModal = useGroupLedRegModal()

    return(
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Account</div>
            </div>

            <div className='flex px-2 gap-x-6 justify-between bg-[#D3EDD4]/50 overflow-x-auto no-scrollbar'>
                <div className='px-4 flex gap-x-6 justify-start'>

                    <p onClick={()=>setSelectedTab('create ledger')} 
                        className={`text-nowrap py-6 ${selectedTab === 'create ledger' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm text-center font-bold font-plus_jakarta border-b-2`}>
                        Create Ledger
                    </p>

                    <p onClick={()=>setSelectedTab('create subledger')} 
                        className={`text-nowrap py-6 ${selectedTab === 'create subledger' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                        Create Subledger
                    </p>

                </div>

                <CustomButton className='self-center h-max flex items-center px-5 bg-[#1a7338] text-white' label='Group Ledger' onClick={()=>groupLedRegModal.open()}/>
              
            </div>

            {selectedTab === 'create ledger' && <Ledger/>}
            {selectedTab === 'create subledger' && <Subledger/>}

        </div>
        </>
    )  
}

export default Account