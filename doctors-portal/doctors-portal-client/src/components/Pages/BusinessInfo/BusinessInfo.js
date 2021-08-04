import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infosData = [
        {
            title: "Opening Hours",
            description: "Lorem ipsum dolor sit  amet .",
            icon: faClock,
            bg: 'primary'

        },
        {
            title: "Visit Our Location",
            description: 'Brooklyn,United States',
            icon: faMapMarker,
            bg: 'dark'
        },
        {
            title: "Contact us now",
            description: "000 967 757767",
            icon: faPhone,
            bg: 'primary'

        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infosData.map(infoData => <InfoCard infoDataItem={infoData}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;