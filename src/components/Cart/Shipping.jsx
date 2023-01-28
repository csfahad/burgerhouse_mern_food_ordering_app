import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { Country, State } from "country-state-city"

const Shipping = () => {

    const { shippingInfo } = useSelector((state) => state.cart);

    const [hNo, setHNo] = useState(shippingInfo.hNo);
    const [city, setCity] = useState(shippingInfo.city);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: "addShippingInfo",
            payload: {
                hNo,
                city,
                state,
                country,
                pinCode,
                phoneNo,
            },
        });

        localStorage.setItem(
            "shippingInfo",
            JSON.stringify({
                hNo,
                city,
                state,
                country,
                pinCode,
                phoneNo,
            })
        );

        navigate("/confirmorder");
    };

    return (
        <section className="shipping">
            <motion.main initial={{
                x: "-100vw",
                opacity: 0,
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}>
                <h1>Shipping Details</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>House no.</label>
                        <input
                            type="text"
                            placeholder='Enter House no.'
                            value={hNo}
                            required
                            onChange={(e) => setHNo(e.target.value)} />
                    </div>
                    <div>
                        <label>City</label>
                        <input
                            type="text"
                            placeholder='Enter City'
                            value={city}
                            required
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label>Country</label>
                        <select
                            value={country}
                            required
                            onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Country</option>
                            {Country && Country.getAllCountries().map(i => (
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                    {country && (
                        <div>
                            <label>State</label>
                            <select
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="">State</option>
                                {State &&
                                    State.getStatesOfCountry(country).map((i) => (
                                        <option value={i.isoCode} key={i.isoCode}>
                                            {i.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}
                    <div>
                        <label>Pin code</label>
                        <input
                            type="number"
                            placeholder='Enter Pin code'
                            required
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)} />
                    </div>
                    <div>
                        <label>Mobile no.</label>
                        <input
                            type="number"
                            placeholder='Enter your mobile no.'
                            value={phoneNo}
                            required
                            onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>

                    <button type='submit'>Confirm Order</button>
                </form>
            </motion.main>
        </section>
    )
}

export default Shipping