/* import '../../../public/dashboard/assets/css/app.css'; */
import { Contentwrapper } from '../../components/ContentWrapper';
import { SideBar } from '../../components/SideBarDashboard';

export const Dashboard = () => {
  return (
    <div id="wrapper">
      <SideBar/>
      <Contentwrapper/>
    </div>
  );
};
