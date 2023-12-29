import { createSlice } from '@reduxjs/toolkit'
import { ReduxSliceNames } from '@/utils/constants'

export const newOrderModalSlice = createSlice({
  name: ReduxSliceNames.newOrderModal,
  initialState: {
    isOpen: false
  },
  reducers: {
    onClose: (state) => {
      state.isOpen = false
    },
    onOpen: (state) => {
      state.isOpen = true
    }
  }
})

export const { onOpen, onClose } = newOrderModalSlice.actions
export default newOrderModalSlice.reducer
