import React from 'react'
import EventStyleWrapper from './event.style';
import useInfo from '../../hooks/useInfo';

const Event = () => {
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

  console.log(eventName);

  return (
    <EventStyleWrapper>
      <img src={image} alt="event image"/>
      <div className='information'>
        <h1>{eventName}</h1>
      </div>
    </EventStyleWrapper>
  )
}

export default Event
