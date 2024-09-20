import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface InitialState {
  signupData: any; // Consider defining a more specific type if possible
  loading: boolean;
  token: string | null; // Token can be null
}

// Set the initial state
const initialState: InitialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") as string) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData: (state, action: PayloadAction<any>) => {
      state.signupData = action.payload; // Type the payload if possible
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

// Export actions
export const { setSignupData, setLoading, setToken } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
