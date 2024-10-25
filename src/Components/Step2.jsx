import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <div>
            <h2>Step 2: Address Information</h2>
            <input
                type="text"
                placeholder="Enter your address"
                value={values.address}
                onChange={handleChange('address')}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;
