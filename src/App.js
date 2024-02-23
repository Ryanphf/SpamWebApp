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

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
 
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Container className="text-center my-5">
            <Row>
                <Col md={4} className="bg-primary text-white p-4">
                    <h2>Subhuman</h2>
                    <p>Cats that need to ropemaxx</p>
                    <Button variant="light" onClick={handleShow}>
                      Click me
                    </Button>
                </Col>
                <Col md={4} className="bg-secondary text-white p-4">
                    <h2>Normie</h2>
                    <p>Its not quite over for these cats</p>
                    <Button variant="light">Explore</Button>
                </Col>
                <Col md={4} className='bg-primary text-white p-4'>
                  <h2>PSL GOD</h2>
                  <p>Need I say more?</p>
                  <Button variant="light">no</Button>
                </Col>
            </Row>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
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
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </Container>
        
    );
}
 
export default App;