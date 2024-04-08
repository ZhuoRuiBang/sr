import { createSlice } from "@reduxjs/toolkit";

const maskStore = createSlice({
  name: 'mask',
  initialState: {
    isShow: false,
    id: 0
  },
  reducers: {
    showMask(state, actions) {
      state.isShow = !state.isShow
      state.id = actions.payload || 0
    }
  }
})

export const { showMask } = maskStore.actions

export default maskStore.reducer