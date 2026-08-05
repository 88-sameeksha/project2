import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userslice";


const store=configureStore({
    reducer:{
        app:userReducer
    }
    
});
export default store;
