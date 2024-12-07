import { FaMinus, FaPlus } from 'react-icons/fa'

export interface PageData {
    page_number: number;
    page_size: number;
    page_count: number;
    total_items: number;
}

type PaginationSectionProps = {
    page : number
    setPage : React.Dispatch<React.SetStateAction<number>>
    pageSize : number
    setPageSize : React.Dispatch<React.SetStateAction<number>>
    pageData : PageData
}

const Pagination = ({ page, setPage,pageSize, setPageSize, pageData} : PaginationSectionProps) => {
    const visibleNumbers = []
    for (let i = Math.max(1, Math.min(page, pageData.page_count - 3)); i <= Math.min(page + 3, pageData.page_count); i++) {
        visibleNumbers.push(i);
    }

    const handlePageSize = async (event:React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(parseInt(event.target.value,10))
        setPage(1)
    }

    const handleIncrement = () => {
        const nextPage = page + 1 <= pageData.page_count ? page + 1 : page
        setPage(nextPage);
    }

    const handleDecrement = () => {
        const prevPage = page - 1 >= 1 ? page - 1 : 1
        setPage(prevPage);
    }

    return (
    <div className='w-full flex items-center justify-between px-6 py-4'>

        <div className="text-[#667085] text-sm font-medium font-inter">Showing 1-5 from 10</div>

        <div className='inline-flex gap-1'>

            <FaMinus onClick={handleDecrement} className="w-8 h-8 p-2 bg-[#defae0] rounded-lg  text-[#1a7338] hover:bg-[#a4c3a6] cursor-pointer"/>
            {visibleNumbers.map((number) => (
                <div key={number} onClick={() => setPage(number)} className={`flex items-center justify-center w-8 h-8 cursor-pointer ${page===number?'bg-[#a4c3a6]':'bg-[#defae0]'} text-[#1a7338] rounded-lg text-md font-bold font-inter`}>
                    {number}
                </div>
            ))}
            <FaPlus onClick={handleIncrement} className="w-8 h-8 p-2 bg-[#defae0] rounded-lg  text-[#1a7338] hover:bg-[#a4c3a6] cursor-pointer"/>

        </div>
        
    </div> 
)
}

export default Pagination
