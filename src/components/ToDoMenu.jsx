import React, { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
// ReactSwitch: Imports the ReactSwitch component from the 'react-switch' library. It is a custom switch component used for toggling task states.
import ReactSwitch from "react-switch";
const ToDoMenu = () => {
  const [task, setTask] = useState(""); // setTask is the function to update task.
  const [list, setList] = useState([]); // `list`: A state variable that stores an array of tasks. Each task is represented by an object containing id, title, and toggle properties. && `setList`: A function to update the list state variable.

  const addTask = () => {
    if (task) {
      const to_do = {
        id: list.length + 1, // it will start from zero because it is in form of an array, that is why 1 is been added
        title: task,
        toggle: false,
      };

      // -- This function updates the list state by adding the new task at the beginning of the list. The spread operator (...list) is used to maintain the existing tasks in the list.
      setList([to_do, ...list]); // Updates the list state by adding the new task to the beginning of the array.
      setTask(""); // Clears the task input field.
    }
  };

  // console.log(list)

  const deleteTask = (id) => {
    // deleteTask is a function that removes a task from the list based on its id.
    //  Creates a new array without the task that matches the provided id.
    // setList(filtered): Updates the list state with the filtered array, effectively removing the specified task.
    const filtered = list.filter((task) => task.id !== id);

    // setList(filtered): Updates the list state with the filtered array, effectively removing the specified task.
    setList(filtered); // It filters out the task with the matching id and updates the list state.
  };

  // toggleTask: A function that toggles the toggle property of a task (marks it as completed or not).
  const toggleTask = (id) => {
    //toggleTask is a function that toggles the toggle status of a task.

    //--- map: Iterates over each task in the list. If the task's id matches the provided id, it returns a new task object with the toggle property toggled (using !task.toggle). Otherwise, it returns the task unchanged.
    const updatedTask = list.map((task) =>
      task.id === id ? { ...task, toggle: !task.toggle } : task
    ); // It maps through the list and updates the toggle status of the task with the matching id.

    // setList(updatedTask): Updates the list state with the modified tasks.
    setList(updatedTask); // Updates the list state with the modified tasks.
  };
  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center justify-center mt-4">
        {/* Input Field: An input field where users enter a new task. It is controlled by the task state, meaning its value is set by task and changes are handled by setTask. */}
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 mb-4 placeholder:text-white"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {/* Button (Add Task): A button that calls addTask when clicked to add the current task in the input field to the list. */}
        <button
          className="bg-blue-500 hover:bg-blue-600 font-bold py-4 px-4 rounded mb-4"
          onClick={addTask}
        >
          <RiAddLargeFill />
        </button>
      </div>

      <div className="flex flex-col items-center">
        {/* Task List Container: This container dynamically applies a gradient background if there are tasks in the list. If the list is empty, it shows a message "Add Tasks". */}

        <div
          className={`${
            list.length > 0 &&
            "bg-gradient-to-r from-sky-500 via bg-indigo-100 to-pink-100 pt-2 pl-2 pr-2"
          }`}
        >
          {list.length === 0 ? (
            <h1 className="font-bold text-3xl text-purple-700 p-2">
              Add Tasks
            </h1>
          ) : (
            list.map((task) => (
              // Flex Container: Each task is displayed in a flexbox container with spacing and background color that changes based on the task's toggle state.
              <div
                className={` flex w-[350px] text-md font-bold item-center space-x-2 bg-gray-200 p-2 rounded-md mb-2 ${
                  task.toggle ? "bg-green-800 text-cyan-50" : "bg-violet-500"
                }`}
                key={task.id}
              >
                <h4
                  className={`flex-grow ${task.toggle ? "line-through" : ""}`}
                >
                  {" "}
                  {task.title}
                </h4>

                {/* Delete Button: A button with a delete icon (MdDeleteOutline) that will trigger deleteTask. */}
                <button
                  className="text-red-600 font-bold text-xl py-1 px-2 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  <MdDeleteOutline />
                </button>


                {/* ReactSwitch: A toggle switch (ReactSwitch) for each task to change its toggle state by calling toggleTask. */}
                <ReactSwitch
                  checked={task.toggle}
                  height={20}
                  width={40}
                  handleDiameter={18}
                  onColor="#4299e1"
                  offColor="#ccc"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={() => toggleTask(task.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
