import { DatePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { React, useState } from 'react';


export const SearchInputs = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <Stack 
            direction="row" 
            spacing={2}
        >
            <TextField
                label="Location"
                variant="filled"
            />
            <DatePicker 
                label="Check In"
                renderInput={(params) => <TextField variant="filled" {...params}/>}
                value={checkInDate}
                onChange={(newValue) => {
                    setCheckInDate(newValue)
                }}
                
            />
            <DatePicker 
                label="Check Out"
                renderInput={(params) => <TextField variant="filled" {...params}/>}
                value={checkOutDate}
                onChange={(newValue) => {
                    setCheckOutDate(newValue)
                }}
            />
            <TextField 
                label="Guests"
                variant="filled"
            />
            
        </Stack>
    )
}
