const todoReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,action.payload]

        case "DELETE_TODO":
            // const items = state.findIndex(action.payload);
            console.log(action.payload)
            return state.filter((item)=>item!==action.payload)
            
            default: return state;

            
    }


}
export default todoReducer;