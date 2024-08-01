// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
// Import your reducers here
import exampleReducer from "./features/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add more reducers here
});

export default rootReducer;
