import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MovieSlice";
import searchReducer from "./searchSlice";
import ConfigReducer from "./ConfigSlice";

const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    showSearch: searchReducer,
    config: ConfigReducer,
  },
});

export default AppStore;
