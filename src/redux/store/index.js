import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouritesReducer";
import jobsReducers from "../reducers/jobsReducers";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
