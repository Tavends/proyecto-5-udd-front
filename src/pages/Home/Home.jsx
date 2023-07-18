import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import Products from '../Products/Products.jsx';
import "./home.css"

export function Home() {
  const userCtx = useContext( UserContext )
  const { user, verifyingToken, authStatus } = userCtx

  return (
    <Container>
      <h1>{ `Bienvenido ${ user?.fullName || "sin nombre" }` }</h1>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://saboryestilo.com.mx/wp-content/uploads/2020/08/Licores-Ejemplos.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="color-red">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1544782321-8fab42cfd62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st3.depositphotos.com/1063437/13221/i/450/depositphotos_132218858-stock-photo-bottles-of-assorted-hard-liquor.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Products className="Catalogo">
      </Products>
    </Container>
  )
}