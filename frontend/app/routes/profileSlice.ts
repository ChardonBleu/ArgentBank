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

// Récupérer dans le local storage les valeurs du state si elles existent

const initialState: userState = {
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
  initialState,
  reducers: {
    userSignIn: (state, action: PayloadAction<string>) => {
        // Première requête pour obtenir le token à partir des données du formulaire
        state.value.token = action.payload

        // Stocker le token dans le local storage
        

        // Si authentification réussie:
        state.value.isLogged = state.value.token ? true : false

    },
    userGetProfile: (state, action: PayloadAction<UserProfile>)  => {
        state.value.email = action.payload.email
        state.value.firstName = action.payload.firstName
        state.value.lastName = action.payload.lastName
    },
    userSignOut: state => {
        state.value = initialState.value
        // Vider le local storage ?

    },
    userUpdate: state => {
        console.log(state.value)
        // Mettre à jour le local storage

    },
  }
})


export const { userSignIn, userGetProfile, userSignOut, userUpdate } = userSlice.actions


export const userReducer = userSlice.reducer