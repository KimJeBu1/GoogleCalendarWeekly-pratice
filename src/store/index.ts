import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './modules/calendar'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
