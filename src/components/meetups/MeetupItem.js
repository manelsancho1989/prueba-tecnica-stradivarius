import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

//Redux
import { useDispatch } from "react-redux";
import { updateMeetUpAction } from "../../actions/meetupAction"

export default function MeetupItem({ meetItem }) {
  const { meetUpURL, meetUpTitle, meetUpAdress, meetUpDescription, id, favorite } = meetItem;

  const dispatch = useDispatch();

  const addTofavorites = id => {
    dispatch(updateMeetUpAction(id));
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={meetUpURL} alt={meetUpTitle} />
        </div>
        <div className={classes.content}>
          <h3>{meetUpTitle}</h3>
          <address>{meetUpAdress}</address>
          <p>{meetUpDescription}</p>
        </div>
        {favorite === true ? null :
          <div className={classes.actions}>
            <button
              type="button"
              onClick={() => addTofavorites(id)}
            >
              Add to favorites
            </button>
          </div>
        }
      </Card>
    </li>
  );

}
