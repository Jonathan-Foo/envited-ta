import React, { useState } from 'react'


function useInfo() {
    const [startTimeDate, setStartTimeDate] = useState(null);
    const [endTimeDate, setEndTimeDate] = useState(null);
    const [eventName, setEventName] = useState('');
    const [hostName, setHostName] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    
    return [
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
    ]
}

export default useInfo;
