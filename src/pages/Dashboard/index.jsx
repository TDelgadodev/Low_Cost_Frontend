/* import '../../../public/dashboard/assets/css/app.css'; */
import { Container } from 'react-bootstrap';
import { Contentwrapper } from '../../components/ContentWrapper';
import SideBar from '../../components/SideBarDashboard';
/* import styles from './Dashboard.module.css' */

export const Dashboard = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <Container className='py-5'>
        <Contentwrapper />
      </Container>
    </div>
  );
};
