// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-md">
//     <a class="navbar-brand" href="#">Navbar</a>
//   </div>
// </nav>
//     </div>
//   )
// }

















































































import React from 'react'
import PropTypes from 'prop-types'




export default function Navbar(props) {
  // href="#"
  return (
    <div>
      {/* navbar started */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <div className="navbar-brand"  >{props.title}</div>
          {/* <a className="navbar-brand" href='' >{props.title}</a> */}
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>

              </li> */}


              {/* <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>


          </div>
          <div className={`form-check form-switch  text-${props.mode === 'dark' ? 'light' : 'dark'  } `}>

            {/* THIS IS NEW  */}
            <i className="bi bi-moon-stars-fill" htmlFor="flexSwitchCheckDefault" onClick={props.toggalMode}> <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? "Enable Light Mode" : "Enable Dark Mode"}</label></i>



            {/* THIS IS OLD */}
            {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggalMode}/> */}

            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'? "Enable Light Mode" :"Enable Dark Mode"}</label> */}
          </div>
        </div>
      </nav>
      {/* navbar end  */}
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Mail: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: "set title",
  Mail: "set something in Mail"
}