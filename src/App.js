// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Our own component
import HomePage from './components/home.component'

// Material UI
import HomeIcon from '@material-ui/icons/Home'

// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const banner_url = "http://ikram.org.my/images/Header-banner.jpg"

const navButtons = () => {
    const navLinks = ["berita", "kepemimpinan", "keahlian", "tarbiah", "capaian", "negeri"];

    navLinks.map(item => {
        return (
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={'#'+item} aria-controls={item} aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        )
    })
}

class App extends Component {
    renderNavButtons = () => {
        return <navButtons />;
    }
    
    render() {
        return (
            <Router>
                <div className="container">
                    <img className="banner" src={banner_url} alt="banner" />
                    <nav className="navbar navbar-expand-lg navbar-light navigation">
                        { this.renderNavButtons() }
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
                                        <Link to="/berita" className="dropdown-item">Berita</Link>
                                        <a className="dropdown-item" href="#">Kenyataan Media</a>
                                        <a className="dropdown-item" href="#">IKRAM Dalam Berita</a>
                                        <a className="dropdown-item" href="#">BAKIM</a>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Kepemimpinan
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Pengenalan</a>
                                        <a className="dropdown-item" href="#">Jawatan Kuasa Pusat</a>
                                        <a className="dropdown-item" href="#">Jawatan Kuasa Wanita Pusat</a>
                                        <a className="dropdown-item" href="#">Dewan Perwakilan Nasional</a>
                                        <a className="dropdown-item" href="#">Presiden Berbicara</a>
                                    </div>
                                </li>
                                <li className="navbar-item active">
                                    <Link to="/perlembagaan" className="nav-link">Perlembagaan</Link>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Keahlian
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Borang</a>
                                        <a className="dropdown-item" href="#">Borang Tukar Kawasan</a>
                                        <a className="dropdown-item" href="#">Permohonan Keahlian Online</a>
                                        <a className="dropdown-item" href="#">Permohonan Tukar Kawasan Online</a>
                                        <a className="dropdown-item" href="#">Hak dan Kewajipan Ahli</a>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Tarbiah
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Dakwah & Harakah</a>
                                        <a className="dropdown-item" href="#">Iman & Ibadah</a>
                                        <a className="dropdown-item" href="#">Akhlak & Budi Pekerti</a>
                                        <a className="dropdown-item" href="#">Tarbiatuna</a>
                                        <a className="dropdown-item" href="#">Risalah Tarbiah</a>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Capaian
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Wanita IKRAM</a>
                                        <a className="dropdown-item" href="#">Institusi IKRAM</a>
                                        <a className="dropdown-item" href="#">Agensi IKRAM</a>
                                        <a className="dropdown-item" href="#">Sekolah-Sekolah MUSLEH</a>
                                        <a className="dropdown-item" href="#">Facebook</a>
                                        <a className="dropdown-item" href="#">IKRAM Luar Negara</a>
                                        <a className="dropdown-item" href="#">Galeri Gambar</a>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Negeri
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Perlis</a>
                                        <a className="dropdown-item" href="#">Wilayah Persekutuan</a>
                                        <a className="dropdown-item" href="#">Perak</a>
                                        <a className="dropdown-item" href="#">Terengganu</a>
                                        <a className="dropdown-item" href="#">Negeri Sembilan</a>
                                        <a className="dropdown-item" href="#">Kedah</a>
                                        <a className="dropdown-item" href="#">Johor</a>
                                        <a className="dropdown-item" href="#">Pahang</a>
                                        <a className="dropdown-item" href="#">Kelantan</a>
                                        <a className="dropdown-item" href="#">Selangor</a>
                                        <a className="dropdown-item" href="#">Melaka</a>
                                        <a className="dropdown-item" href="#">Sarawak</a>
                                        <a className="dropdown-item" href="#">Sabah</a>
                                    </div>
                                </li>
                                <li className="navbar-item active">
                                    <Link to="/hubungi" className="nav-link">Hubungi Kami</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/berita" component={HomePage} />
                    <Route path="/perlembagaan" component={HomePage} />
                    <Route path="/hubungi" component={HomePage} />
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <h3>Pertubuhan IKRAM Malaysia</h3>
                            </div>
                            <div className="col-sm">
                                <h3>Facebook</h3>
                            </div>
                            <div className="col-sm">
                                <h3>IKRAM TV</h3>
                            </div>
                            <div className="col-sm">
                                <h3>Hubungi Kami</h3>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        )
    }
}

export default App;
