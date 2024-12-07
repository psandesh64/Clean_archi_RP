import { useState } from 'react'
import ProductList from './productProfile/ProductList';
import ProductCategory from './productProfile/ProductCategory';
import ProductGroup from './productProfile/ProductGroup';
import ProductType from './productProfile/ProductType';
import ProductUnit from './productProfile/ProductUnit';

const ProductProfile = () => {
    const [selectedTab, setSelectedTab] = useState('product list')

    return(
        <>
        <div className='w-full bg-white p-1'>

            <div className='flex flex-wrap gap-4 px-2 justify-between items-center h-[60px]'>
                <div className='font-plus_jakarta text-[#ce1b22] text-[26px] font-bold'>Product Profile</div>
            </div>

            <div className='flex px-2 gap-x-6 justify-around bg-[#D3EDD4]/50 overflow-x-auto no-scrollbar'>

                <p onClick={()=>setSelectedTab('product list')} 
                    className={`text-nowrap py-6 ${selectedTab === 'product list' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm text-center font-bold font-plus_jakarta border-b-2`}>
                    Product List
                </p>

                <p onClick={()=>setSelectedTab('product category')} 
                    className={`text-nowrap py-6 ${selectedTab === 'product category' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Product Category
                </p>

                <p onClick={()=>setSelectedTab('product group')} 
                    className={`text-nowrap py-6 ${selectedTab === 'product group' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Product Group
                </p>

                <p onClick={()=>setSelectedTab('product type')} 
                    className={`text-nowrap py-6 ${selectedTab === 'product type' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Product Type
                </p>

                <p onClick={()=>setSelectedTab('product unit')} 
                    className={`text-nowrap py-6 ${selectedTab === 'product unit' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Product Unit
                </p>

                {/* <p onClick={()=>setSelectedTab('barcode settings')} 
                    className={`text-nowrap py-6 ${selectedTab === 'barcode settings' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Barcode Settings
                </p>

                <p onClick={()=>setSelectedTab('pending product profile')} 
                    className={`text-nowrap py-6 ${selectedTab === 'pending product profile' ? 'border-erp text-erp' :'text-[#16151C]'} hover:cursor-pointer text-sm font-bold font-plus_jakarta border-b-2`}>
                    Pending Product Profile
                </p> */}
                
            </div>

            {selectedTab === 'product list' && <ProductList/>}
            {selectedTab === 'product category' && <ProductCategory/>}
            {selectedTab === 'product group' && <ProductGroup/>}
            {selectedTab === 'product type' && <ProductType/>}
            {selectedTab === 'product unit' && <ProductUnit/>}

        </div>
        </>
    )  
}

export default ProductProfile