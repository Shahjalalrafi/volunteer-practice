import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddEvent = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [image, setImage] = useState(null)

    const onSubmit = data => {

      const eventData = {
        name: data.event, 
        image : image
      }
      console.log(eventData)
      const url = `http://localhost:5050/addevent`
      
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };

    const handleFile = (e) => {
        console.log(e.target.files)
        const imageData = new FormData()
        imageData.set('key', "e5e7c3fd0f17a3470da9a5f0de336257")
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            console.log(response)
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="event" defaultValue="new event" ref={register} />
                <br/>
                <input name="image" type="file" onChange={handleFile} />
                <br/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;
