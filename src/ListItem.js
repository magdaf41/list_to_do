import React from 'react';
import './ListItem.css'

function ListItem(props) {
    let thingsToDoList = props.thingsToDo;
    let thingsLiElement = thingsToDoList.map(thingsToDo =>
        <li key={thingsToDo.id}>{thingsToDo.thing}<span>X</span></li>)
    console.log(thingsToDoList)
    return (


        <ul className="the-list">
            {thingsLiElement}
        </ul>
    )
}

export default ListItem;