import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

let SidebarElementStyle =
  'w-full h-12 pl-7 pr-4 flex justify-between items-center hover:bg-blue-500 transition-all duration-300 ease-in'

const SidebarElement = ({ element }) => {
  const { name, dropdown } = element
  const [showDropdown, setShowDropdown] = useState(false)

  const showDropdownElements = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <div className={SidebarElementStyle} onClick={showDropdownElements}>
        <h3 className="text-2xl">{name}</h3>
        {dropdown && <RiArrowDropDownLine className="text-3xl" />}
      </div>
      {dropdown && showDropdown && (
        <div>
          {dropdown.map((dropdownElement, index) => {
            return (
              <div
                key={index}
                className="h-12 w-full pl-14 flex flex-col justify-center hover:bg-blue-500 transition-all duration-300 ease-in"
              >
                {dropdownElement}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SidebarElement
