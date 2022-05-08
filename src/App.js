import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <MainNavigation />
        <div data-test="app">
          <Layout>
            <Routes>
              <Route exact path="/" element={<AllMeetupsPage />} />
              <Route exact path="/favorite-page" element={<FavoritesPage />} />
              <Route exact path="/new-meetup" element={<NewMeetupsPage />} />
            </Routes>
          </Layout>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
