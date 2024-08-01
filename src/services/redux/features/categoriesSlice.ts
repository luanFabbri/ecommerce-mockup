import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryInferface } from "../../APIs/api-config"; // Certifique-se de ter a interface Category

interface CategoriesState {
  categories: CategoryInferface[];
  status: "idle" | "loading" | "failed";
}

const initialState: CategoriesState = {
  categories: [],
  status: "idle",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("http://localhost:3000/categories");
    return (await response.json()) as CategoryInferface[];
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default categoriesSlice.reducer;
