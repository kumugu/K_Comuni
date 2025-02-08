import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createGameCharacter } from '../../shared/api/gameCharacterService';

export const createGameCharacterAsync = createAsyncThunk(
  'gameCharacter/createGameCharacter',
  async (gameCharacter, { rejectWithValue }) => {
    try {
      const response = await createGameCharacter(gameCharacter);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  } 
);

const gameCharacterSlice = createSlice({
  name: "gameCharacter",
  initialState: {
    gameCharacter: {},
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGameCharacterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGameCharacterAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.gameCharacter = action.payload;
      })
      .addCase(createGameCharacterAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export default gameCharacterSlice.reducer;