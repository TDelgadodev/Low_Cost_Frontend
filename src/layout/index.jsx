import { Container } from "react-bootstrap"
import Header from "../components/Header"
import styles from "./MainLayout.module.css"
import PropTypes from "prop-types"

export default function MainLayout({ children }) {
  return (
    <div className={styles.main}>
      <Header />
      <Container className="mt-5">{children}</Container >
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}