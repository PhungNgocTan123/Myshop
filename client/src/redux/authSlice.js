import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    isLoading: false,
    user: null
}

const authUser = createSlice({
    name: "auth",
    initialState: initialAuth,
    reducers: {
        userLoading: (state, action) => {
            state.isLoading = true
        },
        userLoaded: (state, action) => {
            // state.isAuthenicated = true,
            //     state.isLoading = false,
            //     state.user = action.payload
            const { user } = action.payload;
            state.isAuthenicated = true;
            state.isLoading = false;
            state.user = user;
        },
        registerSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            const { token, user } = action.payload;
            console.log(action.payload.token);
            state.token = token;
            state.user = user;
            state.isAuthenicated = true;
            state.isLoading = false;
        },
        // authError: 
        // loginFail,
        // logoutSuccess,
        // registerFail: (state, action) => {
        // state = {
        //     token: null,
        //     user: null,
        //     isAuthenicated: false,
        //     isLoading: false
        // }
        //     const { token, user, isAuthenicated, isLoading } = action.payload;
        //     state.token = token,
        //         state.user = user,
        //         state.isAuthenicated = isAuthenicated,
        //         state.isLoading = isLoading
        // }
    }
})

const { reducer, actions } = authUser;
export const { userLoading,
    userLoaded,
    registerSucccess,
    // loginSuccess,
    // registerSucccess,
    // authError,
    // loginFail,
    // logoutSuccess,
    // registerFail
} = actions;
export default reducer;