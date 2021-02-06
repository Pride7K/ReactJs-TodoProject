import { CHANGE_DESCRIPTION, TODO_SEARCH, TODO_ADD, CLEAN_FORM } from "../ActionTypes/todoTypes/todoTypes"
import Axios from "axios"

const URL = "http://localhost:3003/api/todos"

export const changeDescription = (event) => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: event.target.value
    }
}

export const cleanForm = () => {
    return [{
        type: CLEAN_FORM
    },Search()]
}

export const Search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ""
        Axios.get(`${URL}?sort=-createdAt${search}`).then(resp => dispatch({
            type: TODO_SEARCH,
            payload: resp.data
        }))
    }
}


/*
// usando apenas o multi
export const Add = (description) => {
    const request = Axios.post(`${URL}`, { description })
    return [
        { type: TODO_ADD, payload: request },
        Search()
    ]
}
*/

// usando framework thunk
export const Add = (description) => {
    return (dispatch) => {
        Axios.post(`${URL}`, { description })
            .then(resp => dispatch({ type: TODO_ADD, payload: resp.data }))
            .then(_ => dispatch(Search()))
    }
}

export const handleMarkAsDone = (todo) => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(_ => dispatch(Search()));
    }
}

export const handleMarkAsPeding = (todo) => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(_ => dispatch(Search()))
    }
}

export const handleTodoDelete = todo => {
    return dispatch => {
        Axios.delete(`${URL}/${todo._id}`)
            .then(_ => dispatch(Search()))
    }
}
