import React from 'react';

const Step3 = ({ prevStep, values, handleChange }) => {
    const submitForm = () => {
        console.log(values);
    };

    return (
        <div>
            <h2>Step 3: Contact Information</h2>
            <input
                type="text"
                placeholder="Enter your phone"
                value={values.phone}
                onChange={handleChange('phone')}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={submitForm}>Submit</button>
        </div>
    );
};

export default Step3;