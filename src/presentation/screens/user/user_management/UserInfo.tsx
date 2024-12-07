import InputBox from "../../../components/InputBox"
import CustomButton from "../../../components/CustomButton"

const UserInfo = () => {
    return (
        <>
            <div className='w-full bg-white p-1'>

                <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>User Information</div>
                </div>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">Personal Information</legend>

                    <InputBox className='w-full'
                    placeHolder={'Title'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'First Name'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Middle Name'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Last Name'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Gender'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Is Active'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'User Type'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'User Module'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>
                    
                </fieldset>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">Credentials</legend>

                    <InputBox className='w-full'
                    placeHolder={'User Name'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Password'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Confirm Password'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'User Access'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Password Change Days'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'Pw Change Warning Days'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'Session Timeout (in sec)'} InputChangeEvent={(e)=>console.log(e.target.value)}/>
                    
                </fieldset>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">Contact Information</legend>

                    <InputBox className='w-full'
                    placeHolder={'City'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Mobile'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Phone Number'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'Address'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'Email'} InputChangeEvent={(e)=>console.log(e.target.value)} required/>

                </fieldset>
                
                
                
                <div className='flex items-center justify-end gap-5 px-1'>

                    <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('hello')}/>
                    <CustomButton className='px-5 bg-[#1a7338] text-white' label='Submit' onClick={()=>console.log('hello')}/>

                </div>

                </div>
        </>
      )
}

export default UserInfo
