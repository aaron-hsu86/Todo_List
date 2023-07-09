import React, {useState} from 'react'

const AddItem = (props) => {
    const {addItem}=props

    const [item, setItem] = useState({
        task: "",
        completed: false
    })

    const submitForm = (e) => {
        e.preventDefault();
        addItem(item)
        setItem({
            task: "",
            completed: false
        })
    }

    const handleForm = e => {
        const {name, value} = e.target
        setItem(currendData => ({...currendData, [name]: value}))
    }

    return (
        <form onSubmit={submitForm}>
            <label>To-Do:</label>
            <input type='text' name='task' onChange={handleForm} value={item.task} />
            <button>Add</button>
        </form>
    )
}

export default AddItem