import {createSlice} from '@reduxjs/toolkit'

export const pointsReducer = createSlice({
    name: 'points',
    initialState: {
        pointsList: [],
    },
    reducers: {
        updatePointsList: (state, action) => {
            state.pointsList = action.payload
        },
        addPointToPointsList: (state, action) => {
            state.pointsList.push(action.payload)
        }
    }
});

export const {addPointToPointsList, updatePointsList} = pointsReducer.actions
export const selectHistory = state => state.points.pointsList

export default pointsReducer.reducer