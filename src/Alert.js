import React from 'react'

export default function Alert(props) {
  return (
props.alert && <div className={`alert alert-${document.body.style.backgroundColor==='black'? 'primary':'success'} d-flex align-items-center`} role="alert">

  
  {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use href="#check-circle-fill"/></svg> */}
  <div>
  <i className="bi bi-check-circle-fill"></i>
         
    <strong>{` ${props.alert.msg}`}</strong>
  </div>
</div>

  
  )
}
// xlink: