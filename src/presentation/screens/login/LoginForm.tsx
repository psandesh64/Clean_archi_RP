import { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AuthRepositoryContext } from "../../../application/context/UserRepositoryProvider";
import { handleLogin } from "../../../infrastructure/utils/AuthService";
import { toast } from 'react-toastify';
import useAuthStore from "../../../hooks/authStore";

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setAccessToken = useAuthStore(state => state.setAccessToken)

    const formData = {
        userName: email,
        password: password,
        tenantId: 1
    }
    const authRepository = useContext(AuthRepositoryContext);

    const submitLogin = async () => {
    
        try {
            const response = await authRepository.create(formData);
            if (response.token) {
                handleLogin(
                    // response.user.pk,
                    // response.data.refresh_token, 
                    response.token,);
                setAccessToken(response.token)
                // loginModal.close();
                toast.success('Login Successful!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/');
            }

        } catch (error: any) {
            // Check if the error is a 400 error with response data
            // if (error.response?.status === 400) {
            //     // Set errors to display on the screen
            //     setErrors(error.response.data.non_field_errors || ["An error occurred"]);
            // } else {
            //     console.error("Error logging in:", error);
            //     setErrors(["An unexpected error occurred"]);
            // }
            console.error("Error:", error);
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
    };
  return (
    <>
    <div className='mobile:w-[350px] space-y-[36px] w-[420px]'>
        <div className="flex-col gap-4 flex">
            <div className="text-[#1a7338] text-[32px] font-bold font-plus_jakarta leading-[38.40px]">Welcome</div>
            <div className="text-[#b3b3b3] text-base font-normal font-plus_jakarta leading-tight">Please fill up the details to login </div>
        </div>
        <div className='flex-col gap-[18px] flex'>
            <div className="text-[#1a7338] text-lg font-semibold font-plus_jakarta leading-snug">User name</div>
            <div className="flex items-center w-[413px] mobile:w-[350px] h-[70px] rounded-md border border-[#b1b1b1]">
                <input className="w-full h-[60px] pl-4 text-black text-base font-normal font-plus_jakarta leading-tight outline-none"
                placeholder='Enter your Username'
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='flex-col gap-[18px] flex'>
            <div className="text-[#1a7338] text-lg font-semibold font-plus_jakarta leading-snug">Password</div>
            <div className="flex items-center justify-between w-[413px] mobile:w-[350px] h-[70px] rounded-md border border-[#b1b1b1]">
                <input className="w-4/5 h-[60px] pl-4 text-black text-base font-normal font-plus_jakarta leading-tight outline-none"
                placeholder='Enter your Password'
                type='password'
                onChange={(e)=>setPassword(e.target.value)}/>
                <IoEyeOutline className="w-[28px] h-[20px] text-gray-400 mr-4" />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2.5'>
                    <input type='checkbox' className='h-4 w-4'/>
                    <div className="text-[#8e8e8e] text-sm font-normal font-plus_jakarta leading-[16.80px]">Remember me?</div>
                </div>
                <div className="text-[#8e8e8e] text-sm font-normal font-plus_jakarta leading-[16.80px]">Forgot Password?</div>
            </div>
        </div>
        <button className="w-full h-[70px] px-[175px] py-[19px] bg-[#1a7338] rounded-md shadow justify-center items-center gap-2 inline-flex
        text-white text-lg font-bold font-['Plus Jakarta Sans'] leading-snug"
        onClick={submitLogin}>
            Login
        </button>
    </div>
     
    </>
  )
}

export default LoginForm
