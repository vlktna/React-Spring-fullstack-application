import {CREATE_POINT} from "./types";

const initialState = {
    points: []
}

export const pointsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_POINT:
            return {...state, points: state.points.concat([action.payload])}
        default: return state
    }
}