import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/users.slice";
import roleSlice from "./slice/role.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
