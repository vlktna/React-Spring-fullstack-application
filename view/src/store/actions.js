import {CREATE_POINT} from "./types";

export function createPoint(point){
    return {
        type: CREATE_POINT,
        payload: point
    }
}