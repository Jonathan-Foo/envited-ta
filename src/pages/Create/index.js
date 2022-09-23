import React from 'react';
import { useState } from 'react';
import CreateStyleWrapper, {ImageUploader} from './create.style';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers';
import {TextField} from '@mui/material';
import useInfo from '../../hooks/useInfo';



const Create = () => {
  const navigate = useNavigate();
  const [
      startTimeDate,
      setStartTimeDate,
      endTimeDate,
      setEndTimeDate,
      eventName,
      setEventName,
      hostName,
      setHostName,
      image,
      setImage,
      location,
      setLocation    
  ] = useInfo();  

  return (
    <CreateStyleWrapper image={image}>
      <h1>Create your event!</h1>
      <form >
        <div className='imageUpload'>
          <label htmlFor="image"></label>
          <input 
          id='image'
          type="file"
          name='images'
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]))
          }}
          accept="image/png, image/jpeg, image/webp"
          />
        </div>
        <div className='input'>
          <label htmlFor="eventName">🎉 Name of the event </label>
          <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)}/>
        </div>
        <div className='input'>
          <label htmlFor="hostName">🥳 The host with the most</label>
          <input type="text" id="hostName" value={hostName} onChange={(e) => setHostName(e.target.value)}/>
        </div>
        <div className='input'>
          <label htmlFor="location">📍 The special location</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className='input'>
          <label htmlFor="startTimeDate">🟢 When it starts</label>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label=" "
            value={endTimeDate}
            id="startTimeDate"
            onChange={(newValue) => {
              console.log(newValue);
              setEndTimeDate(newValue);
            }}
          />
        </div>
        <div className='input'>
          <label htmlFor="endTimeDate">🛑 When it should end</label>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label=" "
            value={startTimeDate}
            id="endTimeDate"
            onChange={(newValue) => {
              setStartTimeDate(newValue);
            }}
          />
        </div>
        <Button
          onClick={() => navigate('/event')}
          text="Next" 
        />
      </form>
    </CreateStyleWrapper>
  )
}

export default Create
