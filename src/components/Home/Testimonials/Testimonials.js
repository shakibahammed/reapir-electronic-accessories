import React, { useEffect, useState } from 'react';
import CEO_1 from '../../../images/ceo1.jpg'
import CEO_2 from '../../../images/ceo2.jpg'
import CEO_3 from '../../../images/ceo3.jpg'
import ReviewCard from '../ReviewCard/ReviewCard';



    

const Testimonials = () => {

    const [reviews , setReviews] =useState([])
    useEffect( () => {
        fetch('https://afternoon-woodland-27162.herokuapp.com/reviewInfo')
        .then(res => res.json())
        .then(data => setReviews(data))
        
        
        }, [])
    return (
        <div>
            <h1 className="text-center mt-5">Testimonials</h1>
           <div className="row">
           {
                reviews.map(review => <ReviewCard review={review}></ReviewCard>)
            }
           </div>

        </div>
    );
};

export default Testimonials;