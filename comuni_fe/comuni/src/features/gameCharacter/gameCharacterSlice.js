import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createGameCharacter, getGameCharacter, updateGameCharacter } from '../../shared/api/gameCharacterService';

// Define async thunks for API calls
export const createCharacter = createAsyncThunk(
  'gameCharacter/createCharacter',
  async (characterData, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('No token found');
    }
    try {
      return await createGameCharacter(characterData, token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCharacter = createAsyncThunk(
  'gameCharacter/fetchCharacter',
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('No token found');
    }
    try {
      return await getGameCharacter(id, token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const modifyCharacter = createAsyncThunk(
  'gameCharacter/modifyCharacter',
  async ({ id, characterData }, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('No token found');
    }
    try {
      return await updateGameCharacter(id, characterData, token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const gameCharacterSlice = createSlice({
  name: 'gameCharacter',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCharacter.fulfilled, (state, action) => {
        state.characters.push(action.payload);
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.characters = state.characters.map((char) =>
          char.id === action.payload.id ? action.payload : char
        );
      })
      .addCase(modifyCharacter.fulfilled, (state, action) => {
        state.characters = state.characters.map((char) =>
          char.id === action.payload.id ? action.payload : char
        );
      })
      .addCase(createCharacter.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })
      .addCase(modifyCharacter.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export default gameCharacterSlice.reducer;