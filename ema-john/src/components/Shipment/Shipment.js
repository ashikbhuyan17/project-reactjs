import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'
import ProcessPayment from '../ProcessPayment/ProcessPayment'

const Shipment = () => {
    document.title = "Shipment"
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [shippingData, setShippingData] = useState(null)
    console.log(loggedInUser);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log("data", data)
        setShippingData(data)

    };
    const handlePaymentSuccess = paymentId => {
        const savedCart = getDatabaseCart()
        const orderDetails = {
            ...loggedInUser,
            products: savedCart,
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        }
        console.log("order Details ", orderDetails);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("database data ", data);
                    processOrder()   //for data clear form databaseManager
                    alert('your order placed successfully')
                }
            })
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div class="row">
            <div style={{ display: shippingData ? 'none' : 'block' }} class="col-md-6">
                < form onSubmit={handleSubmit(onSubmit)} className="ship-form">

                    < input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="First Name" />
                    {errors.name && <span className="error"> Name is required</span>}

                    < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="email" />
                    {errors.email && <span className="error"> Email is required</span>}

                    < input name="address" ref={register({ required: true })} placeholder="address" />
                    {errors.address && <span className="error"> Address is required</span>}

                    < input name="phone" ref={register({ required: true })} placeholder="your phone Number" />
                    {errors.phone && <span className="error"> Phone Number is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div style={{ display: shippingData ? 'block' : 'none' }} class="col-md-4 m-3 ">
                <h1>please Pay for me </h1>
                <br />
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>

        </div>
    );
};

export default Shipment;