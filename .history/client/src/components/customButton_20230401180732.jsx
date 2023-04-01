import React from 'react'
import state

const CustomButton = ({ type, title, customStyles, handleClick,  }) => 
{
    const generateStyles = (type) => {
        if(type === "filled") {
            return {
                backgroundColor: "#0095f6",
                color: "#fff",
            }
        }
    }

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