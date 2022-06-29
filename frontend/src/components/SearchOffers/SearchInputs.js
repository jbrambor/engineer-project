import { DatePicker } from '@mui/lab';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { theme } from 'modules/uiTheme';
import { React, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const SearchInputs = () => {
    let navigate = useNavigate();
    const urlParams = useParams();
    const selectedCheckInDate = urlParams.check_in ? urlParams.check_in : '';
    const selectedCheckOutDate = urlParams.check_out ? urlParams.check_out : '';
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isInputError, setInputError] = useState(true);
    const [currentType, setCurrentInput] = useState(null);
    const [options, setOptions] = useState([]);
    const endpoint = `http://localhost:8000/hotels/locations/en-gb/${currentType}`;
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data;
                setOptions(hotelsResults);
                setLoading(false);
                setInputError(false);
            });
    }; 
    // useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    function GetNewOptions() {
        setOptions([]);
        if (currentType.length >= 3)  {
            setLoading(true);
            setTimeout(() => {
                GetDataFromAPI(endpoint);
            }, 1000);
        }
        else {
            setInputError(true);
        }
        
    }
    const [locationName, setLocationName] = useState(null);
    const [guestsCount, setGuestsCount] = useState(null);
    const RouterSearch = () => {
        let path = `/search/${locationName.dest_id}/${checkInDate}/${checkOutDate}/${guestsCount}/3`; 
        // http://localhost:8000/hotels/search/:locale/:checkout_date/:checkin_date/:dest_id/:adults_number/:room_number****

        navigate(path);
    };
    return (
        <Stack 
            direction="row" 
            spacing={2}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            <Autocomplete
                noOptionsText={isInputError ? 'Type at least 3 letters' : isLoading ? 'Loading...' : 'No options'}
                options = {options}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.dest_id === value.dest_id}
                onChange={(option, value) => {
                    setLocationName(value);
                }}
                style={{
                    minWidth: '250px',
                }}
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Location"
                        variant="filled"
                        onChange={(name) => {
                            setCurrentInput(name.target.value);
                            // console.log(currentType);
                        }}
                        onInput={GetNewOptions}
                    />
                }
            />
            <DatePicker 
                label="Check In"
                renderInput={(params) => <TextField variant="filled" {...params}/>}
                value={selectedCheckInDate ? selectedCheckInDate : checkInDate}
                format="yyyy-MM-dd"
                onChange={(newValue) => {
                    let year = newValue.getFullYear();
                    let month = newValue.getMonth()+1;
                    let day = newValue.getDate();
                    setCheckInDate(`${year}-${month < 10 ? `0${month}` : month}-${day}`);

                }}
                
            />
            <DatePicker 
                label="Check Out"
                renderInput={(params) => <TextField variant="filled" {...params}/>}
                value={selectedCheckOutDate ? selectedCheckOutDate : checkOutDate}
                onChange={(newValue) => {
                    let year = newValue.getFullYear();
                    let month = newValue.getMonth()+1;
                    let day = newValue.getDate();
                    setCheckOutDate(`${year}-${month < 10 ? `0${month}` : month}-${day}`);
                }}
            />
            <TextField 
                label="Guests"
                variant="filled"
                type="number"
                onChange={(guestsCountValue) => {
                    setGuestsCount(guestsCountValue.target.value);
                }}
            />
            <div className="search__submit">
                <Button
                    style={{
                        backgroundColor: theme.colors.secondary60,
                        height: '100%',
                        minWidth: '150px',
                        borderRadius: '8px'
                    }} 
                    className='search__submit--button' 
                    variant="contained"
                    onClick={RouterSearch}
                >
                    Search
                </Button>
            </div>
        </Stack>
    );
};
