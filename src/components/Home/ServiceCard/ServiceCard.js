import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = ( {service}) => {
    // console.log(service)
    const {_id,imageUrl,name,price}=service
    const history = useHistory();
    const handleServices = (id) => {
          history.push(`/checkOut/${id}`);
    }

    return (
        <div className="col-md-4 d-flex justify-content-around mt-2">
            <div>
              <img src={imageUrl} alt=""/>
                <p>{name}</p>
                <p>cost: {price}$</p>
                <button className="mb-5 btn btn-primary" onClick={ () => handleServices(_id)}>Get Service</button>
            </div>
        </div>
    );
};

export default ServiceCard;