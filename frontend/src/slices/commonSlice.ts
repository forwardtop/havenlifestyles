import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface InitialState {
  sidebarShow: boolean;
  searchShow: boolean;
}

// Set the initial state
const initialState: InitialState = {
  sidebarShow: false,
  searchShow: false
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSidebarShow: (state, action: PayloadAction<any>) => {
      state.sidebarShow = action.payload; // Type the payload if possible
    },
    setSearchShow: (state, action: PayloadAction<boolean>) => {
      state.searchShow = action.payload;
    },
  },
});

// Export actions
export const { setSidebarShow, setSearchShow } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
