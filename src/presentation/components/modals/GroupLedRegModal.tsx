import useGroupLedRegModal from '../../../hooks/useGroupLedRegModal'
import CustomButton from '../CustomButton'
import { useNavigate } from 'react-router-dom'

import { useContext, useState } from 'react'
import Modal from './Modal'
import { AccountRepositoryContext } from '../../../application/context/AccountRepositoryProvider'
import { toast } from 'react-toastify'


const GroupLedRegModal = () => {
    const navigate = useNavigate()
    const groupLedRegModal = useGroupLedRegModal()
    const [name, setName] = useState('')
    const [type, setType] = useState('')

    const formData = {
        name: name,
        type: type,
    }
    const accountRepository = useContext(AccountRepositoryContext)

    const submitGroupLedger = async () => {
        try {
            const response = await accountRepository.createGroupLedger(formData);
            if (response.groupLedger) {
                toast.success('Group Ledger Added', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                groupLedRegModal.close()
                navigate('account');
            }

        } catch (error: any) {
           
            console.error("Error:", error);
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
    };

    const content = (
        <>
            <form onSubmit={submitGroupLedger} 
            className='space-y-4'>

                <input 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder='Group Name'
                className='w-full h-[54px] px-4 border border-gray-100 rounded-xl'/>
                <input 
                onChange={(e) => setType(e.target.value)}
                type='text' 
                placeholder='Group Type'
                className='w-full h-[54px] px-4 border border-gray-100 rounded-xl'/>

                <CustomButton className='px-5 bg-[#1a7338] text-white' label='Add' onClick={submitGroupLedger}/>
            </form>
        </>
    )

  return (
    <Modal
        isOpen={groupLedRegModal.isOpen}
        close={groupLedRegModal.close}
        label='Group Ledger'
        content={content}
    />
  )
}

export default GroupLedRegModal