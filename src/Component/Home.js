import React, { useEffect, useState } from 'react';

const Home = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5050/events`)
        .then(res => res.json())
        .then(data => console.log(data))
        // start from here
    }, [])

    return (
        <div>
            <h3>this is home page</h3>
        </div>
    );
};

export default Home;