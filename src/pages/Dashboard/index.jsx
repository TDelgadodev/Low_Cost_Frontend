import { Container } from 'react-bootstrap';
import { Contentwrapper } from '../../components/ContentWrapper';
import SideBar from '../../components/SideBarDashboard';

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
