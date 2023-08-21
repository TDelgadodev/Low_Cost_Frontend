import { Col, Container, Row } from "react-bootstrap"
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <Container className={`${styles.footerContainer}`} fluid>
        <Row>
          <Col sm={12} md={6} className="p-4">
            <img src="/logowhite.png" alt="" className={`${styles.footerLogo}`} />
            <p className={`${styles.footerText}`}>Más de 15.000 Productos para tu satisfacción. <br /> Confiabilidad para lo que importa.</p>
            <a href="#"><FacebookIcon className={`${styles.footerIcons}`}></FacebookIcon></a>
            <a href="#"><TwitterIcon className={`${styles.footerIcons}`}></TwitterIcon></a>
            <a href="#"><InstagramIcon className={`${styles.footerIcons}`}></InstagramIcon></a>
            <a href="#"><LinkedInIcon className={`${styles.footerIcons}`}></LinkedInIcon></a>
            <a href="#"><YouTubeIcon className={`${styles.footerIcons}`}></YouTubeIcon></a>
          </Col>
          <Col sm={12} md={6} className="p-4">
            <h4 className={`${styles.footerTitle}`}>¡Contactáme!</h4>
            <p className={`${styles.footerText}`}><EmailIcon className={`${styles.contactIcons}`}></EmailIcon>gabrielnicolas.dg@gmail.com</p>
            <p className={`${styles.footerText}`}><LocalPhoneIcon className={`${styles.contactIcons}`}></LocalPhoneIcon>(+54) 9 11 3903 - 4290</p>
            <p className={`${styles.footerText}`}><FmdGoodIcon className={`${styles.contactIcons}`}></FmdGoodIcon>Vieytes 730. Presidente Derqui. Pilar. CP1635</p>
          </Col>
          <Col sm={12} className={`${styles.footerCopyright}`}>
            <p className={`${styles.footerTextCopyright}`}>© 2023 All rights reserved <br /> This website is made with ❤️ by T&G STUDIO</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer

