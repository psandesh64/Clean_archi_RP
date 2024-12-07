import { useContext, useEffect, useState } from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import { AccountRepositoryContext } from '../../../../application/context/AccountRepositoryProvider';
import { toast } from 'react-toastify';
import { Company, SubLedger } from '../../../../domain/entities/Account';
import SelectBoxId from '../../../components/SelectBoxId';
import { useNavigate } from 'react-router-dom';
import { ProductUnit } from '../../../../domain/entities/Product';
import { ProductRepositoryContext } from '../../../../application/context/ProductRepositoryProvider';

const PartyACRegistration = () => {
    const navigate = useNavigate()
    const [mapDropdown,setMapDropdown] = useState<boolean>(false)

    const [subLedgerId,setSubLedgerId] = useState<number | undefined>()
    const [accountNumber,setAccountNumber] = useState<string>('')
    const [name,setName] = useState<string>('')
    const [address,setAddress] = useState<string>('')
    const [contactInfo,setContactInfo] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [panNumber,setPanNumber] = useState<string>('')
    const [backupContact,setBackupContact] = useState<string>('')
    const [creditLimit,setCreditLimit] = useState<number | undefined>()
    const [creditDays,setCreditDays] = useState<string>('2024-11-26T11:17:43.672Z')
    const [companyInfoId,setCompanyInfoId] = useState<number | undefined>()
    const [isTaxable, setIsTaxable] = useState<boolean>(false)
    const [unitId,setUnitId] = useState<number | undefined>()

    const accountRepository = useContext(AccountRepositoryContext);
    const productRepository = useContext(ProductRepositoryContext);
    // Creating Company
    const handleAdd = async () => {
        try {
            const response = await accountRepository.createPartyAccount({
                subLedgerId: subLedgerId,
                accountNumber: accountNumber,
                name: name,
                address: address,
                contactInfo: contactInfo,
                email: email,
                panNumber: panNumber,
                backUpContact: backupContact,
                creditLimit: creditLimit,
                creditDays: creditDays,
                companyInfoId: companyInfoId,
                isTaxable: isTaxable,
                unitId: unitId
            });
            if (response.account) {
                toast.success('Account Ledger Added', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    setSubLedgerId(undefined)
                    setAccountNumber('')
                    setName('')
                    setAddress('')
                    setContactInfo('')
                    setEmail('')
                    setPanNumber('')
                    setBackupContact('')
                    setCreditLimit(undefined)
                    setCreditDays('')
                    setCompanyInfoId(undefined)
                    setIsTaxable(false)
                    setUnitId(undefined)
                    navigate('/application/party-AC-info')
            }

        } catch (error: any) {
    
            console.error("Error logging in:", error);
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
    }

    const [subLedgers,setSubLedgers] = useState<SubLedger[]>([])
    const [companys,setCompanys] = useState<Company[]>([])
    const [units,setUnits] = useState<ProductUnit[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const resp = await accountRepository.getManySubLedgers();
              const resp1 = await accountRepository.getManyCompany();
              const resp2 = await productRepository.getManyUnit();
              setSubLedgers(resp.subLedgers); 
              setCompanys(resp1.companyInfoList)
              setUnits(resp2.productUnits)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    },[])

    return (
        <>
            <div className='w-full bg-white p-1'>

                <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                    <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Party AC Registration</div>
                </div>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[190px,repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">Registration</legend>

                    <SelectBoxId className="w-full" placeholder={'Select Sub Ledger*'} id="subLedgerId" SelectChangeEvent={(e)=>setSubLedgerId(Number(e.target.value))} options={subLedgers}/>

                    <InputBox className='w-full'
                    placeHolder={'AccountNumber'} InputChangeEvent={(e)=>setAccountNumber(e.target.value)} required/>

                    <InputBox className='w-full'
                    placeHolder={'Name'} InputChangeEvent={(e)=>setName(e.target.value)} value={name} required/>

                    <InputBox className='w-full'
                    placeHolder={'Address'} InputChangeEvent={(e)=>setAddress(e.target.value)} value={address} required/>

                    <InputBox className='w-full'
                    placeHolder={'Contact Info'} InputChangeEvent={(e)=>setContactInfo(e.target.value)} value={contactInfo} required/>

                    <InputBox className='w-full'
                    placeHolder={'Email Address'} InputChangeEvent={(e)=>setEmail(e.target.value)} value={email} required/>

                    <InputBox className='w-full'
                    placeHolder={'PAN Number'} InputChangeEvent={(e)=>setPanNumber(e.target.value)} value={panNumber} required/>

                    <InputBox className='w-full'
                    placeHolder={'Backup Contact'} InputChangeEvent={(e)=>setBackupContact(e.target.value)} value={backupContact} required/>
                    
                    <InputBox className='w-full'
                    placeHolder={'Credit Limit'} InputChangeEvent={(e)=>setCreditLimit(Number(e.target.value))} value={creditLimit?creditLimit:''} required/>

                    <div className='relative w-full'>
                        <input 
                        type='text'
                        className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40
                                text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
                        onChange={(e)=>console.log(e.target.value)}
                        placeholder={`Credit Days *`}/>
                        <IoCalendarOutline className='h-6 w-6 text-[#16151C] absolute right-2 top-3'/>
                    </div>
                    <div className="inline-flex items-center gap-3">
                        <input id='isTaxable' 
                        type="checkbox"
                        name="isTaxable"
                        className='outline-none w-5 h-5 bg-white rounded-md border-2 border-[#a2a1a8]/50'
                        onChange={(e)=>setIsTaxable(e.target.checked)}
                        checked={isTaxable}/>
                        <div className="text-black text-xs font-normal font-plus_jakarta">Is Taxable</div>
                    </div>
                    <SelectBoxId className="w-full" placeholder={'Select'} id="unitId" SelectChangeEvent={(e)=>setUnitId(Number(e.target.value))} options={units}/>

                </fieldset>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                        Company Info
                    </legend>

                    <div className={`w-full relative rounded-[10px] border border-[#a2a1a8]/40 p-4`}>
                        <select id='companyId' onChange={(e)=>setCompanyInfoId(Number(e.target.value))} className='relative flex w-full outline-none cursor-pointer
                            text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'
                            defaultValue=''>
                            <option value="" disabled>
                                Select Company*
                            </option>
                            {companys && companys.map((company, index) => (
                            <option key={index} value={company.id}>
                                {company.companyName}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'>
                        {companyInfoId ? companys.map((company)=> company.id===companyInfoId ? company.companyName: ''):'Owner Name'}
                    </div>

                    <div className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'>
                        {companyInfoId ? companys.map((company)=> company.id===companyInfoId ? company.designation: ''):'Designation'}
                    </div>

                    <div className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'>
                        {companyInfoId ? companys.map((company)=> company.id===companyInfoId ? company.contactInfo: ''):'Contact Info'}
                    </div>

                    <div className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'>
                        {companyInfoId ? companys.map((company)=> company.id===companyInfoId ? company.contactPerson: ''):'Contact Person Name'}
                    </div>

                    <div className='flex w-full outline-none h-[49px] p-4 rounded-[10px] border border-[#a2a1a8]/40 text-[#4f4f4f]/80 text-sm font-normal font-plus_jakarta'>
                        {companyInfoId ? companys.map((company)=> company.id===companyInfoId ? company.contactInfoContactPerson: ''):'Contact Info Person Name'}
                    </div>
                    
                    {/* <InputBox className='w-full'
                    placeHolder={'Designation'} InputChangeEvent={(e)=>console.log(e.target.value)}/> */}

                </fieldset>

                <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]
                    lg:grid-cols-[repeat(auto-fill,minmax(268px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                    ">
                    <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                        Dealing Sales Executive Information
                    </legend>

                    <InputBox className='w-full'
                    placeHolder={'Name (Primary)'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full'
                    placeHolder={'Name (Secondary)'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                    <InputBox className='w-full min-w-[300px]'
                    placeHolder={'Notes'} InputChangeEvent={(e)=>console.log(e.target.value)}/>

                </fieldset>

                {!mapDropdown && (
                    <div className="justify-start items-center gap-3.5 inline-flex cursor-pointer" onClick={()=>setMapDropdown(true)}>
                        <div className="text-[#006296] text-sm font-normal font-plus_jakarta">Map into Existing Account</div>
                        <IoIosArrowDown className='text-[#006296] h-4 w-4'/>
                    </div>
                )}

                {mapDropdown && (
                    <>
                    <div className="justify-start items-center gap-3.5 inline-flex cursor-pointer" onClick={()=>setMapDropdown(false)}>
                        <div className="text-[#006296] text-sm font-normal font-plus_jakarta">Cancel Mapping</div>
                        <IoIosArrowUp className='text-[#006296] h-4 w-4'/>
                    </div>

                    <fieldset className="my-5 relative border border-[#e0e2e7] shadow p-10 rounded grid gap-x-[48px] gap-y-[40px]">

                        <legend className="text-[#92a5b5] z-10 bg-white absolute left-12 top-[-8px] px-1 text-sm font-semibold font-plus_jakarta leading-[16.80px]">
                            Transaction Account Details
                        </legend>
                        <InputBox className='w-full max-w-[464px]'
                        placeHolder={'Existing Party Account'} InputChangeEvent={(e)=>console.log(e.target.value)}/>
                    
                    </fieldset>
                    </>
                )}

                <div className='flex items-center justify-end gap-5 px-1'>
                
                    <CustomButton className='px-5 rounded-[10px] border border-[#a2a1a8]/40' label='Cancel' onClick={()=>console.log('hello')}/>
                    <CustomButton className='px-5 bg-[#1a7338] text-white' label='Submit' onClick={handleAdd}/>

                </div>

            </div>
        </>
    )
    
}

export default PartyACRegistration
