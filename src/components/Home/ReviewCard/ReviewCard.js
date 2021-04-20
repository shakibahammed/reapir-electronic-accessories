import React from 'react';

const ReviewCard = ({review}) => {

    return (
        <div className="col-md-4  d-flex justify-content-around mt-2">

          <div className="container-fluid ms-5">
      
                
           <img  className="image-fluid" style={{height:'200px'}} src={review.imageUrl} alt=""/>
            <h2>{review.name} </h2>
            <p>{review.price}, CEO</p>
            <p>{review.description}</p>


          </div>
        </div>
    );
};

export default ReviewCard;