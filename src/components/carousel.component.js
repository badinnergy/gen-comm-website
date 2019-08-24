import React from 'react'

// CSS
import "bootstrap/dist/css/bootstrap.min.css"

const img1 = "http://ikram.org.my/images/BELIA/imfc-sspl2.jpg"
const img2 = "http://ikram.org.my/images/MyCARE3/aqsapedia.jpg"
const img3 = "http://ikram.org.my/images/MADANI/gbm-hitea19.jpg"
const img4 = "http://ikram.org.my/images/PUSAT2019/sjtu1.jpg"

export default function Carousel() {
    return (
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 carousel-img" alt="hasan" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>IKRAM MUDA FC MUNCUL JUARA LIGA</h5>
                            <p>KUALA LUMPUR - IKRAM Muda FC (IMFC) berjaya menjulang trofi pertama dalam sejarah apabila menjadi juara liga Selangor Social Premier League (SSPL) Divisyen 2.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 carousel-img" alt="yusuf" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ENSIKLOPEDIA MASJID AL-AQSA DALAM TALIAN PERTAMA DI DUNIA DILANCARKAN</h5>
                            <p>KUALA LUMPUR - Ensiklopedia dalam talian mengenai Masjid Al-Aqsa yang pertama di dunia, 'Aqsapedia' telah dilancarkan oleh Pengerusi Lembaga Pemegang Amanah Yayasan Al-Quds Malaysia (QFM), Datuk Seri Mukhriz Tun Dr Mahathir.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carousel-img" alt="morsi" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>GBM LANCAR TABUNG KUKUH PERPADUAN NASIONAL</h5>
                            <p>KUALA LUMPUR - Gabungan Bertindak Malaysia (GBM) yang merupakan gabungan 27 pertubuhan bukan kerajaan (NGO) pelbagai kaum dan agama telah melancarkan tabung khusus untuk aktiviti mengukuhkan perpaduan nasional.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100 carousel-img" alt="morsi" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>UNIVERSITI CHINA LAWAT IKRAM</h5>
                            <p>SERI KEMBANGAN - Sekumpulan pensyarah dan mahasiswa dari Shanghai Jiao Tong University (SJTU), China telah melawat Ibu Pejabat IKRAM Malaysia (IKRAM) pada Selasa lalu.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
