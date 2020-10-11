import React, { Component } from 'react';
import './ToDoList.css';
import ListItem from './ListItem'


class ToDoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            thingsToDo: []}
    }

    addThingsToDo = (event) => {
        event.preventDefault();


        let newThing = {
            id: Date.now(),
            thing: this._inputThing.value
        }



        this.setState((state) => {
            return ({
                thingsToDo: state.thingsToDo.concat(newThing)

            });

        })

        this._inputThing.value = '';

    }

    render() {
        return (
            <div className='toDoList'>
                <h1>To Do List</h1>
                <form onSubmit={this.addThingsToDo}>
                    <input ref={(element) => {this._inputThing = element}} type="text" name="name" placeholder="Enter name"></input>
                    <button type="submit">Add Items</button>
                </form>
                <ListItem thingsToDo={this.state.thingsToDo}/>
            </div>
        )

    }
}

console.log(ToDoList);
export default ToDoList;