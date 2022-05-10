import classes from "./../components/meetups/MeetupList.module.css";
import MeetupItem from "../components/meetups/MeetupItem";
import { useSelector, useDispatch } from "react-redux";
import { getFavoritesMeetUpAction } from "./../actions/meetupAction";
import { useEffect } from "react";

export default function FavoritesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFavoriteMeetUps = () => dispatch(getFavoritesMeetUpAction());
    loadFavoriteMeetUps();
  }, []);

  const favoriteMeetUps = useSelector(state => state.meetups.favorites);
  const error = useSelector(state => state.meetups.error);
  const loading = useSelector(state => state.meetups.loading);

  return (
    <section>
      <h1>Favorites Page</h1>
      {error ? <p>Hubo un error</p> : null}
      {loading ? <p>Cargando</p> : null}
      <ul className={classes.list}>
        {favoriteMeetUps.length === 0 ? <p>No Hay Meetups</p> : (
          favoriteMeetUps.map(meetup => (
            <MeetupItem
              key={meetup.id}
              meetItem={meetup}
            />
          ))
        )}
      </ul>
    </section>
  );
}
