import React from 'react';
import './ApiError.css';

function ApiError(props) {
  return (
    <div className="error-message">
        <h1>{props.error.errorMessage}</h1>
    </div>
  )
}

export default ApiError