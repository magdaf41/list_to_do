import React from 'react';


const Header = (props) => {
    return <h2 className={props.color}>{props.text}</h2>
}

export default Header;