import React from 'react';
import { TextField } from '@material-ui/core';

import Contact from '../../components/Contact';

import './styles.css';

export default function ListOfContacts() {


    return (
        <div style={{marginTop : "20px"}}>
            <div className="filter">
                <TextField variant="outlined" placeholder="Filter contacts..." />
            </div>
            <div className="listcontacts">
                <Contact  name="Test1" phone="1233123123" email="test1@gamil.com" contactType="personal"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
                <Contact  name="Test2" phone="1233123123" email="test1@gamil.com" contactType="professional"/>
            </div>
            
        </div>
    )
}
