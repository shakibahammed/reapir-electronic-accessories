import React from 'react';
import  IT from '../../../images/it1.jpg' 

const AboutUs = () => {
    return (
        <section className="row mt-5 d-flex align-items-center">
            <h1 className="text-center mt-2">About Us</h1>
            <div className="col-md-5">
            <img style={{marginLeft:'80px'}} className="image-fluid" src={IT} alt=""/>
            </div>
            <div className="col-md-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus culpa expedita et, ratione ipsam laborum doloribus ducimus maxime corrupti, officiis asperiores, illum eius labore assumenda dolorem nam odit minus harum.
            </div>

        </section>
    );
};

export default AboutUs;