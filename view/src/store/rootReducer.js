import {combineReducers} from "redux";
import {pointsReducer} from "./pointsReducer";

export const rootReducer = combineReducers({
    points: pointsReducer
})