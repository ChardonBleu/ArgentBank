import { configureStore } from '@reduxjs/toolkit'
import { signInReducer } from '../routes/signinSlice'

export const store =  configureStore({
  reducer: {
    signInFlag: signInReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store