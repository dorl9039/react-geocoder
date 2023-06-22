import React from 'react';
import PropTypes from 'prop-types';
import './ErrorAlert.css'

const ErrorAlert = (props) => {
    return (
        props.errorState && 
            (<div className='error-alert-container'>
                <h2>Uh oh! Error!</h2>
                <p>Unable to geocode</p>
            </div>)
    );
}

ErrorAlert.propTypes = {
    errorState: PropTypes.bool.isRequired
}

export default ErrorAlert;