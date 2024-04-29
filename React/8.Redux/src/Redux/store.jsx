import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

//store üzerinden statelere erişilecek. Bunun için main.jsx te app componenti provider ile sarmalandı.