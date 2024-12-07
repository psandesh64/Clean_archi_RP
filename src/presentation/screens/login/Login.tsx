import login_cover from '../../assets/login_cover.png'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
    <div className='flex mobile:flex-col w-full h-full bg-white'>
        <div className='flex flex-col basis-2/3 bg-white mobile:order-2'>
            <div className="text-[#1a7338] text-3xl font-bold font-roboto m-[56px]">LOGO</div>
            <div className='mobile:ml-4 mx-auto mb-[100px]'>
                <LoginForm/>
            </div>
            
        </div>

        <div className='max-sm:hidden relative flex basis-1/3 bg-[#1A7338] mobile:order-1'>
            <div className="w-[41px] h-[39px] rounded-full border border-white blur-sm absolute top-8 left-16"/>
            <div className="w-[27px] h-[26px] rounded-full border border-white blur-sm absolute top-6 right-8" />
            <div className="w-[66px] h-[63px] rounded-full border border-white blur-sm absolute top-1/2 right-12" />
            <div className="w-3.5 h-[13px] rounded-full border border-white blur-sm absolute bottom-12 left-12" />
            <div className="w-[27px] h-[26px] rounded-full border border-white blur-sm absolute bottom-10 left-1/2" />
            <div className="w-[47px] h-[45px] rounded-full border border-white blur-sm absolute bottom-8 right-[18px]" />
            <img src={login_cover} alt="login cover" className="w-[680px] max-lg:w-[600px] max-md:w-full h-auto absolute right-[100px] sm:right-[50px] max-md:left-[0px]  top-1/2 transform -translate-y-1/2"/>
        </div>
    </div>
    </>
  )
}

export default Login