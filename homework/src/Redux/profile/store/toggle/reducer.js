import {TOGGLE_CHECKBOX} from "./actionTypes";

const initialState = {
    checkbox: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
        case TOGGLE_CHECKBOX: {
            return {
                checkbox: !state.checkbox
            }
        }
        default: {
            return state;
        }
    }
}