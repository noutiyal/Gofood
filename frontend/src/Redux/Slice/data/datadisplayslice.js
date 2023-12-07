import { createSlice } from "@reduxjs/toolkit"
import { Cateorydata, fooddata } from "../../action/data/datadispaly"

const initialState = {
    isloading: false,
    displaydata: [],
    category: [],
    error: ""
}
const fooddataslice = createSlice({
    name: "fooddetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fooddata.pending, (state, action) => {
            state.isloading = true;
            state.error = null
        })
        builder.addCase(fooddata.fulfilled, (state, action) => {
            state.isloading = false;
            state.displaydata = action.payload;
            state.error = ""
        })
        builder.addCase(fooddata.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error
        })
        //Cateorydata
        builder.addCase(Cateorydata.pending, (state, action) => {
            state.isloading = true;
            state.error = null
        })
        builder.addCase(Cateorydata.fulfilled, (state, action) => {
            state.isloading = false;
            state.category = action.payload;
            state.error = ""
        })
        builder.addCase(Cateorydata.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error
        })
    }
})

export default fooddataslice.reducer