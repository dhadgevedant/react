import React from 'react'

function Button({
    children, 
    type="button",
    bgColor="bg-black",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-md  ${bgColor} ${textColor} ${className}`} {...props} type={type}>
        {children}
    </button>
  )
}s

export default Button
