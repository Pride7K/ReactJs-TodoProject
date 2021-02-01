import React from "react"
import Grid from "../template/Grid"
import IconButton from "../template/IconButton"

export default props => {

    const keyHandler = (e)=>{
        if(e.key == "Enter")
        {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key == "Escape")
        {
            props.handleClear();
        }
    }
    return (
        <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input onKeyUp={keyHandler} className="form-control col-md-4" placeholder="Add Task" type="text" id="description" value={props.description} onChange={props.handleChange} />            
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton type="button" style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                    <IconButton  style="info" icon="search" onClick={props.handleSearch}></IconButton>
                    <IconButton  style="default" icon="close" onClick={props.handleClear}></IconButton>
                </Grid>
        </div >
    )
}