import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './styles.css';
export default function Form() {

    // Definition of the State
    
    interface IState {
        name: string;
        email: string;
        phone: string;
        contactType: string;
    }

    // State management using Hooks

    const [state, setState] = useState<IState>({
        name: "",
        email: "",
        phone: "",
        contactType: "personal"
    })

    // Input handlers

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "type") {
            setState({ ...state, contactType: event.target.value  })
        }else {
            setState({ ...state, [event.target.name]: event.target.value  })
        }
    };


    return (
        <div>
            <header>Add Contact</header>
            <div className="inputs">
                <TextField name="name" variant="outlined" placeholder="Name" value={state.name} onChange={handleChange} />
                <TextField name="email" variant="outlined" placeholder="E-mail" value={state.email} onChange={handleChange} />
                <TextField name="phone" variant="outlined" placeholder="Phone" value={state.phone} onChange={handleChange} />
            </div>
            <div className="radiogroup">
                <Typography variant="subtitle1">Contact Type</Typography>
                <FormControl component="fieldset">
                <RadioGroup aria-label="type" name="type" value={state.contactType} onChange={handleChange}>
                    <FormControlLabel value="personal" control={<Radio />} label="Personal" />
                    <FormControlLabel value="professional" control={<Radio />} label="Professional" />
                </RadioGroup>
                </FormControl>
            </div>
            <div className="sendbutton">
                <Button variant="contained" color="primary" onClick={() => console.log(state)}>Add Contact</Button>
            </div>
        </div>
    )
}
