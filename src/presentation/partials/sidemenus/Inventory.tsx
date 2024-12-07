import MenuDropdown from '../../components/MenuDropdown';

const Inventory = () => {
  const inventorySystems = [
    { label: 'Debit Note', to: '' },
    { label: 'Loss and Damage', to: '' },
    { label: 'Purchase Invoice', to: '' },
    { label: 'Purchase Order', to: '' },
    { label: 'Sales Invoice', to: '' },
    { label: 'Sales Return', to: '' },
  ];

  const opening = [
    { label: 'Agency Management', to: '' },
    { label: 'Edit Product Expirty Date', to: '' },
    { label: 'IRD Sync View', to: '' },
    { label: 'Party A/C Information', to: '' },
    { label: 'Product Profile', to: '' },
    { label: 'Scheme Mileage Setup', to: '' },
    { label: 'Scheme Setup', to: '' },
    { label: 'Static Data', to: '' },
  ];
  const operation = [
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
    <MenuDropdown title="Inventory Systems" items={inventorySystems} />
    <MenuDropdown title="Opening" items={opening} />
    <MenuDropdown title="Operation" items={operation} />
    
    </div>
    </>
  )
}

export default Inventory
