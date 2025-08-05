import { createSlice } from '@reduxjs/toolkit'

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
    userSignIn: state => {
        // Première requête pour obtenir le token à partir des données du formulaire

        // Deuxième requête pour récupérer les données du profil
        state.value.firstName = "Fabienne"
        state.value.lastName = "Rondi"
        // Stocker le token dans le local storage ?

        // Si authentification réussie:
        state.value.isLogged = true

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


export const { userSignIn , userUpdate, userSignOut } = userSlice.actions


export const userReducer = userSlice.reducer