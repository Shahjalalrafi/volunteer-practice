import React, { useEffect, useState } from 'react';
import Event from './Event';

const Home = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5050/events`)
        .then(res => res.json())
        .then(data => setEvent(data))
        // start from here
    }, [])

    return (
        <div>
            {
                event.map(ev => <Event dataDetails={ev} />)
            }
        </div>
    );
};

export default Home;