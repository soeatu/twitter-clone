import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userResucer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userResucer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
