import {createSlice} from '@reduxjs/toolkit'

const wishSlice = createSlice({
    name:'Wish' ,
    initialState:{
       
         item:[]
    },
    reducers:{
        // increment :(state)=>{
        //    state.count+=1; 
        // },
        // decrement:(state)=>{
        //     if(state.count>0){
        //         state.count -= 1;
        //     }
        // },
        pushItem : (state , action)=>{
             state.item.push(action.payload);
        },
        popItem : (state , action)=>{
            state.item = state.item.filter(oneItem => oneItem.id !== action.payload);
        }
    }
}) 

export const { pushItem , popItem} = wishSlice.actions;
export default wishSlice.reducer;