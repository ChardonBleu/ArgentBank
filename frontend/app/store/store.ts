import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../routes/profileSlice'

const STORAGE_KEY = 'redux-state';

export type RootState = {
  user: ReturnType<typeof userReducer>;
};

/**
 * Try to get state from session storage.
 * If user refresh page state isn't lost and persist
 * @return {state | undefined} state value
 */
const loadState = (): RootState | undefined => {
  try {
    const state = sessionStorage.getItem(STORAGE_KEY);
    return state ? JSON.parse(state) : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Try to save state to session storage.
 * If user refresh page state isn't lost and can persist
 * @param {state} state current state
 */
const saveState = (state: RootState) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Impossible de sauvegarder:', err);
  }
};

export const store =  configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
