import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../assets/sp-tengwar-128.svg?react";

export function TerminalNavbar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    <div>
                        <Logo style={{ height: "4rem", width: "4rem" }} />
                        &nbsp; &nbsp;
                        <Navbar.Brand href="#home" >Peterss7</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="projects/demo-site">This Website</NavDropdown.Item>
                                    <NavDropdown.Item href="projects/tmd">
                                        The Meaning Discordancy
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="projects/misc">Misc. Projects</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="projects/non-technical">
                                        Other Projects
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="about">About</Nav.Link>
                                <Nav.Link href="contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
