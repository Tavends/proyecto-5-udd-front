import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import axiosClient from "../../config/axios.jsx";
import UserContext from '../../contexts/user/UserContext.jsx';
import "./products.css"

export const Products = () => {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
 const [ products, setProducts ] = useState( [] )
 
  useEffect( () => {
    const getProductsFromDB = async () => {
      const axiosRes = await axiosClient.get( '/products' )
      setProducts( axiosRes.data )
    }
    try {
      getProductsFromDB()
    } catch ( error ) {
      console.error( error )
      alert( error.message )
    }
  }, [] )
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Catálogo de productos de { user?.fullName || "invitado" }</h1>
        </Col>
      </Row>
      <Container className='Catalogo'>
        { products.map( product => {
          return ( 
          <ProductCard key={ product._id } product={ product } productViewPath={ `/products/${ product._id }` }></ProductCard>
         ) } )
        }
      </Container>
    </Container>

  )
}

export default Products