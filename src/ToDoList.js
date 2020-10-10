import React, { Component } from 'react';
import './ToDoList.css';
import ListItem from './ListItem'


class ToDoList extends Component {
    render() {
        return (
            <div className='toDoList'>
                <h1>To Do List</h1>
                <from>
                    <input type="text" name="name" placeholder="Enter name"></input>
                    <button type="submit">Add Items</button>
                    <ListItem/>
                </from>
            </div>
        )

    }
}




export default ToDoList;