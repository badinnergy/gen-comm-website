// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Our own component
import HomePage from './components/home.component'
import BeritaPage from './components/berita.component'
import KenyataanMediaPage from './components/kenyataan-media.component'
import IkramDalamBeritaPage from './components/ikram-dalam-berita.component'
import BakimPage from './components/bakim.component'
import PengenalanPage from './components/pengenalan.component'
import JKPPage from './components/jawatan-kuasa-pusat.component'
import WanitaPusatPage from './components/jawatan-kuasa-wanita-pusat.component'
import DPNPage from './components/dpn.component'
import PresidenBerbicaraPage from './components/presiden-berbicara.component'
import PerlembagaanPage from './components/perlembagaan.component'
import BorangAhliPage from './components/borang-ahli.component'
import BorangKawasanPage from './components/borang-kawasan.component'
import HakKewajipanAhliPage from './components/hak-kewajipan-ahli.component'
import DakwahHarakahPage from './components/dakwah-harakah.component'
import ImanIbadahPage from './components/iman-ibadah.component'
import AkhlakBudiPage from './components/akhlak-budi.component'
import TarbiatunaPage from './components/tarbiatuna.component'
import RisalahTarbiahPage from './components/risalah-tarbiah.component'
import CapaianPage from './components/capaian.component'
import NegeriPage from './components/negeri.component.js'
import HubungiPage from './components/hubungi.component'

// Material UI
import HomeIcon from '@material-ui/icons/Home'

// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/master.css"

const banner_url = "http://ikram.org.my/images/Header-banner.jpg"

const navButtons = () => {
    const navLinks = ["berita", "kepemimpinan", "keahlian", "tarbiah"];

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
                    <h1 className="mobile-only">Mohon Maaf!</h1>
                    <p className="mobile-only">Laman web ini hanya boleh diakses melalui komputer atau laptop</p>
                    <p className="mobile-only">Akses kepada telefon pintar akan keluar pada masa hadapan</p>
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
                                        <Link to="/kenyataan-media" className="dropdown-item">Kenyataan Media</Link>
                                        <Link to="/ikram-dalam-berita" className="dropdown-item">IKRAM Dalam Berita</Link>
                                        <Link to="/bakim" className="dropdown-item">BAKIM</Link>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Kepemimpinan
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/pengenalan" className="dropdown-item">Pengenalan</Link>
                                        <Link to="/jk-pusat" className="dropdown-item">JK Pusat</Link>
                                        <Link to="/jk-wanita-pusat" className="dropdown-item">JK Wanita Pusat</Link>
                                        <Link to="/dpn" className="dropdown-item">Dewan Perwakilan Nasional</Link>
                                        <Link to="/presiden-berbicara" className="dropdown-item">Presiden Berbicara</Link>
                                    </div>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/perlembagaan" className="nav-link">Perlembagaan</Link>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Keahlian
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/borang-ahli" className="dropdown-item">Borang Ahli</Link>
                                        <Link to="/borang-kawasan" className="dropdown-item">Borang Kawasan</Link>
                                        <a href="http://www.ikram.org.my/reg/" className="dropdown-item">Permohonan Keahlian Online</a>
                                        <a href="http://www.ikram.org.my/reg/member_applytransfer.php" className="dropdown-item">Permohonan Tukar Kawasan Online</a>
                                        <Link to="hak-kewajipan-ahli" className="dropdown-item">Hak dan Kewajipan Ahli</Link>
                                    </div>
                                </li>
                                <li className="navbar-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        Tarbiah
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="dakwah-harakah" className="dropdown-item">Dakwah & Harakah</Link>
                                        <Link to="iman-ibadah" className="dropdown-item">Iman & Ibadah</Link>
                                        <Link to="akhlak-budi" className="dropdown-item">Akhlak & Budi Pekerti</Link>
                                        <Link to="tarbiatuna" className="dropdown-item">Tarbiatuna</Link>
                                        <Link to="risalah-tarbiah" className="dropdown-item">Risalah Tarbiah</Link>
                                    </div>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/capaian" className="nav-link">Capaian</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/negeri" className="nav-link">Negeri</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/hubungi" className="nav-link">Hubungi Kami</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/berita" component={BeritaPage} />
                    <Route path="/kenyataan-media" component={KenyataanMediaPage} />
                    <Route path="/ikram-dalam-berita" component={IkramDalamBeritaPage} />
                    <Route path="/bakim" component={BakimPage} />
                    <Route path="/pengenalan" component={PengenalanPage} />
                    <Route path="/jk-pusat" component={JKPPage} />
                    <Route path="/jk-wanita-pusat" component={WanitaPusatPage} />
                    <Route path="/dpn" component={DPNPage} />
                    <Route path="/presiden-berbicara" component={PresidenBerbicaraPage} />
                    <Route path="/borang-ahli" component={BorangAhliPage} />
                    <Route path="/borang-kawasan" component={BorangKawasanPage} />
                    <Route path="/hak-kewajipan-ahli" component={HakKewajipanAhliPage} />
                    <Route path="/perlembagaan" component={PerlembagaanPage} />
                    <Route path="/dakwah-harakah" component={DakwahHarakahPage} />
                    <Route path="/iman-ibadah" component={ImanIbadahPage} />
                    <Route path="/akhlak-budi" component={AkhlakBudiPage} />
                    <Route path="/tarbiatuna" component={TarbiatunaPage} />
                    <Route path="/risalah-tarbiah" component={RisalahTarbiahPage} />
                    <Route path="/capaian" component={CapaianPage} />
                    <Route path="/negeri" component={NegeriPage} />
                    <Route path="/hubungi" component={HubungiPage} />
                </div>
                <footer>
                    <div className="container padded">
                        <div className="row">
                            <div className="col-sm">
                                <h3>Pertubuhan IKRAM Malaysia</h3>
                                <p>Pertubuhan IKRAM Malaysia (IKRAM) yang didaftarkan pada 22 Oktober 2009 adalah pertubuhan dakwah, tarbiah dan kebajikan yang prihatin terhadap urusan-urusan kehidupan masyarakat umum sejajar dengan ajaran dan cara hidup Islam. IKRAM berusaha untuk menegakkan syariat Islam di Malaysia sebagai rahmat kepada seluruh alam.</p>
                            </div>
                            <div className="col-sm">
                                <h3>Facebook</h3>
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fikram.malaysia%2F&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" data-show-facepile="true"></iframe>
                            </div>
                            <div className="col-sm">
                                <h3>IKRAM TV</h3>
                                {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIKRAMAustralia%2F&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" data-show-facepile="true"></iframe> */}
                            </div>
                            <div className="col-sm">
                                <h3>Hubungi Kami</h3>
                                <h6>Pertubuhan IKRAM Malaysia (IKRAM)</h6>
                                <p>No. 6, Jalan Dagang SB 4/1, Taman Sungai Besi Indah, 43300 Seri Kembangan, Selangor Darul Ehsan, MALAYSIA</p>
                                <p>Tel: +603-8945 6999, +603-8945 3666</p>
                                <p>Fax: +603-8945 1772</p>
                                <h6>Emel</h6>
                                <p>Umum: info@ikram.org.my</p>
                                <p>Pentadbiran: pentadbiran@ikram.org.my</p>
                                <p>Keahlian: keahlian@ikram.org.my</p>
                                <p>Kewangan: kewangan@ikram.org.my</p>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-footer">
                        <p>All Rights Reserved. Designed by <a href="https://badinnergy.github.io/">badinnergy.github.io</a></p>
                    </div>
                </footer>
            </Router>
        )
    }
}

export default App;
