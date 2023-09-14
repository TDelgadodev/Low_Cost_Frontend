import { Container } from "react-bootstrap";
import styles from './PurchaseDenied.module.css'


export default function PurchaseDenied() {
    return (
        <Container className={`${styles.Container} px-5 py-5`}>
            <img src="/deny.png" alt="deny" className="pb-4" />
            <p>
                La compra no fue realizada.
                <br />
                Volvé a intentarlo en unos minutos, o comunícate con nuestro equipo de ventas.
            </p>
            <a href="/">Volver al sitio principal</a>
        </Container>
    )
}