import Header from '../../partials/dashboard_components/Header'
import Inventory from '../../partials/dashboard_components/Inventory'
import Statistics from '../../partials/dashboard_components/Statistics'
import SalesOrder from '../../partials/dashboard_components/SalesOrder'
import MovingItems from '../../partials/dashboard_components/MovingItems'
import DailyOrder from '../../partials/dashboard_components/DailyOrder'

const Dashboard = () => {

  return (
    <>
    <div className='w-full'>
      <Header/>
      <Inventory/>
      <Statistics/>
      <div className='flex flex-wrap gap-4'>
          <div className='w-full md:max-w-[790px] mt-4 space-y-4 flex-1 mr-2'>
              <SalesOrder/>
              <MovingItems/>
          </div>
          <DailyOrder/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
