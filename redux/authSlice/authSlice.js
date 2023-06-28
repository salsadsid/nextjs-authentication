const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    email:""
}
const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        loggedIn:(state,action)=>{
            state.email=action.payload
        }
    }
})

export const { loggedIn  } =  authSlice.actions

export default authSlice.reducer;