import App from 'components/App';
import HomeRoute from './Home';
import HistoryRoute from './History';
import ShareRoute from './Share';

export default {
  path: '/',
  component: App,
  indexRoute: HomeRoute,
  childRoutes: [
    HistoryRoute,
    ShareRoute
  ]
};
