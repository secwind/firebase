import React from 'react'
import PropTypes from 'prop-types'

const WithFormInputGroup = ({
    lable,
    name,
    type,
    value,
    onChange,
    ref,
    placeholder,
    autoComplete,
    error,
    minLength,  
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{lable}</label>
        <input
          type={type}
          name={name} 
          className="form-control form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          ref={ref}
          minLength={minLength}
        />         
    </div>
  )
}

WithFormInputGroup.defalutProps = {
    type: 'text',
}

WithFormInputGroup.propsTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    autoComplete: PropTypes.string.isRequired,
    ref: PropTypes.func.isRequired,

}

export default WithFormInputGroup;