// React
import React, { Component } from 'react'

// Our own component
import Carousel from './carousel.component'

// CSS
import './home.component.css'

// Images
import komasya from '../images/komasya.jpeg'
import tvIkram from '../images/tv.ikram.jpeg'
import pti from '../images/pti.jpeg'
import ikramAkademia from '../images/ikram akademia.jpeg'

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

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Carousel />
                <u><h3 className="subheaders">Capaian</h3></u>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="imgContainer">
                                <img className="imej" src={komasya} alt="Avatar" />
                                <div className="overlay">Konvensyen Maqasid Syariah</div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="imgContainer">
                                <img className="imej" src={tvIkram} alt="Avatar" />
                                <div className="overlay">TV IKRAM</div>
                            </div>
                        </div>
                        <di  className="col-sm">
                            <div className="imgContainer">
                                <img className="imej" src={pti} alt="Avatar" />
                                <div className="overlay"><a href="http://pti.ikram.org.my/">PTI</a></div>
                            </div>
                        </di>
                        <div className="col-sm">
                            <div className="imgContainer">
                                <img className="imej" src={ikramAkademia} alt="Avatar" />
                                <div className="overlay"><a href="https://www.facebook.com/AkademiaIKRAM/">IKRAM Akademia</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <u><h3 className="subheaders">Hebahan</h3></u>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3DYarDeNwbIs-JW_JLkIdU4Bl6NexqKE5kEYSzpC81Z6-QA/viewform">
                    <img src={announcedImage} className="rounded mx-auto d-block" alt="Announced Image"></img>
                </a>
                <u><h3 className="subheaders">Pautan</h3></u>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h5>Kenyataan Media</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p>Semarakkan Pengorbanan Mencapai Ketaqwaan</p>
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
                            <h5>Berita</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p>IKRAM Muda FC muncul juara liga</p>
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
                            <h5>Artikel</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p>Kekalkan keharmonian, elakkan perpecahan</p>
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
                <u><h3 className="subheaders">Institusi-Institusi IKRAM</h3></u>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href={mycareUrl}>
                                <img src={mycareSrc} className="instLogo" />
                            </a>
                        </div>
                        <div className="col">
                            <a href={muslehUrl}>
                                <img src={muslehSrc} className="instLogo" />
                            </a>
                        </div>
                        <div className="col">
                            <a href={hidayahUrl}>
                                <img src={hidayahSrc} className="instLogo" />
                            </a>
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <a href={harmoniUrl}>
                                <img src={harmoniSrc} className="instLogo" />
                            </a>
                        </div>
                        <div className="col">
                            <a href={iHealthUrl}>
                                <img src={iHealthSrc} className="instLogo" />
                            </a>
                        </div>
                        <div className="col">
                            <a href={yayasanUrl}>
                                <img src={yayasanSrc} className="instLogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage