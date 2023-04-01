import React from 'react'

const customButton = ({ type, title, customStyles, handleClick, title }) => {
  return (
    <button 
    className={'px-2'}
    >
        {title}
    </button>
  )
}

export default customButton