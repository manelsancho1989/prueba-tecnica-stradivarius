import classes from "./MainNavigation.module.css";

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFavoritesMeetUpAction } from "./../../actions/meetupAction";
import { useEffect } from "react";

export default function MainNavigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFavoriteMeetUps = () => dispatch(getFavoritesMeetUpAction());
    loadFavoriteMeetUps();
  }, []);

  const countFavoriteMeetUps = useSelector(state => state.meetups.favorites).length;

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>All Meetups</Link>
          </li>

          <li>
            <Link to={'/new-meetup'}> Add New Meetup</Link>
          </li>
          <li>
            <Link to={'/favorite-page'}>
              My Favorites
              <span className={classes.badge}>{countFavoriteMeetUps}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
