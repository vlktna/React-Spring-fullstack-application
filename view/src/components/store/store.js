import {configureStore} from '@reduxjs/toolkit'
import {pointsReducer} from "./pointsReducer";
export default configureStore({
    reducer: {
        history: pointsReducer,
    }
})