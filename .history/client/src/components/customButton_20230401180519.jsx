import React from 'react'

const CustomButton = ({ type, title, customStyles, handleClick,  }) => 
{
    const generateStyles = (type) => {

  return (
    <button 
    className={'px-2 py-1.5 flex-1 rounded-md ${customStyles}'}
    style={generateStyles(type)}
    >
        {title}
    </button>
  )
}

export default CustomButton