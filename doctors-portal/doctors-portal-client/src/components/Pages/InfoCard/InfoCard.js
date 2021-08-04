import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ infoDataItem }) => {
    return (
        <div className='col-lg-4 '>
            <div className={` d-flex align-items-center text-white info-${infoDataItem.bg}`}>

                <div className='button-items'>
                    <span><FontAwesomeIcon icon={infoDataItem.icon} /></span>
                </div>
                <div className='rules-requirement-heading'>
                    <h6>{infoDataItem.title}</h6>
                    <p>{infoDataItem.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;