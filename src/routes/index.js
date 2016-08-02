import App from 'components/App';
import GameRoute from './Game';
import AboutRoute from './About';
import HistoryRoute from './History';
import ShareRoute from './Share';

export default {
  path: '/',
  component: App,
  indexRoute: GameRoute,
  childRoutes: [
    AboutRoute,
    HistoryRoute,
    ShareRoute
  ]
};
