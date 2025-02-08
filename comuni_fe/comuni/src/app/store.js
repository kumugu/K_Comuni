import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import gameCharacterReducer from '../features/gameCharacter/gameCharacterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gameCharacter: gameCharacterReducer,
  },
});

export default store;