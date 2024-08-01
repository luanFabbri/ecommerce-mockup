import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import categoriesReducer from "./features/categoriesSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false, // Pode ser necessário se você usar dados não serializáveis
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
