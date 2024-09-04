import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../api/ApiRoutes';

const initialState = {
  user: [],
  status: 'idle',
  error: null,
  successMessage: '',
  message: '',
};
//User Register Thunk
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await service.createUser(userData);
      return response.data.userId;
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
export const sendResetPasswordEmail = createAsyncThunk(
  'users/sendResetPasswordEmail',
  async (email, { rejectWithValue }) => {
    try {
      const response = await service.sendResetPasswordEmail(email);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send reset password email';
      return rejectWithValue(message);
    }
  }
);
//reset password Thunk
export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await service.resetPassword(token, password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to reset password');
    }
  }
);
//update user role by userId
export const updateUserRole = createAsyncThunk(
  'user/updateUserRole',
  async ({ userId, role }, { rejectWithValue }) => {
    try {
      const response = await service.updateUserRole(userId, role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
//get user by id
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await service.getUserById(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.isLoading = true;
        state.successMessage = '';
        state.error = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = 'Reset password email sent successfully!';
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to send reset password email.';
      })
      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUserRole.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; 
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
