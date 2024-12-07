import { Route, Routes, useNavigate } from "react-router-dom"
import Sidebar from "../partials/Sidebar"
import PartyACRegistration from "./application/application_settings/PartyACRegistration"
import PartyACInfo from "./application/application_settings/PartyACInfo"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdCloseCircle } from "react-icons/io"
import { useEffect, useState } from "react"
import Dashboard from "./dashboard/Dashboard"
import ProductProfile from "./application/application_settings/ProductProfile"
import AddProductList from "./application/application_settings/AddProductList"
import DebitNote from "./agency/branches/DebitNote"
import ItemBase from "./agency/branches/ItemBase"
import AddItembase from "./agency/branches/AddItembase"
import LossDamage from "./agency/branches/LossDamage"
import AddLossDamage from "./agency/branches/AddLossDamage"
import PurchaseInvoice from "./agency/branches/PurchaseInvoice"
import AddPurchaseInvoice from "./agency/branches/AddPurchaseInvoice"
import PurchaseOrder from "./agency/branches/PurchaseOrder"
import AddPurchaseOrder from "./agency/branches/AddPurchaseOrder"
import SalesInvoice from "./agency/branches/SalesInvoice"
import AddSalesInvoice from "./agency/branches/AddSalesInvoice"
import SalesReturn from "./agency/branches/SalesReturn"
import AddSalesReturn from "./agency/branches/AddSalesReturns"
import AdminUserSetup from "./user/user_management/AdminUserSetup"
import UserInfo from "./user/user_management/UserInfo"
import RoleSetup from "./user/user_management/RoleSetup"
import Account from "./application/account/Account"
import CompanyAccount from "./application/account/CompanyAccount"
import PurchasePage from "./agency/branches/Purchase"
import AddPurchase from "./agency/branches/AddPurchase"
import Cookies from "js-cookie"
import PurchaseDetailPage from "./agency/branches/PurchaseDetail"
import AddPurchaseDetail from "./agency/branches/AddPurchaseDetail"
import OrderPage from "./agency/branches/Orders"
import AddOrderPage from "./agency/branches/AddOrder"
import SalesPage from "./agency/branches/Sales"
import AddSales from "./agency/branches/AddSales"
import SalesDetailPage from "./agency/branches/SalesDetail"
import AddSalesDetail from "./agency/branches/AddSalesDetail"
import InventoryPage from "./application/account/Inventory"
import MasterPage from "./application/account/Master"

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const navigate = useNavigate()

  useEffect(()=>{
    const accessToken = Cookies.get('session_access_token')
    if(!accessToken){
      navigate('login')
    }
  },[])

  return (
    <>
    <section className="main flex h-screen relative">
        <GiHamburgerMenu className={`min-mobile:hidden ${isCollapsed?'mobile:hidden':'mobile:block'} absolute top-8 right-4 w-6 h-6 z-20`} onClick={toggleCollapse}/>
        <IoMdCloseCircle className={`${isCollapsed?'mobile:block':'mobile:hidden'} min-mobile:hidden absolute top-6 left-24 w-8 h-8 z-20 text-white cursor-pointer`}
        onClick={toggleCollapse}/>

        <div className={`w-[156px] h-full pl-4 pr-2 pt-4 pb-2 shrink-0 grow-0 ${isCollapsed?'mobile:block':'mobile:hidden'}`}>
            <Sidebar/>
        </div>

        <div className={`flex-1 h-full pt-4 pb-2 pl-2 overflow-y-auto no-scrollbar ${isCollapsed?'mobile:hidden':'mobile:block'}`}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='application'>
                <Route path='party-AC-info' element={<PartyACInfo/>}/>
                <Route path='party-AC-info/party-AC-registration' element={<PartyACRegistration/>}/>
                <Route path='product-profile' element={<ProductProfile/>}/>
                <Route path='product-profile/add-product' element={<AddProductList/>}/>
              </Route>
              <Route path='account'>
                <Route path='' element={<Account/>}/>
                <Route path='company-account' element={<CompanyAccount/>}/>
                <Route path='inventories' element={<InventoryPage/>}/>
                <Route path='masters' element={<MasterPage/>}/>
              </Route>
              <Route path='agency'>
                <Route path='debit-note' element={<DebitNote/>}/>
                <Route path='debit-note/item-base' element={<ItemBase/>}/>
                <Route path='debit-note/add-item-base' element={<AddItembase/>}/>
                <Route path='loss-damage' element={<LossDamage/>}/>
                <Route path='loss-damage/add-loss-damage' element={<AddLossDamage/>}/>
                <Route path='purchase-invoice' element={<PurchaseInvoice/>}/>
                <Route path='purchase-invoice/add-purchase-invoice' element={<AddPurchaseInvoice/>}/>
                <Route path='purchase' element={<PurchasePage/>}/>
                <Route path='purchase/add-purchase' element={<AddPurchase/>}/>
                <Route path='purchase-detail' element={<PurchaseDetailPage/>}/>
                <Route path='purchase-detail/add-purchase-detail' element={<AddPurchaseDetail/>}/>
                <Route path='purchase-order' element={<PurchaseOrder/>}/>
                <Route path='order' element={<OrderPage/>}/>
                <Route path='order/add-order' element={<AddOrderPage/>}/>
                <Route path='purchase-order/add-purchase-order' element={<AddPurchaseOrder/>}/>
                <Route path='sales' element={<SalesPage/>}/>
                <Route path='sales/add-sales' element={<AddSales/>}/>
                <Route path='sales-details' element={<SalesDetailPage/>}/>
                <Route path='sales-details/add-sales-details' element={<AddSalesDetail/>}/>
                <Route path='sales-invoice' element={<SalesInvoice/>}/>
                <Route path='sales-invoice/add-sales-invoice' element={<AddSalesInvoice/>}/>
                <Route path='sales-return' element={<SalesReturn/>}/>
                <Route path='sales-return/add-sales-return' element={<AddSalesReturn/>}/>
              </Route>
              <Route path='user'>
                  <Route path='admin-user-setup' element={<AdminUserSetup/>}/>
                  <Route path='admin-user-setup/user-info' element={<UserInfo/>}/>
                  <Route path='role-setup' element={<RoleSetup/>}/>
              </Route>
            </Routes>
        </div>

    </section>
      
    </>
  )
}

export default Home
