import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

let SidebarElementStyle =
  'w-11/12 h-14 pl-8 pr-4 my-2 rounded-xl flex justify-between items-center hover:bg-purple-200 transition-all duration-300 ease-in hover:pl-12'

const SidebarElement = ({ element }) => {
  const { name, dropdown } = element
  const [showDropdown, setShowDropdown] = useState(false)

  const showDropdownElements = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className={SidebarElementStyle} onClick={showDropdownElements}>
        <h3 className="text-2xl">{name}</h3>
        {dropdown && <RiArrowDropDownLine className="text-3xl" />}
      </div>
      {dropdown && showDropdown && (
        <div className="w-11/12 flex flex-col items-center">
          {dropdown.map((dropdownElement, index) => {
            return (
              <div
                key={index}
                className="h-12 w-full pl-14 my-1 flex flex-col justify-center transition-all duration-300 ease-in hover:bg-purple-200 hover:pl-20 rounded-xl"
              >
                {dropdownElement.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SidebarElement
