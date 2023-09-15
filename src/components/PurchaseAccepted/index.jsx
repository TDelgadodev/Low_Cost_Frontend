import { Container } from "react-bootstrap";
import styles from './PurchaseAccepted.module.css'


export default function PurchaseAccepted() {
    return (
        <Container className={`${styles.Container} px-5 py-5`}>
            <img src="/acept.png" alt="deny" className="pb-4" />
            <p>
                ¡La compra fue realizada exitosamente!
                <br />
                En instantes nuestro equipo de ventas se pondrá en contacto contigo vía email.
            </p>
            <a href="/">Volver al sitio principal</a>
        </Container>
    )
}