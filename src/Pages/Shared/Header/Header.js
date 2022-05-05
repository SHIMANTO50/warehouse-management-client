import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">warehouse management(grocery stock)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/inventory">Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="/addmyitems">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="/myitemsPage">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;