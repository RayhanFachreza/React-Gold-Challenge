import React from 'react';
import './style.css'
import Heroimage from './img/hero-image.png'
import { Link } from 'react-router-dom';


const Herosection = () => {
  return (
    <section className='herosection' >
        <div className="container">
            <div className="row">
                <div className="col-lg-6 kiri">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link className="btn btn-primary" role="button" to='/cari-mobil'> Mulai Sewa Mobil
                    </Link>
                </div>

                <div className="col-lg-6 kanan">
                    <div className="heroimage">
                        <img src={Heroimage} alt="" />    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Herosection