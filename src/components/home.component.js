// React
import React, { Component } from 'react'

// Our own component
import Carousel from './carousel.component'

// Images
import komasya from '../images/komasya.jpeg'
import tvIkram from '../images/tv.ikram.jpeg'
import pti from '../images/pti.jpeg'
import ikramAkademia from '../images/ikram akademia.jpeg'

const pautan1 = "http://ikram.org.my/images/KM/aidiladha1440h1.png"
const pautan2 = "http://ikram.org.my/images/BELIA/imfc-sspl2.jpg"
const pautan3 = "http://ikram.org.my/images/ARTIKEL/merdeka1.jpg"

const announcedImage = "http://ikram.org.my/images/banners/3mt10-1.jpg"

const mycareSrc = "http://ikram.org.my/images/logo/logo-mycare2.png"
const muslehSrc = "http://ikram.org.my/images/logo/musleh-logo3.jpg"
const hidayahSrc = "http://ikram.org.my/images/logo/hcf-logo.png"
const harmoniSrc = "http://ikram.org.my/images/logo/Belia-Harmoni.png"
const iHealthSrc = "http://ikram.org.my/images/logo/ikramhealth-logo2.png"
const yayasanSrc = "http://ikram.org.my/images/logo/yim.png"

const mycareUrl = "https://www.facebook.com/mycarehq/"
const muslehUrl = "https://www.facebook.com/ikrammusleh.edu/"
const hidayahUrl = "https://www.facebook.com/hidayahcentrefoundation/"
const harmoniUrl = "https://www.facebook.com/beliaharmonimalaysia/"
const iHealthUrl = "https://www.facebook.com/IKRAMHealth/"
const yayasanUrl = "http://yayasan.ikram.org.my/"

const psiSrc = "http://ikram.org.my/images/logo/psi.jpg"
const iJuniorSrc = "http://ikram.org.my/images/logo/ikram-junior.png"
const iTeensSrc = "http://ikram.org.my/images/logo/ikram-teens2.png"
const mapSrc = "http://ikram.org.my/images/logo/map-ikram.jpg"

const psiUrl = "https://www.facebook.com/psikospiritualikram/"
const iJuniorUrl = "https://www.facebook.com/search/pages/?q=ikram%20juniors&epa=SERP_TAB"
const iTeensUrl = "https://www.facebook.com/IKRAMTeens/"
const mapUrl = "https://www.facebook.com/map.officialpage/"

const artPopular = "http://ikram.org.my/images/MADANI/drparid19-1.png"

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="row baris-pertama"> {/* mula baris yang pertama */}
                    <div className="col-8">
                        <Carousel />
                    </div>
                    <div className="col">
                        <div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="imgContainer">
                                        <img className="imejCapaian" src={komasya} alt="Avatar" />
                                        <div className="overlay">Konvensyen Maqasid Syariah</div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="imgContainer">
                                        <img className="imejCapaian" src={tvIkram} alt="Avatar" />
                                        <div className="overlay">TV IKRAM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <di  className="col-sm">
                                    <div className="imgContainer">
                                        <img className="imejCapaian" src={pti} alt="Avatar" />
                                        <div className="overlay"><a href="http://pti.ikram.org.my/">PTI</a></div>
                                    </div>
                                </di>
                                <div className="col-sm">
                                    <div className="imgContainer">
                                        <img className="imejCapaian" src={ikramAkademia} alt="Avatar" />
                                        <div className="overlay"><a href="https://www.facebook.com/AkademiaIKRAM/">IKRAM Akademia</a></div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation">
                                <ul class="pagination justify-content-center mini-nav">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row baris-kedua"> {/* mula baris yang kedua */}
                    <div className="col-8 reduced-height">
                        <div>
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className="smallheaders">Kenyataan Media</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <img src={pautan1} alt="aidiladha" className="imejPautan" />
                                            <b><p>Semarakkan Pengorbanan Mencapai Ketaqwaan</p></b>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Penyusuan susu ibu: Sistem sokongan yang efektif perlu diwujudkan</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Langkah penting ke arah mengangkat profesionalisme guaman syarie</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm">
                                    <h5 className="smallheaders">Berita</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <img src={pautan2} alt="imfc" className="imejPautan" />
                                            <b><p>IKRAM Muda FC muncul juara liga</p></b>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Ensiklopedia Masjid Al-Aqsa dalam talian pertama di dunia dilancarkan</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>GBM lancar tabung kukuh perpaduan nasional</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm">
                                    <h5 className="smallheaders">Artikel</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <img src={pautan3} alt="jalur gemilang" className="imejPautan" />
                                            <b><p>Kekalkan keharmonian, elakkan perpecahan</p></b>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Perbelanjaan kesihatan: Tanggungjawab siapa?</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Advokasi: Belajar daripada Syed Saddiq</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-sm">
                                    <h3 className="subheaders spaced">Artikel popular</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <img src={artPopular} alt="solidariti" className="imejPautan" />
                                            <b><p>Presiden IKRAM seru hadir Solidariti Keamanan</p></b>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Penyusuan susu ibu: Sistem sokongan yang efektif perlu diwujudkan</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Langkah penting ke arah mengangkat profesionalisme guaman syarie</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 reduced-height">
                        <h3 className="subheaders">Hebahan</h3>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3DYarDeNwbIs-JW_JLkIdU4Bl6NexqKE5kEYSzpC81Z6-QA/viewform">
                            <img src={announcedImage} className="imejHebahan" alt="hebahan" />
                        </a>
                        <h3 className="subheaders spaced">Institusi IKRAM</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <a href={mycareUrl}>
                                        <img src={mycareSrc} className="instLogo" alt="MyCare" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={muslehUrl}>
                                        <img src={muslehSrc} className="instLogo" alt="Musleh" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={hidayahUrl}>
                                        <img src={hidayahSrc} className="instLogo" alt="Hidayah" />
                                    </a>
                                </div>
                            </div>
                            <div className="spacer"/>
                            <div className="row">
                                <div className="col">
                                    <a href={harmoniUrl}>
                                        <img src={harmoniSrc} className="instLogo" alt="Harmoni" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={iHealthUrl}>
                                        <img src={iHealthSrc} className="instLogo" alt="iHealth" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={yayasanUrl}>
                                        <img src={yayasanSrc} className="instLogo" alt="Yayasan" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="subheaders spaced">Agensi IKRAM</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <a href={psiUrl}>
                                        <img src={psiSrc} className="agenLogo1" alt="PSI" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={iTeensUrl}>
                                        <img src={iTeensSrc} className="agenLogo1" alt="iTeens" />
                                    </a>
                                </div>
                            </div>
                            <div className="spacer" />
                            <div className="row">
                                <div className="w-100"></div>
                                <div className="col">
                                    <a href={iJuniorUrl}>
                                        <img src={iJuniorSrc} className="agenLogo2" alt="iJunior" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href={mapUrl}>
                                        <img src={mapSrc} className="agenLogo2" alt="MAP" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage