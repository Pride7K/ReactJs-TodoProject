import React from "react"
import IconButton from "../template/IconButton"
import Todo from "./todo"


export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(item => {
                return (
                    <tr key={item._id}>
                        <td className={item.done ? "markedAsDone" : ""}>{item.description}</td>
                        <td><IconButton style="success" icon="check" hide={item.done} onClick={()=> props.handleMarkAsDone(item)}/></td>
                        <td><IconButton style="warning" icon="undo" hide={!item.done} onClick={()=> props.handleMarkAsPending(item)}/></td>
                        <td><IconButton style="danger" icon="trash" hide={!item.done} onClick={()=> props.handleRemove(item)}/></td>
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