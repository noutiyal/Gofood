
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Navbarmain() {
  const navigate = useNavigate()

  const handellogOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div className='sticky-top'>
      <Navbar expand="lg" className="bg-success ">
        <Container fluid>
          <Navbar.Brand className='fs-1 fst-italic'>Gofood</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => { navigate("") }}><strong className='fs-4 text-light'>Home</strong></Nav.Link>
              {localStorage.getItem("token") ? <Nav.Link onClick={() => { navigate("") }}><strong className='fs-4 text-light'>MY Orders</strong></Nav.Link> : ""}
            </Nav>
            <div className='d-flex '>
              {localStorage.getItem("token") ? <><button className="btn bg-white text-success mx-1" >My Cart</button><button className="btn bg-white text-danger mx-1" onClick={() => handellogOut()}>logOut</button></> : <><button className="btn bg-white text-success mx-1" onClick={() => { navigate("/login") }}>login</button><button className="btn bg-white text-success mx-1" onClick={() => { navigate("/signup") }}>SignUp</button> </>}
            </div>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmain;