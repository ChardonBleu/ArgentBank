import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"


interface UserProfile {
    email: string,
    firstName: string,
    lastName: string

}
export interface userState {
    value: {
        email: string,
        firstName: string,
        lastName: string,
        token:string,
        isLogged: boolean
    }
}

const initialStateEmpty: userState = {
    value: {
            email: "",
            firstName: "",
            lastName: "",
            token: "",
            isLogged: false
        }
    }

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateEmpty,
  reducers: {
    userSignIn: (state, action: PayloadAction<string>) => {
        state.value.token = action.payload
    },
    userGetProfile: (state, action: PayloadAction<UserProfile>)  => {
        state.value.email = action.payload.email
        state.value.firstName = action.payload.firstName
        state.value.lastName = action.payload.lastName
        state.value.isLogged = state.value.token ? true : false
    },
    userSignOut: state => {
        state.value = initialStateEmpty.value
        localStorage.removeItem("token")
    },
    userUpdate: state => {
        console.log(state.value)
        // Mettre à jour le local storage

    },
  }
})


export const { userSignIn, userGetProfile, userSignOut, userUpdate } = userSlice.actions


export const userReducer = userSlice.reducer