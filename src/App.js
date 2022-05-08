import { useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
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
    </Router>
  );
}

export default App;
