import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar : React.FC = () => {
    return (
        <Navbar bg = 'dark' variant = 'dark' fixed = 'top'>
        <Container style = {{ maxWidth: '100%' }}>
          <Navbar.Brand>Shop-o-mania</Navbar.Brand>
          <Nav>
            <Nav.Link as = {Link} to = "/">Home</Nav.Link>
            <Nav.Link as = {Link} to = "/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;
