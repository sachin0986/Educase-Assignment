import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.isAgency === null) {
      newErrors.isAgency = 'Please select if you are an agency';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Navigate to the next page only if all validations pass
      navigate('/account-settings');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label className="text-purple-600 text-sm absolute -top-2 left-3 bg-white px-1">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder='Write your Full Name'
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg border-gray-300 pt-5 ${errors.fullName ? 'border-red-500' : ''}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div className="relative">
          <label className="text-purple-600 text-sm absolute -top-2 left-3 bg-white px-1">Phone number*</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder='Enter your Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg border-gray-300 pt-5 ${errors.phoneNumber ? 'border-red-500' : ''}`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div className="relative">
          <label className="text-purple-600 text-sm absolute -top-2 left-3 bg-white px-1">Email address*</label>
          <input
            type="email"
            name="email"
            placeholder='Enter your Email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg border-gray-300 pt-5 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <label className="text-purple-600 text-sm absolute -top-2 left-3 bg-white px-1">Password*</label>
          <input
            type="password"
            name="password"
            placeholder='Create a Strong Password'
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg border-gray-300 pt-5 ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="relative">
          <label className="text-purple-600 text-sm absolute -top-2 left-3 bg-white px-1">Company name</label>
          <input
            type="text"
            name="companyName"
            placeholder='Write your Company Name'
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 pt-5"
          />
        </div>

        <div className="space-y-2">
          <p className="text-purple-600 text-sm">Are you an Agency?*</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                checked={formData.isAgency === true}
                onChange={() => setFormData(prev => ({...prev, isAgency: true}))}
                className="mr-2 accent-purple-600"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                checked={formData.isAgency === false}
                onChange={() => setFormData(prev => ({...prev, isAgency: false}))}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.isAgency && <p className="text-red-500 text-sm mt-1">{errors.isAgency}</p>}
        </div>

        <button 
          type="submit"
          className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;