// import './App.css';
// import { Button } from 'react-bootstrap'
// import ReactPlayer from 'react-player';



// function App() {
//   return (
//     <div className="App">
//       <h1><center><ReactPlayer url='https://www.youtube.com/watch?v=zUF0hfFWsYM' /></center></h1>
//       <table>
//         <tr>
//           <th>Subhuman Cats</th>
//           <th>Normie Cats</th>
//           <th>psl God Cats</th>
//         </tr>
//         <tr>
//           <td><Button style={{backgroundImage:"url('./images/scat1.jpg')",backgroundSize:"cover", width:"40px", height:"40px"}}></Button></td>
//           <td><Button style={{backgroundImage:"url('./images/ncat.jpg')",backgroundSize:"cover", width:"40px", height:"40px"}}></Button></td>
//           <td> </td>
//         </tr>
    
//       </table>
//     </div>

    
//   );
// }



// export default App;


// App.js
 
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


 
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // using Twilio SendGrid's v3 Node.js Library 
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'pandaspace13@gmail.com', // Change to your recipient
  from: 'catsmogged@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })




    return (
        <Container className="text-center my-5">
            <Row>
                <Col md={4} className="bg-primary text-white p-4">
                  <div>
                    <h2>Subhuman</h2>
                    <p>Cats that need to ropemaxx</p>
                  </div> 
                  <div>
                    <Button variant="light" onClick={handleShow}>
                      Click me
                    </Button>
                  </div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat1.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat2.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat3.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat4.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat7.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/scat6.jpg')} width={"300"} /></Button></div>
                </Col>
                <Col md={4} className="bg-secondary text-white p-4">
                  <div>
                    <h2>Normie</h2>
                    <p>Its not quite over for these cats</p>
                  </div>
                  <div>  
                    <Button variant="light" onClick={handleShow}>Explore</Button>
                  </div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat1.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat2.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat3.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat4.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat5.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/ncat6.jpg')} width={"300"} /></Button></div>

                </Col>
                <Col md={4} className='bg-primary text-white p-4'>
                <div>
                  <h2>PSL GOD</h2>
                  <p>Need I say more?</p>
                </div>
                <div>  
                  <Button variant="light" onClick={handleShow}>no</Button>
                </div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat1.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat2.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat3.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat4.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat5.jpg')} width={"300"} /></Button></div>
                    <div><Button onClick={handleShow} ><img src={require('./images/pcat6.jpg')} width={"300"} /></Button></div>
                </Col>
            </Row>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close 
          </Button> */}
          <Button variant="primary" >Understood</Button>
        </Modal.Footer>
      </Modal>
        </Container>
        
    );
          

}
 
export default App;