import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRepositoryProvider } from './application/context/UserRepositoryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthStore from './hooks/authStore';
import Cookies from 'js-cookie';

import Home from './presentation/screens/Home';
import Login from './presentation/screens/login/Login';
import { useEffect } from 'react';
import { ProductRepositoryProvider } from './application/context/ProductRepositoryProvider';
import { AccountRepositoryProvider } from './application/context/AccountRepositoryProvider';
import GroupLedRegModal from './presentation/components/modals/GroupLedRegModal';
import { AgencyRepositoryProvider } from './application/context/AgencyRepositoryProvider';

function App() {
  const accessToken = useAuthStore(state => state.accessToken);
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  
  useEffect(()=>{
    setAccessToken(Cookies.get('session_access_token'))
  },[accessToken])

  return (
    <>
    <AuthRepositoryProvider>
      <AccountRepositoryProvider>
        <ProductRepositoryProvider>
          <AgencyRepositoryProvider>
            <div className='max-w-[1500px] mx-auto'>

              <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path='/login' element={accessToken ? <Navigate replace to='/'/> :<Login/>}/>
                
              </Routes>

            </div>
          </AgencyRepositoryProvider>
        </ProductRepositoryProvider>
      </AccountRepositoryProvider>
    </AuthRepositoryProvider>
    <GroupLedRegModal/>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </>
  );
}

export default App;