import { IoIosArrowDown } from "react-icons/io";

const SalesOrder = () => {
  return (
    <>
    <div className="relative w-full bg-white rounded-xl shadow border border-[#ced4da] pb-4">

      <div className='flex justify-between px-7 my-6'>
        <div className="text-black text-lg font-semibold font-plus_jakarta leading-snug">Sales Order</div>
        <div className='inline-flex items-center gap-4'>
          <div className="text-[#1aa6f1] text-sm font-bold font-plus_jakarta leading-[16.80px]">Last 7 Days</div>
          <IoIosArrowDown className="w-4 h-4 text-[#1aa6f1]" />
        </div>
      </div>
      
      {/* -----------------------table---------------- */}
      <div className='overflow-x-auto max-w-full'>
      <table className='w-full'>
        <thead>
        <tr className='h-[38px] bg-[#f4f5fc] py-2'>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-[30px] py-2">Channel</th>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-2">Draft</th>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-2">Confirmed</th>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-2">Packed</th>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-2">Shipped</th>
          <th className="text-[#013958] text-sm font-bold font-plus_jakarta leading-[16.80px] text-left px-2">Invoiced</th>
        </tr>
        </thead>
        <tbody>
        <tr className='h-[37px] py-4'>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-[30px] py-4">Direct Sales</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">2</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">32</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">42</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">23</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">7</td>
        </tr>
        <tr className='h-[37px] py-4'>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-[30px] py-4">Wholesale</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">0</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">41</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">33</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">11</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">14</td>
        </tr>
        <tr className='h-[37px] py-4'>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-[30px] py-4">Retail</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">2</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">12</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">25</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">16</td>
          <td className="text-[#212529] text-sm font-semibold font-plus_jakarta leading-[16.80px] px-2">21</td>
        </tr>
        </tbody>
      </table>
      </div>

    </div>
    </>
  )
}

export default SalesOrder
