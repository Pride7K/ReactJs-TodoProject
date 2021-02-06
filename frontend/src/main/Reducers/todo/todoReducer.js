import { CHANGE_DESCRIPTION, TODO_SEARCH, TODO_ADD, CLEAN_FORM } from "../../Actions/ActionTypes/todoTypes/todoTypes"

const INITIAL_STATE = {
    description: "",
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case TODO_SEARCH:
            return {
                ...state,
                list: action.payload
            }
        case TODO_ADD:
        case CLEAN_FORM:
            return {
                ...state,
                description: "",
            }
        default:
            return state
    }
}