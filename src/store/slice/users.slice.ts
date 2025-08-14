import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  initialState,
  user as defaultUser,
} from "../initialStates/users.initial";

type UsersState = typeof initialState;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: <K extends keyof UsersState>(
      state: UsersState,
      action: PayloadAction<{ key: K; value: UsersState[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    clearUser: (state) => {
      state.user = defaultUser;
    },
  },
});

export const { setUser, clearUser } = usersSlice.actions;

export default usersSlice.reducer;
