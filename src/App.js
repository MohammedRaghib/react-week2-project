import React, { useState } from 'react';
import Step1 from './Components/Step1.jsx';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import './App.css'

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const redirect = () => {
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: ''
    })
    setStep(1)
  }

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} redirect={redirect} values={formData} />;
    default:
      return null;
  }
};

export default App;
