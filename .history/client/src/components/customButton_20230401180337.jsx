import React from 'react'

const CustomButton = ({ type, title, customStyles, handleClick,  }) => {
  return (
    <button 
    className={'px-2 py-1.5 flex-1 rounded}
    >
        {title}
    </button>
  )
}

export default CustomButton