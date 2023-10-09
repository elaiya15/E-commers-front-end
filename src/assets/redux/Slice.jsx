/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
const initialState={cardItems:[]}

const Slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addTask:(state,action)=>{
      // eslint-disable-next-line no-unused-vars
      // const id = state.taskList.length+1
const product=(action.payload.product);
// console.log(product);
    //  const data= state.taskList.push({...action.payload})
     const ProductExist = state.cardItems.find((item) => item.id ===product.id);
     if (ProductExist) {
      state.cardItems=state.cardItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity+1}:item)
      }
      else {
        state.cardItems=[...state.cardItems,{...product,quantity:1}]
     }

    },

   
    updateTask:(state,action)=>{
      // console.log(action.payload.Items);
      state.cardItems= action.payload.Items
    },
    // delectTask:(state,action)=>{
    //   const {id} =(action.payload)
    //   console.log(id);

    //   state.cardItems = state.cardItems.filter((task) => task.id !== id); 
    // },


  },
});

export const { addTask,delectTask, listUpdate,updateTask } = Slice.actions;

export default Slice.reducer;