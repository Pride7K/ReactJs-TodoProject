import { Component } from "babel-plugin-react-html-attrs";
import React from "react"
import PageHeader from "../template/pageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Axios from "axios"


const URL = "http://localhost:3003/api/todos";

export default class Todo extends React.Component {
    // isto é para garantir que o contexto do this se referencie a classe Pai
    // Todo
    constructor(props) {
        super(props)
        this.state = { description: "", list: [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh();
    }

    refresh(description = "") {
        const search = description ? `&description__regex=/${description}/` : ""
        Axios.get(`${URL}?sort=-createdAt${search}`).then(resp =>
            this.setState({
                ...this.state,
                description: description,
                list: resp.data
            }))
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    handleClear()
    {
       this.refresh();
    }

    handleSearch(item) {
        this.refresh(this.state.description)
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
        //this.handleSearch();
    }
    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description }).then(resp => this.refresh())
    }
    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm handleClear={this.handleClear} handleAdd={this.handleAdd} handleSearch={this.handleSearch} description={this.state.description} handleChange={this.handleChange} />
                <TodoList list={this.state.list} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} handleRemove={this.handleRemove} />
            </div>
        )
    }
}