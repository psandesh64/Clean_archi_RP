import { Routes, Route } from 'react-router-dom';
// import { PropertyRepositoryProvider } from './application/context/PropertyRepositoryProvider';
import { AuthRepositoryProvider } from './application/context/UserRepositoryProvider';

import Navbar from './presentation/components/navbar/Navbar';
import LoginModal from './presentation/components/modals/LoginModal';
import AttendancePage from './presentation/components/AttendancePage';
import { AttendanceRepositoryProvider } from './application/context/AttendanceRepositoryProvider';
// import PropertyList from './presentation/components/PropertyList';
// import MyPropertiesPage from './presentation/screens/MyPropertiesPage';

function App() {
  return (
    <>
    <AuthRepositoryProvider>
      <AttendanceRepositoryProvider>
        <div className='max-w-[1500px] mx-auto px-6'>
          <LoginModal/>
          <Navbar/>

          <Routes>
            {/* <Route path="/properties" element={<PropertyList />} /> */}
            {/* <Route path="/my-properties" element={<MyPropertiesPage/>}/> */}
            <Route path="/" element={<AttendancePage/>}/>
          </Routes>

        </div>
      </AttendanceRepositoryProvider>
      </AuthRepositoryProvider>
    </>
  );
}

export default App;