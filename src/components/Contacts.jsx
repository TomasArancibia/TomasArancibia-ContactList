import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSlug()
        actions.loadContacts();
    }, []);

    return (
        <>
            <div className='cont cntr-btn'>
                <NavLink className="btn bg-success text-light mb-5" to="/new_contact">Create new Contact</NavLink>
            </div>
            <div>
                <div className='container-fluid border p-2 rounded'>
                    {store.contacts && store.contacts.length > 0 ? (
                        store.contacts.map((contact, index) => (
                            <div key={index}>
                                <div className='container-fluid border d-flex justify-content-between'>
                                    <div className='d-inline-flex p-2'>
                                        <div className='pe-3 d-flex brd justify-content-center align-items-center'>
                                            <img className='circle-element' src='https://i.pinimg.com/236x/13/71/c1/1371c163a3d785d5bb4bfd3e8c78b2fb.jpg' />
                                        </div>
                                        <div className='newcard p-2'>
                                            <div className='cst-title container-fluid'><h4 className='mb-0'>{contact.name}</h4></div>
                                            <div className='d-inline-flex'>
                                                <div>
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </div>
                                                <p className='ms-1 d-flex justify-content-center mb-0 align-items-center'>
                                                    {contact.phone}
                                                </p>
                                            </div>
                                            <div className='d-inline-flex'>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                </div>
                                                <p className='ms-1 d-flex justify-content-center mb-0 align-items-center'>
                                                    {contact.address}
                                                </p>
                                            </div>
                                            <div className='d-inline-flex'>
                                                <div>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                                <p className='ms-1 d-flex justify-content-center mb-0 align-items-center'>
                                                    {contact.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center p-1'>
                                        <NavLink className="btn bg-warning text-light m-2" to={"/edit_contact/" + contact.id}><FontAwesomeIcon icon={faPen} /></NavLink>
                                        <button className="btn bg-danger text-light m-2" onClick={() => actions.deleteContact(contact.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4 className='text-center'>No contacts in the Agenda, Please Create Contacts</h4>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contacts;