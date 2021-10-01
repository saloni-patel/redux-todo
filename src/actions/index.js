export const addTodo = (text) => {
    console.log(text)
    return{
        type: "ADD_TODO",
        payload: text
        // payload: {

        //     //for updated number
        //     id: new Date().getTime().toString(),
        //     text: text
        // }
    }
}
export const updateTodo = () => {
    return{
        type: "UPDATE_TODO"
    }
}
export const deleteTodo = (data) => {
    console.log(data)
    return{
        type: "DELETE_TODO",
        payload: data
    }
}