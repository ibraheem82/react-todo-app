import React from 'react';
import { RiAddLargeFill } from "react-icons/ri";
const ToDoMenu = () => {
    return (
        <div className='mx-auto mt-8'>
            <div className='flex items-center justify-center mt-4'>
                <input type="text"  className='w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white' placeholder='Enter Task...'/>
                <button>
                <RiAddLargeFill />
                </button>
            </div>
        </div>
    );
}

export default ToDoMenu;
