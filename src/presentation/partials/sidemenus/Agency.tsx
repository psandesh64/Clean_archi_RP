import MenuDropdown from '../../components/MenuDropdown';

const Agency = () => {
  const branches = [
    { label: 'Debit Note', to: '/agency/debit-note' },
    { label: 'Loss and Damage', to: '/agency/loss-damage' },
    { label: 'Purchase', to: '/agency/purchase' },
    { label: 'Purchase Detail', to: '/agency/purchase-detail' },
    { label: 'Purchase Invoice', to: '/agency/purchase-invoice' },
    { label: 'Purchase Order', to: '/agency/purchase-order' },
    { label: 'Order', to: '/agency/order' },
    { label: 'Sales', to: '/agency/sales' },
    { label: 'Sales Details', to: '/agency/sales-details' },
    { label: 'Sales Invoice', to: '/agency/sales-invoice' },
    { label: 'Sales Return', to: '/agency/sales-return' },
  ];

  const agency = [
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
    <MenuDropdown title="Branches" items={branches} />
    <MenuDropdown title="Agency" items={agency} />
    
    </div>
    </>
  )
}

export default Agency
