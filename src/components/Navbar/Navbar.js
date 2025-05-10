import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Nbr() {
    return (
        // Navbar component from bootstrap
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container className="d-flex justify-con">
                        <Navbar.Brand href="#home">logo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#featur">Featur</Nav.Link>
                            <Nav.Link href="#pricinge">Pricinge</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Nbr;
