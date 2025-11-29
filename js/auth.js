/**
 * Authentication Module
 * Handles user authentication and authorization
 */

const Auth = {
  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {boolean} rememberMe - Remember user session
   * @returns {Object} Result object with success status and user data
   */
  login(email, password, rememberMe = false) {
    // Check demo credentials
    const demoUsers = [
      {
        id: 1,
        email: CONFIG.demoCredentials.admin.email,
        password: CONFIG.demoCredentials.admin.password,
        name: 'Admin User',
        role: CONFIG.roles.ADMIN,
        avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff'
      },
      {
        id: 2,
        email: CONFIG.demoCredentials.instructor.email,
        password: CONFIG.demoCredentials.instructor.password,
        name: 'John Instructor',
        role: CONFIG.roles.INSTRUCTOR,
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      {
        id: 3,
        email: CONFIG.demoCredentials.student.email,
        password: CONFIG.demoCredentials.student.password,
        name: 'Jane Student',
        role: CONFIG.roles.STUDENT,
        avatar: 'https://ui-avatars.com/api/?name=Jane+Student&background=3B82F6&color=fff'
      }
    ];

    // Find user by email
    const user = demoUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // Check password
    if (user.password !== password) {
      return {
        success: false,
        message: 'Invalid password'
      };
    }

    // Create user session
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      rememberMe: rememberMe,
      loginAt: new Date().toISOString()
    };

    // Store user data
    Storage.user.set(userData);

    return {
      success: true,
      message: 'Login successful',
      user: userData
    };
  },

  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @returns {Object} Result object with success status
   */
  register(userData) {
    const { name, email, password, role } = userData;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return {
        success: false,
        message: 'All fields are required'
      };
    }

    // Validate email format
    if (!Auth.validateEmail(email)) {
      return {
        success: false,
        message: 'Invalid email format'
      };
    }

    // Validate password strength
    const passwordValidation = Auth.validatePassword(password);
    if (!passwordValidation.valid) {
      return {
        success: false,
        message: passwordValidation.message
      };
    }

    // Check if email already exists (check against demo users)
    const demoEmails = [
      CONFIG.demoCredentials.admin.email,
      CONFIG.demoCredentials.instructor.email,
      CONFIG.demoCredentials.student.email
    ];

    if (demoEmails.includes(email.toLowerCase())) {
      return {
        success: false,
        message: 'Email already exists'
      };
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      role: role,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`,
      createdAt: new Date().toISOString()
    };

    // Store user data
    Storage.user.set(newUser);

    return {
      success: true,
      message: 'Registration successful',
      user: newUser
    };
  },

  /**
   * Logout current user
   * @returns {Object} Result object
   */
  logout() {
    Storage.user.remove();
    return {
      success: true,
      message: 'Logout successful'
    };
  },

  /**
   * Get current user
   * @returns {Object|null} Current user data or null
   */
  getCurrentUser() {
    return Storage.user.get();
  },

  /**
   * Check if user is logged in
   * @returns {boolean} Login status
   */
  isLoggedIn() {
    return Storage.user.isLoggedIn();
  },

  /**
   * Check if current user is admin
   * @returns {boolean} Admin status
   */
  isAdmin() {
    return Storage.user.isAdmin();
  },

  /**
   * Check if current user is instructor
   * @returns {boolean} Instructor status
   */
  isInstructor() {
    return Storage.user.isInstructor();
  },

  /**
   * Check if current user is student
   * @returns {boolean} Student status
   */
  isStudent() {
    return Storage.user.isStudent();
  },

  /**
   * Check if user has specific role
   * @param {string} role - Role to check
   * @returns {boolean} Role status
   */
  hasRole(role) {
    const user = Auth.getCurrentUser();
    return user && user.role === role;
  },

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} Validation result
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate password strength
   * @param {string} password - Password to validate
   * @returns {Object} Validation result with valid status and message
   */
  validatePassword(password) {
    const config = CONFIG.password;
    const errors = [];

    if (password.length < config.minLength) {
      errors.push(`Password must be at least ${config.minLength} characters`);
    }

    if (config.requireUppercase && !/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }

    if (config.requireLowercase && !/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }

    if (config.requireNumbers && !/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    if (config.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      valid: errors.length === 0,
      message: errors.join('. '),
      errors: errors
    };
  },

  /**
   * Get password strength
   * @param {string} password - Password to check
   * @returns {Object} Strength object with level and score
   */
  getPasswordStrength(password) {
    let score = 0;
    
    if (!password) {
      return { level: 'weak', score: 0 };
    }

    // Length
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Character types
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

    // Determine level
    let level = 'weak';
    if (score >= 5) {
      level = 'strong';
    } else if (score >= 3) {
      level = 'medium';
    }

    return { level, score };
  },

  /**
   * Update user profile
   * @param {Object} updates - Profile updates
   * @returns {Object} Result object
   */
  updateProfile(updates) {
    const user = Auth.getCurrentUser();
    
    if (!user) {
      return {
        success: false,
        message: 'User not logged in'
      };
    }

    const updatedUser = {
      ...user,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    Storage.user.set(updatedUser);

    return {
      success: true,
      message: 'Profile updated successfully',
      user: updatedUser
    };
  },

  /**
   * Change password
   * @param {string} currentPassword - Current password
   * @param {string} newPassword - New password
   * @returns {Object} Result object
   */
  changePassword(currentPassword, newPassword) {
    const user = Auth.getCurrentUser();
    
    if (!user) {
      return {
        success: false,
        message: 'User not logged in'
      };
    }

    // Validate new password
    const validation = Auth.validatePassword(newPassword);
    if (!validation.valid) {
      return {
        success: false,
        message: validation.message
      };
    }

    // In a real app, you would verify the current password
    // For demo purposes, we'll just update it
    return {
      success: true,
      message: 'Password changed successfully'
    };
  },

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Object} Result object
   */
  requestPasswordReset(email) {
    if (!Auth.validateEmail(email)) {
      return {
        success: false,
        message: 'Invalid email format'
      };
    }

    // In a real app, this would send a reset email
    return {
      success: true,
      message: 'Password reset link sent to your email'
    };
  },

  /**
   * Check if user has permission
   * @param {string} permission - Permission to check
   * @returns {boolean} Permission status
   */
  hasPermission(permission) {
    const user = Auth.getCurrentUser();
    if (!user) return false;

    // Define role permissions
    const permissions = {
      [CONFIG.roles.ADMIN]: ['*'], // Admin has all permissions
      [CONFIG.roles.INSTRUCTOR]: ['create_course', 'edit_course', 'view_students', 'create_blog'],
      [CONFIG.roles.STUDENT]: ['enroll_course', 'view_course', 'comment']
    };

    const userPermissions = permissions[user.role] || [];
    return userPermissions.includes('*') || userPermissions.includes(permission);
  },

  /**
   * Require authentication (redirect if not logged in)
   * @param {string} redirectUrl - URL to redirect to if not logged in
   */
  requireAuth(redirectUrl = 'login.html') {
    if (!Auth.isLoggedIn()) {
      window.location.href = redirectUrl;
    }
  },

  /**
   * Require specific role (redirect if user doesn't have role)
   * @param {string} role - Required role
   * @param {string} redirectUrl - URL to redirect to if role not matched
   */
  requireRole(role, redirectUrl = 'index.html') {
    if (!Auth.hasRole(role)) {
      window.location.href = redirectUrl;
    }
  },

  /**
   * Require admin role
   * @param {string} redirectUrl - URL to redirect to if not admin
   */
  requireAdmin(redirectUrl = 'index.html') {
    Auth.requireAuth();
    Auth.requireRole(CONFIG.roles.ADMIN, redirectUrl);
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Auth;
}
