import { createSlice } from "@reduxjs/toolkit";
import { emailexist, loginUser, signupapi } from "../action/loginAction";

const initialState = {
    isloading: false,
    userdata: [],
    useremail: [],
    userlogin: [],

    error: ""
}

const loginslice = createSlice({
    name: "Userdetails",
    initialState, // Corrected from 'initialstate' to 'initialState'
    reducers: {}, // You might want to add some reducers here
    extraReducers: (builder) => {
        builder.addCase(signupapi.pending, (state, action) => {
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(signupapi.fulfilled, (state, action) => {
            state.isloading = false;
            state.userdata = action.payload; // Removed the unnecessary comma
            state.error = "";
        });
        builder.addCase(signupapi.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message; // You might want to capture the error message
        });
        // existemail
        builder.addCase(emailexist.pending, (state, action) => {
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(emailexist.fulfilled, (state, action) => {
            state.isloading = false;
            state.useremail = action.payload; // Removed the unnecessary comma
            state.error = "";
        });
        builder.addCase(emailexist.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message; // You might want to capture the error message
        });
        //login user
        builder.addCase(loginUser.pending, (state, action) => {
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isloading = false;
            state.userlogin = action.payload; // Removed the unnecessary comma
            state.error = "";
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message; // You might want to capture the error message
        });
    }
});

export default loginslice.reducer;
