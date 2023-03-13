import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './../../../assets/css/index.css'

const baseClasses = 'disabled:opacity-50 disabled:cursor-not-allowed'

export const types = {
  primary:
    'bg-blue-500 text-white hover:bg-blue-700 focus:ring focus:ring-blue-500',
  secondary:
    'bg-gray-500 text-white hover:bg-gray-700 focus:ring focus:ring-gray-500',
  success:
    'bg-green-500 text-white hover:bg-green-700 focus:ring focus:ring-green-500',
  warning:
    'bg-yellow-500 text-white hover:bg-yellow-700 focus:ring focus:ring-yellow-500',
  danger:
    'bg-red-500 text-white hover:bg-red-700 focus:ring focus:ring-red-500',
  base: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring focus:ring-gray-300',
}

export const sizes = {
  small: 'py-1 px-2 text-xs',
  base: 'py-2 px-4 text-base',
  medium: 'py-2 px-6 text-base',
  large: 'py-4 px-6 text-lg',
}

export const Button = ({ type = 'base', size = 'base', label, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(baseClasses, types[type], sizes[size])}
      {...props}
    >
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  /**
   * Button type, define the color
   */
  type: PropTypes.oneOf(Object.keys(types)),
  /**
   * Button size, define the padding and font size
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /**
   * Button label
   */
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: 'base',
  size: 'base',
  label: 'Example',
}
