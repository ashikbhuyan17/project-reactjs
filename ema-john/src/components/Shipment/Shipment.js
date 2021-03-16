import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    console.log(loggedInUser);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        < form onSubmit={handleSubmit(onSubmit)} className="ship-form">

            < input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="First Name" />
            { errors.name && <span className="error"> Name is required</span>}

            < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="email" />
            { errors.email && <span className="error"> Email is required</span>}

            < input name="address" ref={register({ required: true })} placeholder="address" />
            { errors.address && <span className="error"> Address is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Shipment;