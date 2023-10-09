import {  configureStore } from '@reduxjs/toolkit'
import Slice from "./Slice.jsx";

const Store = configureStore({
  reducer:{task:Slice}
});

export default Store;