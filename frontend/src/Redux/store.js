import { configureStore } from '@reduxjs/toolkit'
import loginsliceReducer from "./Slice/loginslice"
import fooddatasliceReducer from "./Slice/data/datadisplayslice"

export default configureStore({
    reducer: {
        signup: loginsliceReducer,
        fooddata: fooddatasliceReducer
    }
})