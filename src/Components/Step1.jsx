import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
    return (
        <div>
            <h2>Step 1: Basic Information</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange('name')}
            />
            <input
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange('email')}
            />
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;
