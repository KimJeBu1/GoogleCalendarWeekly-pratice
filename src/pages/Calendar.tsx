import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { currentCalendar } from '../store/modules/calendar'
import { current } from '@reduxjs/toolkit'

export default function Calendar() {
  const { year, month, days } = useSelector(currentCalendar)
  const [isSideCalendar, setIsSideCalendar] = useState<boolean>(true)

  return (
    <>
      <Header
        year={year}
        month={month}
        isSideCalendar={isSideCalendar}
        setIsSideCalendar={setIsSideCalendar}
      />
    </>
  )
}
