import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
    const [locationName, setLocationName] = useState('')
    const onFormSubmit = event => {
        event.preventDefault();
        props.updateLonLat(locationName);
        setLocationName('');
    };
    const onLocationChange = event => {
        setLocationName(event.target.value);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                placeholder='location'
                name="locationName" 
                value={locationName}
                onChange={onLocationChange}
                />
            <input 
                type="submit" 
                value="Search Now!" />
        </form>
    );
}

SearchForm.propTypes = {
    updateLonLat: PropTypes.func.isRequired
}

export default SearchForm;