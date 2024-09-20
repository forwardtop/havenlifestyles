import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the user object (modify as needed)
interface User {
    name: string;
    email: string;
    // Add other user properties here
}

// Define the initial state type
interface ProfileState {
    user: User | null;
    loading: boolean;
}

// Initialize the state with a type
const initialState: ProfileState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Export actions and reducer
export const { setUser, setLoading } = profileSlice.actions;

export default profileSlice.reducer;
