import './App.css';
import AddItem from './components/AddItem';
import DisplayItem from './components/DisplayItem';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState([])
  // const [session, setSession] = useState(() =>{
  //   const saved = localStorage.getItem('itemList');
  //   const intitialValue = JSON.parse(saved);
  //   return intitialValue || ""
  // })

  const newItem = item => {
    setItems((currentData) => ([...currentData, item]))
  }

  // useEffect(() => {
  //   localStorage.setItem('itemList', JSON.stringify(items))
  // }, [items]);

  const completeItem = id => {
    let iCopy = [...items]
    iCopy[id].completed = !iCopy[id].completed
    setItems(iCopy)
  }

  const removeItem = id => {
    let iCopy = [...items]
    iCopy[id].visible = !iCopy[id].visible
    setItems(iCopy)
  }
  console.log(items)
  return (
    <>
    <AddItem addItem={newItem}/>
    {
      items.map( (item, i) => {
        return(
          <DisplayItem task={item.task} completed={item.completed} visibility={item.visible} index={i} deleteItem={removeItem} completeTask={completeItem} />
        )
      })
    }
    </>
  );
}

export default App;
