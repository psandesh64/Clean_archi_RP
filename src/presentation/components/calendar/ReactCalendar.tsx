import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


type ReactCalendarProps = {
  className?: string
  selectDate : (date:string)=>void
}

const ReactCalendar=({selectDate,className=''}:ReactCalendarProps)=> {

  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      selectDate(date.toISOString());
    }
  };

  return (
    <>
      <DatePicker
        className={`outline-none ${className}`}
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />   
    </>
  );
}

export default ReactCalendar