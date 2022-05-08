import { useEffect } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMeetUp } from "./../actions/meetupAction";

export default function AllMeetupsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadMeetUps = () => dispatch(getMeetUp());
    loadMeetUps();
  }, []);

  const meetUps = useSelector(state => state.meetups.meetups);
  const error = useSelector(state => state.meetups.error);
  const loading = useSelector(state => state.meetups.loading);

  return (
    <section>
      <h1>All Meetups</h1>
      
      {error ? <p>Hubo un error</p> : null}
      {loading ? <p>Cargando</p> : null}

      <ul className={classes.list}>
        {meetUps.length === 0 ? <p>No Hay Meetups</p> : (
          meetUps.map(meetup => (
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
