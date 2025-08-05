import type { RootState } from "../store/store";

export const selectUserFullName = (state: RootState) => state.user.value.firstName + " " + state.user.value.lastName
