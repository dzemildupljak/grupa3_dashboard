import React, { useState } from 'react'
import { DiReact } from 'react-icons/di'
import SidebarElement from './SidebarElement.jsx'

//check if this is ok

const sidebarElements = [
  {
    name: 'Option 1',
    dropdown: ['Option 1.1', 'Option 1.2', 'Option 1.3'],
  },
  {
    name: 'Option 2',
    dropdown: ['Option 2.1', 'Option 2.2', 'Option 2.3'],
  },
  {
    name: 'Option 3',
    dropdown: ['Option 3.1', 'Option 3.2', 'Option 3.3'],
  },
  {
    name: 'Option 4',
    dropdown: null,
  },
  {
    name: 'Option 5',
    dropdown: null,
  },
  {
    name: 'Option 6',
    dropdown: null,
  },
]

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-sidebar text-white ">
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
