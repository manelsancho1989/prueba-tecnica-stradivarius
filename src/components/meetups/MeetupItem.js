import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";


export default function MeetupItem({ meetItem }) {
  const { meetUpURL, meetUpTitle, meetUpAdress, meetUpDescription } = meetItem;

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
        <div className={classes.actions}>
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
  
}
