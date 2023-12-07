import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { apiBasePath } from "../../config/configer";
export const axiosInstance=axios.create({
    baseURL:apiBasePath,
    Headers:{
        "content-Type":"applaction/json"
    }
})

export const fooddata=createAsyncThunk("fooddata",async(payload)=>{
    const data1=await axiosInstance.post("diplayfood",payload)
    return data1.data
})

export const Cateorydata=createAsyncThunk("Cateorydata",async(payload)=>{
    const data1=await axiosInstance.post("categoryname",payload)
    return data1.data
})