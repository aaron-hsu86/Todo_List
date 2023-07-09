import React, {useState} from 'react'

const DisplayItem = (props) => {

    const {task, completed, visibility, index, deleteItem, completeTask} = props
    // const [finished, setFinished] = useState(completed)

    const deleteStyle = {
        textDecoration: 'line-through'
    }

    const normal = {
        dispay: 'flex',
        flexDirection:"row",
    }

    return (
        <>
        {visibility?
        <div style={completed? deleteStyle :normal}>
            <label>{task}</label>
            {
                completed?
                <input type="checkbox" name='id' value={index} onChange={()=>completeTask(index)} checked/>
                :<input type="checkbox" name='id' value={index} onChange={()=>completeTask(index)}/>
            }
            {completed?<button onClick={()=> deleteItem(index)}>Delete</button>: <></>}
        </div>
        :<></>
        }
        </>
    )
}

export default DisplayItem