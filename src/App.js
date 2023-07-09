import './App.css';
import AddItem from './components/AddItem';
import DisplayItem from './components/DisplayItem';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([])

  const newItem = item => {
    setItems((currentData) => ([...currentData, item]))
  }

  const completeItem = id => {
    let iCopy = [...items]
    iCopy[id].completed = !iCopy[id].completed
    setItems(iCopy)
  }

  const removeItem = id => {
    let left = items.slice(0,id)
    let right = items.slice(id+1)
    setItems(left.concat(right))
  }
console.log(items)
  return (
    <>
    <AddItem addItem={newItem}/>
    {
      items.map( (item, i) => {
        return(
          <DisplayItem task={item.task} completed={item.completed} index={i} deleteItem={removeItem} completeTask={completeItem} />
        )
      })
    }
    </>
  );
}

export default App;
