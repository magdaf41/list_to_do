import React from 'react';
import './App.css';
import Buttons from './Buttons';
import ChangeColor from './ChangeColor';
import ToDoList from './ToDoList';
import Counter from './Counter';

function App() {
  return (
    <div>
      <ChangeColor text='to jest pierwszy nagłówek' color='red' buttons={true} />
      <ChangeColor text='to jest drugi nagłówek' color='blue' buttons={false} />
      <ChangeColor text='to jest trzeci nagłówek' color='green' buttons={false} />
      <ToDoList />
      <Counter initValue={0} />


    </div>

  );
}
export default App;
