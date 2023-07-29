import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
    return (
        <Card /* className="w-50" */>
            <Card.Img variant="top" src="./auto.jpg" style={{ width: '100%', margin: '0 auto' }} />
            <Card.Body>
                <Card.Title>MOTOMEL CG 150. Cilindrada: 149,5 cc. </Card.Title>
                <Card.Text>
                    <b>$39.9999</b>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%' }}>Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;