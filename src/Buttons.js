import React from 'react';


const Buttons = (props) => {
    return (
        <>
            <button className='btn' onClick={props.changeColor}>
                red
            </button>
            <button className='btn' onClick={props.changeColor}>
                blue
            </button>
            <button className='btn' onClick={props.changeColor}>
                green
            </button>
            <button onClick={()=>props.changeText('Nowy')}>Tekst 1</button>
            <button onClick={()=>props.changeText('Nowszy')}>Tekst 2</button>
            <button onClick={()=>props.changeText('Najnowszy')}>Tekst 3</button>
            <button onClick={()=>props.changeText(' ')}>Pusty</button>
         </>
    )
}

export default Buttons;