import { createSlice } from '@reduxjs/toolkit'

export interface signInState {
    value: boolean
}

const initialState: signInState = {
    value: false
}

export const signInSlice = createSlice({
  name: 'signInFlag',
  initialState,
  reducers: {
    signIn: state => {
        state.value = true
    },
    signOut: state => {
        state.value = false
    },

  }
})


export const { signIn, signOut } = signInSlice.actions


export const signInReducer = signInSlice.reducer