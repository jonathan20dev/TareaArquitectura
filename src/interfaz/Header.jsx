import React from 'react'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-light bg-light">
  <form className="container-fluid">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        @
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Tarea de arquitectura: Jonathan Mendoza"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  </form>
</nav>



    </div>
  )
}

export { Header}