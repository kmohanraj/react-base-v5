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
    setUser: (
      state,
      action: PayloadAction<{ key: keyof UsersState; value: any }>
    ) => {
      (state as any)[action.payload.key] = action.payload.value;
    },
    clearUser: (state) => {
      state.user = defaultUser;
    },
  },
});

export const { setUser, clearUser } = usersSlice.actions;

export default usersSlice.reducer;
