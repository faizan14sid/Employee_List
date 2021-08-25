import React from 'react'
import { Nav, NavDropdown, Container, Navbar, Button } from 'react-bootstrap'
import AddEmployee from './AddEmployee';
import userImage from './mypic.jpg';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand ><AddEmployee /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"> </Nav>
                        <Nav>
                            <Nav.Link href="#link">Logout</Nav.Link>
                            <NavDropdown title="User Info" id="basic-nav-dropdown">

                                <NavDropdown.Item ><img src={userImage} alt="userImage" style={{ width: 50, height: 50, borderRadius: 25 }} /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Faizan Ahmad Siddiqui</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
