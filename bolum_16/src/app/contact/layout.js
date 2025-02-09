import React from 'react'

const ContactLayout = ({children}) => {
  return (
    <div>
        <h3>Contact Layout Header</h3>
        <div>
          {children}
        </div>
        <h3>Contact Layout Footer</h3>
    </div>
  )
}

export default ContactLayout
