import useLoginModal from '../../../hooks/useLoginModal'
import CustomButton from '../CustomButton'
import { useNavigate } from 'react-router-dom'

import { useContext, useState } from 'react'
import Modal from './Modal'
import { AuthRepositoryContext } from '../../../application/context/UserRepositoryProvider'
import { handleLogin } from '../../../infrastructure/utils/AuthService'

const LoginModal = () => {
    const navigate = useNavigate()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const formData = {
        userName: email,
        password: password,
        tenantId:1,
    }

    const authRepository = useContext(AuthRepositoryContext);


    const submitLogin = async () => {

        try {
            console.log(formData);
            const response = await authRepository.create(formData);
            if (response.token) {
                handleLogin(response.token);
                loginModal.close();
                navigate('/');
            }

        } catch (error: any) {
            // Check if the error is a 400 error with response data
            if (error.response?.status === 400) {
                // Set errors to display on the screen
                setErrors(error.response.data.non_field_errors || ["An error occurred"]);
            } else {
                console.error("Error logging in:", error);
                setErrors(["An unexpected error occurred"]);
            }
        }
    };

    const content = (
        <>
            <form onSubmit={submitLogin} 
            className='space-y-4'>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                type='email' 
                placeholder='Your email address'
                className='w-full h-[54px] px-4 border border-gray-100 rounded-xl'/>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                type='password' 
                placeholder='Your password'
                className='w-full h-[54px] px-4 border border-gray-100 rounded-xl'/>
                
                {errors && errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`}
                        className='p-5 bg-red-400 text-white rounded-xl opacity-80'>
                            {error}
                        </div>
                    )
                })}

                <CustomButton
                    label='Submit'
                    onClick={submitLogin}
                />
            </form>
        </>
    )
  return (
    <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label='Log in'
        content={content}
    />
  )
}

export default LoginModal