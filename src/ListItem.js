import React from 'react';
import './ListItem.css'

function ListItem(props) {
    return (

        <ul className="the-list">
            <li>Shopping<span>X</span></li>
            <li>Gym <span>X</span></li>
        </ul>
    )
}

export default ListItem;