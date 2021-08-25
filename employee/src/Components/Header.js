import React from 'react'
import { Nav, NavDropdown, Container, Navbar, Button } from 'react-bootstrap'


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand ><Button variant="success">Add Employee</Button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Logout</Nav.Link>
                            <NavDropdown title="User Info" id="basic-nav-dropdown">
                                <NavDropdown.Item >Faizan Ahmad Siddiqui</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item ><img src={mypic} /></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
