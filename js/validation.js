/**
 * Validation Module
 * Handles form validation with real-time feedback
 */

const Validation = {
  /**
   * Validate a single field
   * @param {HTMLElement} field - Input field to validate
   * @returns {Object} Validation result
   */
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    const minLength = field.getAttribute('minlength');
    const maxLength = field.getAttribute('maxlength');
    const pattern = field.getAttribute('pattern');
    const errors = [];

    // Required validation
    if (required && !value) {
      errors.push('This field is required');
    }

    // Type-specific validation
    if (value) {
      switch (type) {
        case 'email':
          if (!Validation.isValidEmail(value)) {
            errors.push('Please enter a valid email address');
          }
          break;
        
        case 'url':
          if (!Validation.isValidUrl(value)) {
            errors.push('Please enter a valid URL');
          }
          break;
        
        case 'tel':
          if (!Validation.isValidPhone(value)) {
            errors.push('Please enter a valid phone number');
          }
          break;
        
        case 'number':
          const min = field.getAttribute('min');
          const max = field.getAttribute('max');
          const numValue = parseFloat(value);
          
          if (isNaN(numValue)) {
            errors.push('Please enter a valid number');
          } else {
            if (min && numValue < parseFloat(min)) {
              errors.push(`Value must be at least ${min}`);
            }
            if (max && numValue > parseFloat(max)) {
              errors.push(`Value must be at most ${max}`);
            }
          }
          break;
      }

      // Length validation
      if (minLength && value.length < parseInt(minLength)) {
        errors.push(`Minimum length is ${minLength} characters`);
      }
      if (maxLength && value.length > parseInt(maxLength)) {
        errors.push(`Maximum length is ${maxLength} characters`);
      }

      // Pattern validation
      if (pattern) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errors.push('Invalid format');
        }
      }

      // Custom validation for password fields
      if (field.name === 'password' || field.id === 'password') {
        const passwordValidation = Auth.validatePassword(value);
        if (!passwordValidation.valid) {
          errors.push(...passwordValidation.errors);
        }
      }

      // Confirm password validation
      if (field.name === 'confirmPassword' || field.id === 'confirmPassword') {
        const passwordField = document.querySelector('[name="password"], #password');
        if (passwordField && value !== passwordField.value) {
          errors.push('Passwords do not match');
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors: errors
    };
  },

  /**
   * Validate entire form
   * @param {HTMLFormElement} form - Form to validate
   * @returns {Object} Validation result
   */
  validateForm(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    const results = {};
    let isValid = true;

    fields.forEach(field => {
      if (field.name || field.id) {
        const fieldName = field.name || field.id;
        const result = Validation.validateField(field);
        results[fieldName] = result;
        
        if (!result.valid) {
          isValid = false;
          Validation.showError(field, result.errors[0]);
        } else {
          Validation.clearError(field);
        }
      }
    });

    return {
      valid: isValid,
      results: results
    };
  },

  /**
   * Show error message for field
   * @param {HTMLElement} field - Input field
   * @param {string} message - Error message
   */
  showError(field, message) {
    // Add error class to field
    field.classList.add('error');
    
    // Remove existing error message
    Validation.clearError(field);
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    // Insert error message after field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  },

  /**
   * Clear error message for field
   * @param {HTMLElement} field - Input field
   */
  clearError(field) {
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.form-error');
    if (errorDiv) {
      errorDiv.remove();
    }
  },

  /**
   * Setup real-time validation for form
   * @param {HTMLFormElement} form - Form element
   */
  setupRealtimeValidation(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
      // Validate on blur
      field.addEventListener('blur', () => {
        const result = Validation.validateField(field);
        if (!result.valid) {
          Validation.showError(field, result.errors[0]);
        } else {
          Validation.clearError(field);
        }
      });

      // Clear error on input
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
          const result = Validation.validateField(field);
          if (result.valid) {
            Validation.clearError(field);
          }
        }
      });

      // Password strength indicator
      if (field.name === 'password' || field.id === 'password') {
        field.addEventListener('input', () => {
          Validation.updatePasswordStrength(field);
        });
      }

      // Confirm password real-time check
      if (field.name === 'confirmPassword' || field.id === 'confirmPassword') {
        field.addEventListener('input', () => {
          const passwordField = document.querySelector('[name="password"], #password');
          if (passwordField && field.value) {
            if (field.value !== passwordField.value) {
              Validation.showError(field, 'Passwords do not match');
            } else {
              Validation.clearError(field);
            }
          }
        });
      }
    });

    // Validate on submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const result = Validation.validateForm(form);
      
      if (result.valid) {
        // Form is valid, trigger custom event
        const event = new CustomEvent('formValidated', {
          detail: { form: form, valid: true }
        });
        form.dispatchEvent(event);
      } else {
        // Focus first invalid field
        const firstError = form.querySelector('.error');
        if (firstError) {
          firstError.focus();
        }
      }
    });
  },

  /**
   * Update password strength indicator
   * @param {HTMLElement} passwordField - Password input field
   */
  updatePasswordStrength(passwordField) {
    const strengthContainer = passwordField.parentNode.querySelector('.password-strength');
    if (!strengthContainer) return;

    const password = passwordField.value;
    const strength = Auth.getPasswordStrength(password);
    
    const strengthBar = strengthContainer.querySelector('.strength-fill');
    const strengthText = strengthContainer.querySelector('.strength-text');
    
    if (strengthBar && strengthText) {
      // Remove all strength classes
      strengthBar.classList.remove('weak', 'medium', 'strong');
      
      // Add current strength class
      strengthBar.classList.add(strength.level);
      
      // Update text
      const strengthLabels = {
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong'
      };
      strengthText.textContent = password ? `Password Strength: ${strengthLabels[strength.level]}` : '';
    }
  },

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} Validation result
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate URL format
   * @param {string} url - URL to validate
   * @returns {boolean} Validation result
   */
  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Validate phone number
   * @param {string} phone - Phone number to validate
   * @returns {boolean} Validation result
   */
  isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  },

  /**
   * Validate credit card number (Luhn algorithm)
   * @param {string} cardNumber - Card number to validate
   * @returns {boolean} Validation result
   */
  isValidCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    
    if (!/^\d+$/.test(cleaned) || cleaned.length < 13 || cleaned.length > 19) {
      return false;
    }

    let sum = 0;
    let isEven = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  },

  /**
   * Validate CVV
   * @param {string} cvv - CVV to validate
   * @returns {boolean} Validation result
   */
  isValidCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
  },

  /**
   * Validate expiry date (MM/YY format)
   * @param {string} expiry - Expiry date to validate
   * @returns {boolean} Validation result
   */
  isValidExpiry(expiry) {
    const match = expiry.match(/^(\d{2})\/(\d{2})$/);
    if (!match) return false;

    const month = parseInt(match[1]);
    const year = parseInt('20' + match[2]);
    
    if (month < 1 || month > 12) return false;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  },

  /**
   * Format card number with spaces
   * @param {string} cardNumber - Card number to format
   * @returns {string} Formatted card number
   */
  formatCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  },

  /**
   * Format expiry date (MM/YY)
   * @param {string} expiry - Expiry to format
   * @returns {string} Formatted expiry
   */
  formatExpiry(expiry) {
    const cleaned = expiry.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  },

  /**
   * Sanitize input to prevent XSS
   * @param {string} input - Input to sanitize
   * @returns {string} Sanitized input
   */
  sanitize(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  },

  /**
   * Get form data as object
   * @param {HTMLFormElement} form - Form element
   * @returns {Object} Form data
   */
  getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      // Handle multiple values (checkboxes with same name)
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }
    
    return data;
  },

  /**
   * Reset form and clear all errors
   * @param {HTMLFormElement} form - Form to reset
   */
  resetForm(form) {
    form.reset();
    const errors = form.querySelectorAll('.form-error');
    errors.forEach(error => error.remove());
    
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Validation;
}
