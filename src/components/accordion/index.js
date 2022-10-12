import Accordion from 'react-bootstrap/Accordion';
import './style.css'

function Faqaccordion() {
  return (
    <Accordion defaultActiveKey="0" className='d-grid gap-3 judul'  >
        <div className='boxbaru'>
          <Accordion.Item eventKey="0" className="box">
              <Accordion.Header><h3>Apa Syarat yang dibutuhkan?</h3></Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
          </Accordion.Item>
        </div>
        {/* batas */}
      <div className='boxbaru'>
        <Accordion.Item eventKey="1" className="box" >
            <Accordion.Header><h3>Berapa hari minimal sewa mobil lepas kunci?</h3></Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
        </Accordion.Item>
      </div>

      <div className='boxbaru'>
        <Accordion.Item eventKey="2" className="box">
          <Accordion.Header><h3>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h3></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className='boxbaru'>
        <Accordion.Item eventKey="3" className="box">
          <Accordion.Header><h3>Bagaimana jika terjadi kecelakaan</h3></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className='boxbaru'>
        <Accordion.Item eventKey="4" className="box">
          <Accordion.Header><h3>Berapa hari minimal sewa mobil lepas kunci?</h3></Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
      </div>
    </Accordion>
  );
}

export default Faqaccordion;




// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionItem,
// } from 'reactstrap';

// function Accordion (props) {
//   const [open, setOpen] = useState('');
//   const toggle = (id) => {
//     if (open === id) {
//       setOpen();
//     } else {
//       setOpen(id);
//     }
//   };

//   return (
//     <div>
//       <Accordion flush open={open} toggle={toggle}>
//         <AccordionItem>
//           <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
//           <AccordionBody accordionId="1">
//             <strong>This is the first item&#39;s accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default
//             variables. It&#39;s also worth noting that just about any HTML can
//             go within the <code>.accordion-body</code>, though the transition
//             does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//         <AccordionItem>
//           <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
//           <AccordionBody accordionId="2">
//             <strong>This is the second item&#39;s accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default
//             variables. It&#39;s also worth noting that just about any HTML can
//             go within the <code>.accordion-body</code>, though the transition
//             does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//         <AccordionItem>
//           <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
//           <AccordionBody accordionId="3">
//             <strong>This is the third item&#39;s accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default
//             variables. It&#39;s also worth noting that just about any HTML can
//             go within the <code>.accordion-body</code>, though the transition
//             does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

// export default Accordion;