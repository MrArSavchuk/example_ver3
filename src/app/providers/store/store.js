import { combineReducers, configureStore } from "@reduxjs/toolkit";

// базовые редюсеры, позже нужно добавить [api.reducerPath]: api.reducer, .concat(api.middleware)
const appReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
  app: appReducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware(),
  
});