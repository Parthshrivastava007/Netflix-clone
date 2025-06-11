import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: false,
  reducers: {
    toogleSearchView: (state) => !state, 
  },
});

export const { toogleSearchView } = SearchSlice.actions;

export default SearchSlice.reducer;
