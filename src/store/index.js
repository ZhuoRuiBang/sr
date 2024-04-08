import { configureStore } from "@reduxjs/toolkit";
import maskStore from "./modules/maskStore";

const store = configureStore({
  reducer: {
    mask: maskStore
  }
})

export default store