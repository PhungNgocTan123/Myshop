import { createSlice } from '@reduxjs/toolkit';

const initialError = {
    msg: {},
    status: null,
    id: null
}

const errorList = createSlice({
    name: "errors",
    initialState: initialError,
    reducers: {
        getError: (state, action) => {
            // state.msg = action.payload.msg,
            // state.status = action.payload.status,
            // state.id = action.payload.id
            state = {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        }
    }
})

const { reducer, actions } = errorList;
export const { getError } = actions;
export default reducer;