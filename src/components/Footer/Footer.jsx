import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>¡Te invitamos!</Card.Title>
          <Card.Text>
          "A Sumérgirte en el mundo de los sabores y la historia en nuestra licorería Pasto Seco. Descubre la pasión detrás de nuestra fundación, una inspiradora historia de amor por destilados artesanales que nos impulsa a ofrecerte la mejor selección de licores con un toque de tradición y modernidad."
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>¡Visitanos!</Card.Title>
          <Card.Text>
            +569 88 28 25 24
            Calle falsa 123
            Region metropolitana.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>!Escribenos!</Card.Title>
          <Card.Text>
            contacto@Pastoseco.cl
            servicio.al.cliente@Pastoseco.cl
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;