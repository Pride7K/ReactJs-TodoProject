import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "../template/Grid"
import IconButton from "../template/IconButton"
import { changeDescription, Search,Add,cleanForm } from "../main/Actions/todoActions/Actions"
import { bindActionCreators } from "redux"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const {Add,Search,description,cleanForm} = this.props;
        if (e.key == "Enter") {
            e.shiftKey ? Search() : Add(description)
        } else if (e.key == "Escape") {
            cleanForm()
        }
    }

    componentWillMount(){
        this.props.Search();
    }

    render() {
        const {Add,Search,description,cleanForm} = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input onKeyUp={this.keyHandler} className="form-control col-md-4" placeholder="Add Task" type="text" id="description" value={this.props.description} onChange={this.props.changeDescription} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton type="button" style="primary" icon="plus" onClick={e => Add(description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={Search}></IconButton>
                    <IconButton style="default" icon="close" onClick={()=> cleanForm()}></IconButton>
                </Grid>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description })

// bindActionCreators serve para chamar sem ter que instanciar o
// actionCreator, com isso ja obter a action e ja fazer o dispatch
// para os reducers
function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            changeDescription, Search,Add,cleanForm
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)