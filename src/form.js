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

  // Function to check if there are any errors
  const hasErrors = () => {
    return Object.keys(errors).some((key) => errors[key]);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if there are no errors before submitting
    if (!hasErrors()) {
      // Perform submission tasks, e.g., sending data to an API
  
      // Reset the form fields
      setForm({
        email: '',
        password: '',
      });
      // Optionally you could also reset any errors
      setErrors({});
    }
  };

  // Function to update the form state and validate
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Update form values
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Validate fields and set error messages
    let validationErrors = { ...errors };
    if (name === 'email') {
      validationErrors.email = validateEmail(value) ? '' : 'Invalid email address';
    }
    if (name === 'password') {
      validationErrors.password = value.length >= 6 ? '' : 'Password should be at least 6 characters long';
    }
    
    // Set validation errors in state
    setErrors(validationErrors);
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
