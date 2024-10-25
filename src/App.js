import React, { useState } from 'react';
import Step1 from './Components/Step1.jsx';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import './App.css'

const App = () => {
  const [step, setStep] = useState(1); // Initial step
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form data updates
  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Decide which component to render based on the current step
  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 prevStep={prevStep} handleChange={handleChange} values={formData} />;
    default:
      return null;
  }
};

export default App;
