import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { Chip, Typography, Button  } from '@material-ui/core';
import './styles.css'

export default function Contact(props: {name: string, email: string, phone: string, contactType: string}) {
    return (
        <div className="content">
            <Typography variant="h6" color="primary">
                {props.name}
            </Typography>
            <Chip color={props.contactType === "personal" ? "primary" : "secondary"} label={props.contactType === "personal" ? "Personal" : "Professional"}></Chip>
            <div className="detail">
                <MailIcon />
                <Typography variant="subtitle1">{props.email}</Typography>
            </div>
            <div className="detail">
                <PhoneIcon />
                <Typography variant="subtitle1">{props.phone}</Typography>
            </div>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    )
}
