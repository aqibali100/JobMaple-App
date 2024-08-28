import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserSlice';

export const store = configureStore({
    reducer: {
        users: UserReducer,
    },
});
