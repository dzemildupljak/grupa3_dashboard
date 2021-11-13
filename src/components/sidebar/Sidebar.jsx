import React, { useState } from 'react'
import './Sidebar.css'
import { DiReact } from 'react-icons/di'
import SidebarElement from './sidebarElement/SidebarElement.jsx'

const sidebarElements = [
  {
    name: 'Option 1',
    dropdown: [
      { name: 'Option 1.1', path: '/option1.1', dropdown: null },
      { name: 'Option 1.2', path: '/option1.2', dropdown: null },
      { name: 'Option 1.3', path: '/option1.3', dropdown: null },
    ],
  },
  {
    name: 'Option 2',
    dropdown: [
      { name: 'Option 2.1', path: '/option2.1', dropdown: null },
      { name: 'Option 2.2', path: '/option2.2', dropdown: null },
      { name: 'Option 2.3', path: '/option2.3', dropdown: null },
    ],
  },
  {
    name: 'Option 3',
    dropdown: [
      { name: 'Option 3.1', path: '/option3.1', dropdown: null },
      { name: 'Option 3.2', path: '/option3.2', dropdown: null },
      { name: 'Option 3.3', path: '/option3.3', dropdown: null },
    ],
  },
  {
    name: 'Option 4',
    dropdown: [
      { name: 'Option 4.1', path: '/option4.1', dropdown: null },
      { name: 'Option 4.2', path: '/option4.2', dropdown: null },
      { name: 'Option 4.3', path: '/option4.3', dropdown: null },
    ],
  },
  {
    name: 'Option 5',
    dropdown: [
      { name: 'Option 5.1', path: '/option5.1', dropdown: null },
      { name: 'Option 5.2', path: '/option5.2', dropdown: null },
      { name: 'Option 5.3', path: '/option5.3', dropdown: null },
    ],
  },
  {
    name: 'Option 6',
    dropdown: null,
  },
]

const Sidebar = () => {
  return (
    <div className="shadow-xl flex flex-col items-center fixed top-0 left-0 overflow-hidden overflow-y-auto w-60 h-screen max-h-screen pt-6 pb-20 bg-white text-gray-500 rounded-r-3xl">
      <div className=" w-full h-24 flex flex-col justify-center items-center">
        <div className="text-6xl">
          <DiReact />
        </div>
      </div>
      {sidebarElements.map((element, index) => {
        return <SidebarElement key={index} element={element} />
      })}
    </div>
  )
}

export default Sidebar
