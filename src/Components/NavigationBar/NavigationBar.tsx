import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar : React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop-o-mania</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;
