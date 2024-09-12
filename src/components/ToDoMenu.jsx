import React, { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
const ToDoMenu = () => {

    const [tast, setTask] = useState('');
    const [list, setList] = useState([]);

    const addTask = () => {
        if(task){
            const to_do = {
                id: list.length+1,
                title:task,
                toggle:false
            }

            setList([to_do, ...list]);
            setTask('')
        }
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
    </div>
  );
}

export default ToDoMenu;
