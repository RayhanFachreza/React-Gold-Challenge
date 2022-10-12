import React from 'react';
import './style.css' ;
import Serviceimg from './assets/content-img.png'

const Ourservices = () => {
  return (
    <section className='ourservices' id='our-services'>
       <div className="container">
        <div className="row">
          <div className="col-lg-6 servicekiri">
            <div className="serviceimage">
              <img src={Serviceimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 servicekanan">
            <div className="servicekanan-text">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul className="listitem">
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Ourservices