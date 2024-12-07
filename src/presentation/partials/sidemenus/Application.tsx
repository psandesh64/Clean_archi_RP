import MenuDropdown from '../../components/MenuDropdown';

const Application = () => {
  const applicationSettings = [
    { label: 'Agency Management', to: '' },
    { label: 'Edit Product Expirty Date', to: '' },
    { label: 'IRD Sync View', to: '' },
    { label: 'Party A/C Information', to: '/application/party-AC-info' },
    { label: 'Product Profile', to: '/application/product-profile' },
    { label: 'Scheme Mileage Setup', to: '' },
    { label: 'Scheme Setup', to: '' },
    { label: 'Static Data', to: '' },
  ];

  const applicationLogs = [
    { label: 'Agency Management', to: '' },
    { label: 'Edit Product Expirty Date', to: '' },
    { label: 'IRD Sync View', to: '' },
    { label: 'Party A/C Information', to: '' },
    { label: 'Product Profile', to: '' },
    { label: 'Scheme Mileage Setup', to: '' },
    { label: 'Scheme Setup', to: '' },
    { label: 'Static Data', to: '' },
  ];
  const dataSynchronization = [
    { label: 'Agency Management', to: '' },
    { label: 'Edit Product Expirty Date', to: '' },
    { label: 'IRD Sync View', to: '' },
    { label: 'Party A/C Information', to: '' },
    { label: 'Product Profile', to: '' },
    { label: 'Scheme Mileage Setup', to: '' },
    { label: 'Scheme Setup', to: '' },
    { label: 'Static Data', to: '' },
  ];
  const account = [
    { label: 'Account', to: '/account' },
    { label: 'Company Account', to: '/account/company-account' },
    { label: 'Inventory', to: '/account/inventories' },
    { label: 'Master', to: '/account/masters' },
  ];

  return (
    <>
    <div className='flex flex-col gap-12 w-[240px] mt-[56px] mx-auto h-[92vh] overflow-y-scroll no-scrollbar'>
    <MenuDropdown title="Application Settings" items={applicationSettings} />
    <MenuDropdown title="Application Logs" items={applicationLogs} />
    <MenuDropdown title="Data Synchronization" items={dataSynchronization} />
    <MenuDropdown title="Account" items={account} />
    
    </div>
    </>
  )
}

export default Application
