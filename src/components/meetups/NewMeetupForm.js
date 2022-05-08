import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

//Actions Redux
import { createNewMeetUp } from '../../actions/meetupAction';

export default function NewMeetupForm() {

  //State
  const [meetUpTitle, saveMeetUpTitle] = useState('');
  const [meetUpURL, saveMeetUpURL] = useState('');
  const [meetUpAdress, saveMeetUpAdress] = useState('');
  const [meetUpDescription, saveMeetUpDescription] = useState('');
  const favorite = false;

  //Use usedispatch
  const dispatch = useDispatch();

  const charging = useSelector(state => state.meetups.loading);
  const error = useSelector(state => state.meetups.error);

  //Call action meetupAction
  const addMeetUp = meetUp => dispatch(createNewMeetUp(meetUp));

  //when the user submits
  const submitHandler = e => {
    e.preventDefault();

    //Validate form
    if (meetUpTitle.trim() === '' || meetUpURL.trim() === '' || meetUpAdress.trim() === '' || meetUpDescription.trim() === '') {
      return;
    }

    //if not Error

    //Create new MeetUp
    addMeetUp({
      meetUpTitle,
      meetUpURL,
      meetUpAdress,
      meetUpDescription,
      favorite: favorite
    });
    console.log('added');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            value={meetUpTitle}
            onChange={e => saveMeetUpTitle(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            value={meetUpURL}
            onChange={e => saveMeetUpURL(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={meetUpAdress}
            onChange={e => saveMeetUpAdress(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={meetUpDescription}
            onChange={e => saveMeetUpDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button
            type='submit'
          >
            Add Meetup
          </button>
        </div>

      </form>
      {charging ? <p>Cargando...</p> : null}
      {error ? <p>Hubo un error </p> : null}
    </Card>
  );
}
