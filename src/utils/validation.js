// Form validation utility functions
export const validateForm = (values) => {
  const errors = {};

  // First name validation
  if (!values.firstName || values.firstName.trim() === '') {
    errors.firstName = 'First name is required';
  } else if (values.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(values.firstName.trim())) {
    errors.firstName = 'First name should only contain letters';
  }

  // Last name validation
  if (!values.lastName || values.lastName.trim() === '') {
    errors.lastName = 'Last name is required';
  } else if (values.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(values.lastName.trim())) {
    errors.lastName = 'Last name should only contain letters';
  }

  // Email validation
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Contact validation
  if (!values.contact || values.contact.trim() === '') {
    errors.contact = 'Contact number is required';
  } else if (!/^[6-9]\d{9}$/.test(values.contact.trim())) {
    errors.contact = 'Please enter a valid 10-digit mobile number';
  }

  return errors;
};

// Email validation utility
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation utility
export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Name validation utility
export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name) && name.trim().length >= 2;
};