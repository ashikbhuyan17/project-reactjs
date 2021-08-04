import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = ({ servicesItems }) => {
    return (
        <div className="col-lg-4">
            <div className="main-div-for-treatment-option text-center">
                <div className="img-div">
                    <img src={servicesItems.img} alt="" />
                </div>
                <div className="treatment-heading">
                    <h5 className="mb-3 mt-3">{servicesItems.name}</h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi repellendus at consequuntur quos, dignissimos aliquam!</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;