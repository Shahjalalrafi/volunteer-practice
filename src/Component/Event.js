import React from 'react';

const Event = ({ dataDetails }) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:5050/deleteEvent/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log('delete succesfully', data))
    }

    const details = dataDetails.image ? <div>
        <img src={dataDetails.image} alt=""></img>
        <h1>name: {dataDetails.name} <button onClick={() => handleDelete(dataDetails._id)}>delete</button></h1>
    </div> : ''


    return (
        <div>
            {details}
        </div>
    );
};

export default Event;