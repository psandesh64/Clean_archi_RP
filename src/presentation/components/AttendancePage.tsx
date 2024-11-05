import { useContext, useEffect, useState } from "react";
import { AttendanceRepositoryContext } from "../../application/context/AttendanceRepositoryProvider";

export type EmployeeAttendanceData = {    
    employee_id: number,
    checkin_time: string,
    checkout_time: string,
    work_hours: number,
    status: string
    employee: {
        image: string,
        position: string,
        department: string,
        email: string,
        phone: number,
        privilege: string,
        card_number: number,
        password: string,
        is_enabled: string,
        name: string
    }
}

const AttendancePage = () => {
    const attendanceRepository = useContext(AttendanceRepositoryContext);
    const [errors, setErrors] = useState<string[]>([])
    const [employees, setEmployees] = useState<EmployeeAttendanceData[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            if (!attendanceRepository) {
                console.error("AttendanceRepository is not provided.");
                return;
            }
    
            try {
                const response = await attendanceRepository.getMany();
                console.log(response); // Now logs the resolved data
                setEmployees(response.attendance_data)
            } catch (error: any) {
                if (error.response?.status === 400) {
                    setErrors(error.response.data.non_field_errors || ["An error occurred"]);
                } else {
                    console.error("Error fetching attendance:", error);
                    setErrors(["An unexpected error occurred"]);
                }
            }
        };
    
        fetchData();
    },[]  
    )
  return (
    <>
    {errors && errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`}
                        className='p-5 bg-red-400 text-white rounded-xl opacity-80'>
                            {error}
                        </div>
                    )
                })}
        <div className='max-xl:overflow-x-scroll mt-20'>
            {/* -------------------------------------table------------------------------- */}
            <div className='min-w-full w-full'>
                {/* ------------------------------------table Heading------------------------------ */}
                <div className='grid grid-cols-8 gap-2 px-4 py-4 border-b border-zinc-400/10' style={{ gridTemplateColumns: '1.5fr 0.6fr 0.6fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr' }}>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[150px]">Employee Id</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[100px]">Position</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[100px]">Privilage</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[100px]">Date</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[200px]">checkin_time</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[200px]">checkout_time</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[100px]">status</div>
                    <div className="text-zinc-400 text-[22px] font-light font-kantipur leading-normal min-w-[100px]">work_hours</div>
                </div>
                {/* ---------------------table content--------------------------------- */}
                <div className=''>
                    {employees.map((employee,index) => (
                    <div key={index} className='grid grid-cols-8 gap-2 px-4 border-b border-zinc-400/10 items-center' style={{ gridTemplateColumns: '1.5fr 0.6fr 0.6fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr' }}>
                        <div className='h-11 pr-2.5 py-1 justify-start items-center gap-2.5 inline-flex min-w-[150px]'>
                            <img className="w-9 h-9 rounded-full" src={employee.employee.image ? employee.employee.image : ''} alt='employeeImage' />
                            <div className="text-zinc-900 text-base font-light font-lexend leading-normal">{employee.employee.name}</div>
                        </div>

                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{employee.employee.position}</div>
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{employee.employee.privilege}</div>
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{(employee.checkin_time)}</div>
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{(employee.checkin_time)}</div>
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{(employee.checkout_time)}</div>
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">
                            <div className="w-[78px] h-6 px-2 py-[2px] bg-indigo-500/10 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-indigo-500 text-xs font-light font-['Lexend'] leading-[18px]">{employee.status}</div>
                            </div>
                        </div>                         
                        <div className="text-zinc-900 text-base font-light font-lexend leading-normal min-w-[100px]">{employee.work_hours}</div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default AttendancePage
