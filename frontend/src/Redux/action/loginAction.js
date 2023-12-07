import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { apiBasePath } from "../config/configer"
export const axiosInstance = axios.create({
    baseURL: apiBasePath,
    Headers: {
        "content-Type": "applaction/json"
    }
})


export const signupapi = createAsyncThunk("signup", async (payload) => {
    const data1 = await axiosInstance.post('CreateUser', payload)
    return data1.data
})

export const emailexist = createAsyncThunk("emailexist", async (payload) => {
    const data1 = await axiosInstance.post('findemail', payload)
    return data1.data
})
export const loginUser = createAsyncThunk("loginuser", async (payload) => {
    const data1 = await axiosInstance.post('loginUser', payload)
    return data1.data
})