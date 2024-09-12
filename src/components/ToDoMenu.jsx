import React, { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
// ReactSwitch: Imports the ReactSwitch component from the 'react-switch' library. It is a custom switch component used for toggling task states.
import ReactSwitch from "react-switch";
const ToDoMenu = () => {

    const [task, setTask] = useState(''); // setTask is the function to update task.
    const [list, setList] = useState([]);

    const addTask = () => {
        if(task){
            const to_do = {
        id: list.length + 1, // it will start from zero because it is in form of an array, that is why 1 is been added
        title: task,
        toggle: false,
      };

      setList([to_do, ...list]); // Updates the list state by adding the new task to the beginning of the array.
            setTask('') // Clears the task input field.
        }
    }

    // console.log(list)

    const deleteTask = (id) => { // deleteTask is a function that removes a task from the list based on its id.
        const filtered = list.filter((task) => task.id !== id)
        setList(filtered) // It filters out the task with the matching id and updates the list state.
    }


    const toggleTask = (id) => { //toggleTask is a function that toggles the toggle status of a task.
      const updatedTask = list.map((task) => 
        task.id === id ? {...task, toggle:!task.toggle} : task
      ) // It maps through the list and updates the toggle status of the task with the matching id.

      setList(updatedTask) // Updates the list state with the modified tasks.
    }
  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 font-bold py-4 px-4 rounded" onClick={addTask}>
          <RiAddLargeFill />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className={`${list.length>0 && 'bg-gradient-to-r from-sky-500 via bg-indigo-100 to-pink-100 pt-2 pl-2 pr-2'}`}>
            {list.length===0 ? <h1 className="font-bold text-3xl text-purple-700 p-2">Add Tasks</h1>:
            list.map((task) => (
                <div className={` flex w-[350px] text-md font-bold item-center space-x-2 bg-gray-200 p-2 rounded-md mb-2 ${task.toggle ? 'bg-green-800 text-cyan-50' : 'bg-violet-500'}`}
                key = {task.id}
                >
                    <h4 className={`flex-grow ${task.toggle?'line-through':''}`}> {task.title}</h4>
                    <button 
                    className="text-red-600 font-bold text-xl py-1 px-2 rounded" 
                    onClick={()=>deleteTask(task.id)}><MdDeleteOutline /></button>
                    <ReactSwitch checked={task.toggle}
                    height={20}
                    width={40}
                    handleDiameter={18} 
                    onColor="#4299e1"
                    offColor="#ccc" 
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={()=>toggleTask(task.id)}
                    />

                </div>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
