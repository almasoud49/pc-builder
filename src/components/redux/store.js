import { configureStore } from '@reduxjs/toolkit'
import buildPcReducer from  "@/components/redux/buildPcSlice"

export const store = configureStore({
  reducer: {
    buildPc: buildPcReducer
  },
})