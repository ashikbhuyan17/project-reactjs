import React from 'react';

import fluoride from '../../../images/fluoride.png'
import Whitening from '../../../images/Whitening.png'
import cavity from '../../../images/cavity.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

import './Services.css'
const Services = () => {
    const servicesData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: Whitening
        }
    ]
    return (
        <section className="services-container my-5">
            <div className="text-center customize-of-heading">
                <h6>Our Services</h6>
                <h1>Services We Provide</h1>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
                <div className="row w-75">
                    {
                        servicesData.map(service => <ServiceDetails servicesItems={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;