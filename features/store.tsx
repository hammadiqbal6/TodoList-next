import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./TodoSlice";

export const store = configureStore({
  reducer,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const wrapper = createWrapper(store);
