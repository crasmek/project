import React from 'react';

//Array of string errors
function Errors(props){
    return props.errors.map(error => <span key={error} className="form-text text-danger">{error}</span>)
}

export default Errors;