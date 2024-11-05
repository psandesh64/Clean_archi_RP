import { getUserId } from '../../../infrastructure/utils/AuthService';
import UserNav from './UserNav'


const Navbar = () => {
  const userId = getUserId()

  return (
    <nav className='w-full fixed top-0 left-0 py-6 border-b bg-white z-10'>
      <div className='max-w-[1500px] mx-auto px-6'>
        <div className='flex justify-between items-center'>
            <div>Djangobnb Logo</div>

            <div className='flex items-center space-x-6'>
                <UserNav
                  userId={userId}
                />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
