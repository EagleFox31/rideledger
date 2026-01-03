
import { createBrowserRouter } from 'react-router-dom';
import Authentication from '../pages/Authentication';
import AdminDashboard from '../pages/AdminDashboard';
import DriverDashboard from '../pages/DriverDashboard';
import DriverDashboard2 from '../pages/DriverDashboard2';
import AdminRideManagement from '../pages/AdminRideManagement';
import AdminDriversAndRules from '../pages/AdminDriversAndRules';
import AdminBudgetAndReports from '../pages/AdminBudgetAndReports';
import DriverHistory from '../pages/DriverHistory';
import DriverHistory2 from '../pages/DriverHistory2';
import Notifications from '../pages/Notifications';
import AccountSettings from '../pages/AccountSettings';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Authentication />,
      },
      {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/driver/dashboard',
        element: <DriverDashboard />,
      },
      {
        path: '/driver/dashboard2',
        element: <DriverDashboard2 />,
      },
      {
        path: '/admin/ride-management',
        element: <AdminRideManagement />,
      },
      {
        path: '/admin/drivers-and-rules',
        element: <AdminDriversAndRules />,
      },
      {
        path: '/admin/budget-and-reports',
        element: <AdminBudgetAndReports />,
      },
      {
        path: '/driver/history',
        element: <DriverHistory />,
      },
      {
        path: '/driver/history2',
        element: <DriverHistory2 />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
      {
        path: '/settings',
        element: <AccountSettings />,
      },
    ],
  },
]);
