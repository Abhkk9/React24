import React from 'react'

// ...props is used to handle attributes/properties passed by  user 

function Button({children, type = 'button', bgColor = 'bg-blue-600', textColor = 'text-white', className = '', ...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}` } {...props}>
       {children}
    </button>
  )
}

export default Button
