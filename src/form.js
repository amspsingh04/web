import React, { useState } from 'react';

const FormWithValidation = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Helper function to validate email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Perform submission tasks, e.g., sending data to an API
  };

  // Function to update the form state and validate
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Update form values
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Validate fields and set error messages
    let validationErrors = {};
    if (name === 'email' && !validateEmail(value)) {
      validationErrors.email = 'Invalid email address';
    }
    if (name === 'password' && value.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters long';
    }
    
    // Set validation errors in state
    setErrors(validationErrors);
  };

  // Function to check if there are any errors
  const hasErrors = () => {
    return Object.keys(errors).some((key) => errors[key]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit" disabled={hasErrors()}>
        Submit
      </button>
    </form>
  );
};

export default FormWithValidation;
