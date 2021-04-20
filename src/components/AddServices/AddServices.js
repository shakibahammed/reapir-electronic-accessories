import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddServices = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [imageUrl, setImageUrl] = useState(null);

    //  handleImageUpload
    const handleImageUpload = (e) =>{
    
    const imageData = new FormData();
    imageData.set("key", "d2b7cc31100497b623f3b21690ff6b96");
    imageData.append("image", e.target.files[0]);

    axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then(function (response) {
      console.log(response.data.data.display_url)
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

    }

        
    // onSubmit
    const onSubmit = (data) => {
      console.log(data);
      const serviceDetails = {
        name: data.name,
        imageUrl: imageUrl,
        price: data.servicePrice,
      
      };
      const url =`http://localhost:5000/addServices`;

      
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(serviceDetails),
      })
      .then((res) => console.log("server side response", res));

    };

    return (
        <div className="container-fluid row">
        <div className="col-md-4 col-sm-12">
         <Sidebar></Sidebar>
        </div>

        <div  className="col-md-7 col-sm-12">
        <h1>this is AddServices</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        <input class="form-control" name="name" placeholder="Service Name" ref={register} />
        <br />
        <input class="form-control" name="servicePrice"    placeholder="Price"  type="number"  ref={register} />
        <br />
        <input class="form-control form-control-lg" name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br />
        <input class="btn btn-primary" type="submit" />
      </form>
        </div>
     </div>
    );
};

export default AddServices;