import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="about" className="nav-link">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar
