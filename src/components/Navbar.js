import React  from 'react'
import PropTypes from 'prop-types'

export default function Navbar({ title, darkMode, toggleDarkMode }) {
  return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-body-tertiary'}`} data-bs-theme={darkMode ? 'dark' : 'light'}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="/logo.png" alt="Logo" width="30" className="d-inline-block align-text-top "/>
            <span className="mx-2">{title}</span>
        </a>
        <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkMode} onChange={toggleDarkMode} />
        </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired
};
