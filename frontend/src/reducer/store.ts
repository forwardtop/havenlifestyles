import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice.ts';
import profileReducer from '../slices/profileSlice.ts';
import commonReducer from '../slices/commonSlice.ts';

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    common: commonReducer
  },
});

export default rootReducer;
