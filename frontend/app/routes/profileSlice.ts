import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer } from "@reduxjs/toolkit";

export interface userState {
  value: {
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    isLogged: boolean;
  };
}

const initialState: userState = {
  value: {
    email: "",
    firstName: "",
    lastName: "",
    token: "",
    isLogged: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userSignIn: (state, action: PayloadAction<string>) => {
      state.value.token = action.payload;
    },
    userGetProfile: (state, action) => {
      state.value.email = action.payload.email;
      state.value.firstName = action.payload.firstName;
      state.value.lastName = action.payload.lastName;
      state.value.isLogged = action.payload.email ? true : false;
    },
    userSignOut: (state) => {
      state.value = initialState.value;
    },
    userUpdate: (state, action) => {
      state.value.firstName = action.payload.firstName;
      state.value.lastName = action.payload.lastName;
    },
  },
});

export const { userSignIn, userGetProfile, userSignOut, userUpdate } =
  userSlice.actions;

export const userReducer = userSlice.reducer as Reducer<userState>;
