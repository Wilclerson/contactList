import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            phone,
            address
        };
        actions.addContact(newContact);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

        navigate("/");
    };
// (?)need to refresh to see updated page
    return (
        <div style={{ width: '50rem', marginTop: '2rem' }}>
            <h2 className="d-flex justify-content-center">Add New Contact</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex flex-wrap">
            <label for="name" className="form-label">Full Name</label>
                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter Full Name" />
            </div>
            <div className="mb-3">
            <label for="email" className="form-label">Email</label>
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter Email" />
            </div>
            <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
                <input className="form-control" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
            <label for="address" className="form-label">Address</label>
                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Enter Address" />
            </div>
                <button type="submit" className="btn btn-primary" style={{ width: '50rem' }}>Save</button>
                {/* (?)link above do not fetch */}
            </form>
            <Link to="/">
 				or get back to contacts
			</Link>
        </div>
    );
};
