import appSlice from './appSlice'
import pageEditorSlice from './pageEditorSlice'
import { configureStore } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'


enableMapSet()
export const store = configureStore({
    reducer: {
        appSlice: appSlice,
        pageEditorSlice: pageEditorSlice,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
