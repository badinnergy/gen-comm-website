import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

// Material UI
import HomeIcon from '@material-ui/icons/Home'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navigation">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#berita" aria-controls="berita" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item active">
                                <Link to="/" className="nav-link"><HomeIcon/></Link>
                            </li>
                            <li className="navbar-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Berita
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Berita</a>
                                    {/* <div class="dropdown-divider"/> */}
                                    <a className="dropdown-item" href="#">Kenyataan Media</a>
                                    {/* <div class="dropdown-divider"/> */}
                                    <a className="dropdown-item" href="#">IKRAM Dalam Berita</a>
                                    {/* <div class="dropdown-divider"/> */}
                                    <a className="dropdown-item" href="#">BAKIM</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
