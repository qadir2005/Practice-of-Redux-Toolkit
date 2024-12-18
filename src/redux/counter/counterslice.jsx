import { createSlice } from '@reduxjs/toolkit'
// import  { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value>0){

        state.value -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiply :(state)=>{
        state.value *= 2
    }
  },
})

export const {multiply, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

