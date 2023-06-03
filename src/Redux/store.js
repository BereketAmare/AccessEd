import themeReducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({reducer: themeReducer});

export default store;