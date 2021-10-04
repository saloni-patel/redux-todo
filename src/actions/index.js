export const addTodo = (text) => {
    console.log(text)
    return {
        type: "ADD_TODO",
        payload: text
        // payload: {

        //     //for updated number
        //     id: new Date().getTime().toString(),
        //     text: text
        // }
    }
}
export const updateTodo = (data, index) => {
    console.log('update', data, index)
    return {
        type: "UPDATE_TODO",
        payload: { data, index }
    }
}
export const deleteTodo = (data) => {
    console.log(data)
    return {
        type: "DELETE_TODO",
        payload: data
    }
}