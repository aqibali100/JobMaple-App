import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../api/ApiRoutes';

const initialState = {
  user: [],
  status: 'idle',
  error: null,
  successMessage: null,
};
//User Register Thunk
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await service.createUser(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//User login Thunk
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (userData, thunkAPI) => {
    try {
      const response = await service.loginUser(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//password reset email send Thunk
export const SendResetPasswordEmail = createAsyncThunk(
  'users/SendResetPasswordEmail',
  async (email, thunkAPI) => {
    try {
      const response = await service.sendResetPasswordEmail(email);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); 
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(SendResetPasswordEmail.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.error = null;
      })
      .addCase(SendResetPasswordEmail.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
