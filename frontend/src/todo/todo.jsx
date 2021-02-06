import { Component } from "babel-plugin-react-html-attrs";
import React from "react"
import PageHeader from "../template/pageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default (props) => {
    return (
        < div >
            <PageHeader name="Tasks" small="Register" />
            <TodoForm />
            <TodoList />
        </div >
    )
}
