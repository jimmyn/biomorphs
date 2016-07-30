import App from 'components/App';
import HomeRoute from './Home';
import HistoryRoute from './History';

export default {
  path: '/',
  component: App,
  indexRoute: HomeRoute,
  childRoutes: [
    HistoryRoute
  ]
};
