/**
 * Application Configuration
 * Central configuration for the LMS application
 */

const CONFIG = {
  // Application Info
  appName: 'EduLearn LMS',
  version: '1.0.0',
  
  // Language Settings
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'ar'],
  
  // Storage Keys
  storageKeys: {
    language: 'lms_language',
    user: 'lms_user',
    cart: 'lms_cart',
    orders: 'lms_orders',
    comments: 'lms_comments',
    theme: 'lms_theme'
  },
  
  // Pagination
  itemsPerPage: {
    courses: 9,
    blogs: 9,
    admin: 10
  },
  
  // User Roles
  roles: {
    STUDENT: 'student',
    INSTRUCTOR: 'instructor',
    ADMIN: 'admin'
  },
  
  // Course Categories
  courseCategories: [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Design',
    'Business',
    'Marketing',
    'Photography',
    'Music'
  ],
  
  // Blog Categories
  blogCategories: [
    'Technology',
    'Education',
    'Career',
    'Tips & Tricks',
    'News',
    'Tutorials'
  ],
  
  // Password Validation
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false
  },
  
  // Toast Notification Duration (ms)
  toastDuration: 3000,
  
  // Animation Durations (ms)
  animationDuration: {
    fast: 150,
    normal: 250,
    slow: 350
  },
  
  // API Endpoints (for future backend integration)
  api: {
    baseUrl: '/api',
    endpoints: {
      courses: '/courses',
      blogs: '/blogs',
      users: '/users',
      auth: '/auth',
      orders: '/orders'
    }
  },
  
  // Demo Credentials
  demoCredentials: {
    admin: {
      email: 'admin@edulearn.com',
      password: 'Admin123'
    },
    instructor: {
      email: 'instructor@edulearn.com',
      password: 'Instructor123'
    },
    student: {
      email: 'student@edulearn.com',
      password: 'Student123'
    }
  },
  
  // Certificate Settings
  certificate: {
    idPrefix: 'CERT',
    signatureText: 'Director of Education'
  },
  
  // Social Media Links
  socialMedia: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com'
  }
};

// Freeze config to prevent modifications
Object.freeze(CONFIG);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
