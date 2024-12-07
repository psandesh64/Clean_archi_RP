import MenuDropdown from '../../components/MenuDropdown';

const User = () => {
  const userManagement = [
    { label: 'Admin User Setup', to: '/user/admin-user-setup' },
    { label: 'Role Setup', to: '/user/role-setup' },
  ];

  const administration = [
    { label: 'Agency Management', to: '' },
    { label: 'Edit Product Expirty Date', to: '' },
    { label: 'IRD Sync View', to: '' },
    { label: 'Party A/C Information', to: '' },
    { label: 'Product Profile', to: '' },
    { label: 'Scheme Mileage Setup', to: '' },
    { label: 'Scheme Setup', to: '' },
    { label: 'Static Data', to: '' },
  ];
  
  return (
    <>
    <div className='flex flex-col gap-12 w-[240px] mt-[56px] mx-auto h-[92vh] overflow-y-scroll no-scrollbar'>
      <MenuDropdown title="User Management" items={userManagement} />
      <MenuDropdown title="Administration" items={administration} />    
    </div>
    </>
  )
}

export default User
