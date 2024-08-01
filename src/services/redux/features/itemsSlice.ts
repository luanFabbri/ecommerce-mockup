import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ItemInferface } from "../../APIs/api-config"; // Certifique-se de ter a interface Item

interface ItemsState {
  items: ItemInferface[];
  status: "idle" | "loading" | "failed";
}

const initialState: ItemsState = {
  items: [],
  status: "idle",
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("http://localhost:3000/items");
  return (await response.json()) as ItemInferface[];
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default itemsSlice.reducer;
