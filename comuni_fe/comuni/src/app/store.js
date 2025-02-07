import { configureStore } from '@reduxjs/toolkit';
import gameCharacterReducer from '../features/gameCharacter/gameCharacterSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gameCharacter: gameCharacterReducer,
  },
});

export default store;