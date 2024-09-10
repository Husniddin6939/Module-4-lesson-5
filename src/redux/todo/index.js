import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {
        id:1,
        title:"Task title 1",
        body:"lorem ipsum dollar sit abed vanet culus",
        complated:false
    },
    {
        id:2,
        title:"Task title 2",
        body:"lorem ipsum dollar sit abed vanet culus",
        complated:true
    }
]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{ 
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos.forEach((el)=>{
                if(el.id===action.payload){
                   if(el.complated){
                    el.complated=false;
                   }else{
                    el.complated=true
                   }
                }
            })
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
