import React from 'react'
import './style.css'
import Faqaccordion from '../../accordion/index.js'

const Faq = () => {
  return (
    <section className="faq" id='f-a-q'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="faqtext">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
          </div>
          </div>
          <div className="col-lg-8">
          <div className="acrdn">
            <Faqaccordion />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq