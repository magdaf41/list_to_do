import React from 'react';
import './App.css';
import Buttons from './Buttons';
import ChangeColor from './ChangeColor';
import ToDoList from './ToDoList';

function App() {
  return (
    <div>
      <ChangeColor text='to jest pierwszy nagłówek' color='red' buttons={true}/>
      <ChangeColor text='to jest drugi nagłówek' color='blue' buttons={false}/>
      <ChangeColor text='to jest trzeci nagłówek' color='green' buttons={false}/>
      <ToDoList/>


    </div>

  );
}
export default App;
