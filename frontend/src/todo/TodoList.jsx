import React from "react"
import IconButton from "../template/IconButton"
import Todo from "./todo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { handleMarkAsDone, handleMarkAsPeding, handleTodoDelete } from "../main/Actions/todoActions/Actions"


const TodoList = props => {
    const {handleMarkAsDone,handleMarkAsPeding,handleTodoDelete} = props
    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(item => {
                return (
                    <tr key={item._id}>
                        <td className={item.done ? "markedAsDone" : ""}>{item.description}</td>
                        <td><IconButton style="success" icon="check" hide={item.done} onClick={() => handleMarkAsDone(item)} /></td>
                        <td><IconButton style="warning" icon="undo" hide={!item.done} onClick={() => handleMarkAsPeding(item)} /></td>
                        <td><IconButton style="danger" icon="trash" hide={!item.done} onClick={() => handleTodoDelete(item)} /></td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    }
}

const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({ handleMarkAsDone, handleMarkAsPeding, handleTodoDelete }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)