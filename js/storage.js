/**
 * Storage Module
 * Handles localStorage operations for the LMS
 */

const Storage = {
  /**
   * Get item from localStorage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {*} Stored value or default value
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting item from storage: ${key}`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {boolean} Success status
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting item in storage: ${key}`, error);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key - Storage key
   * @returns {boolean} Success status
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item from storage: ${key}`, error);
      return false;
    }
  },

  /**
   * Clear all items from localStorage
   * @returns {boolean} Success status
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage', error);
      return false;
    }
  },

  /**
   * Check if key exists in localStorage
   * @param {string} key - Storage key
   * @returns {boolean} Existence status
   */
  has(key) {
    return localStorage.getItem(key) !== null;
  },

  // Language Management
  language: {
    get() {
      return Storage.get(CONFIG.storageKeys.language, CONFIG.defaultLanguage);
    },
    set(lang) {
      return Storage.set(CONFIG.storageKeys.language, lang);
    }
  },

  // User Management
  user: {
    get() {
      return Storage.get(CONFIG.storageKeys.user, null);
    },
    set(user) {
      return Storage.set(CONFIG.storageKeys.user, user);
    },
    remove() {
      return Storage.remove(CONFIG.storageKeys.user);
    },
    isLoggedIn() {
      return Storage.has(CONFIG.storageKeys.user);
    },
    getRole() {
      const user = Storage.user.get();
      return user ? user.role : null;
    },
    isAdmin() {
      return Storage.user.getRole() === CONFIG.roles.ADMIN;
    },
    isInstructor() {
      return Storage.user.getRole() === CONFIG.roles.INSTRUCTOR;
    },
    isStudent() {
      return Storage.user.getRole() === CONFIG.roles.STUDENT;
    }
  },

  // Cart Management
  cart: {
    get() {
      return Storage.get(CONFIG.storageKeys.cart, []);
    },
    set(cart) {
      return Storage.set(CONFIG.storageKeys.cart, cart);
    },
    add(course) {
      const cart = Storage.cart.get();
      const exists = cart.find(item => item.id === course.id);
      
      if (!exists) {
        cart.push({
          id: course.id,
          title: course.title,
          price: course.price,
          image: course.image,
          instructor: course.instructor,
          addedAt: new Date().toISOString()
        });
        Storage.cart.set(cart);
        return true;
      }
      return false;
    },
    remove(courseId) {
      const cart = Storage.cart.get();
      const filtered = cart.filter(item => item.id !== courseId);
      Storage.cart.set(filtered);
      return true;
    },
    clear() {
      return Storage.set(CONFIG.storageKeys.cart, []);
    },
    count() {
      return Storage.cart.get().length;
    },
    total() {
      const cart = Storage.cart.get();
      return cart.reduce((sum, item) => sum + (item.price || 0), 0);
    },
    has(courseId) {
      const cart = Storage.cart.get();
      return cart.some(item => item.id === courseId);
    }
  },

  // Orders Management
  orders: {
    get() {
      return Storage.get(CONFIG.storageKeys.orders, []);
    },
    add(order) {
      const orders = Storage.orders.get();
      const newOrder = {
        id: Storage.orders.generateId(),
        ...order,
        createdAt: new Date().toISOString(),
        status: 'completed'
      };
      orders.unshift(newOrder);
      Storage.set(CONFIG.storageKeys.orders, orders);
      return newOrder;
    },
    getById(orderId) {
      const orders = Storage.orders.get();
      return orders.find(order => order.id === orderId);
    },
    generateId() {
      return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    },
    getUserOrders(userId) {
      const orders = Storage.orders.get();
      return orders.filter(order => order.userId === userId);
    }
  },

  // Comments Management
  comments: {
    get(postId) {
      const allComments = Storage.get(CONFIG.storageKeys.comments, {});
      return allComments[postId] || [];
    },
    add(postId, comment) {
      const allComments = Storage.get(CONFIG.storageKeys.comments, {});
      if (!allComments[postId]) {
        allComments[postId] = [];
      }
      
      const newComment = {
        id: Date.now(),
        ...comment,
        createdAt: new Date().toISOString()
      };
      
      allComments[postId].unshift(newComment);
      Storage.set(CONFIG.storageKeys.comments, allComments);
      return newComment;
    },
    count(postId) {
      return Storage.comments.get(postId).length;
    }
  },

  // Enrolled Courses Management
  enrolledCourses: {
    get() {
      const user = Storage.user.get();
      if (!user) return [];
      return Storage.get(`enrolled_${user.id}`, []);
    },
    add(courseId) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const enrolled = Storage.enrolledCourses.get();
      if (!enrolled.includes(courseId)) {
        enrolled.push(courseId);
        Storage.set(`enrolled_${user.id}`, enrolled);
        return true;
      }
      return false;
    },
    has(courseId) {
      const enrolled = Storage.enrolledCourses.get();
      return enrolled.includes(courseId);
    },
    remove(courseId) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const enrolled = Storage.enrolledCourses.get();
      const filtered = enrolled.filter(id => id !== courseId);
      Storage.set(`enrolled_${user.id}`, filtered);
      return true;
    }
  },

  // Course Progress Management
  progress: {
    get(courseId) {
      const user = Storage.user.get();
      if (!user) return null;
      
      const allProgress = Storage.get(`progress_${user.id}`, {});
      return allProgress[courseId] || { completed: [], percentage: 0 };
    },
    set(courseId, lessonId) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const allProgress = Storage.get(`progress_${user.id}`, {});
      if (!allProgress[courseId]) {
        allProgress[courseId] = { completed: [], percentage: 0 };
      }
      
      if (!allProgress[courseId].completed.includes(lessonId)) {
        allProgress[courseId].completed.push(lessonId);
      }
      
      Storage.set(`progress_${user.id}`, allProgress);
      return true;
    },
    updatePercentage(courseId, percentage) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const allProgress = Storage.get(`progress_${user.id}`, {});
      if (!allProgress[courseId]) {
        allProgress[courseId] = { completed: [], percentage: 0 };
      }
      
      allProgress[courseId].percentage = percentage;
      Storage.set(`progress_${user.id}`, allProgress);
      return true;
    }
  },

  // Wishlist Management
  wishlist: {
    get() {
      const user = Storage.user.get();
      if (!user) return [];
      return Storage.get(`wishlist_${user.id}`, []);
    },
    add(courseId) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const wishlist = Storage.wishlist.get();
      if (!wishlist.includes(courseId)) {
        wishlist.push(courseId);
        Storage.set(`wishlist_${user.id}`, wishlist);
        return true;
      }
      return false;
    },
    remove(courseId) {
      const user = Storage.user.get();
      if (!user) return false;
      
      const wishlist = Storage.wishlist.get();
      const filtered = wishlist.filter(id => id !== courseId);
      Storage.set(`wishlist_${user.id}`, filtered);
      return true;
    },
    has(courseId) {
      const wishlist = Storage.wishlist.get();
      return wishlist.includes(courseId);
    },
    toggle(courseId) {
      if (Storage.wishlist.has(courseId)) {
        return Storage.wishlist.remove(courseId);
      } else {
        return Storage.wishlist.add(courseId);
      }
    }
  },

  // Export data for backup
  export() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    return JSON.stringify(data, null, 2);
  },

  // Import data from backup
  import(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      Object.keys(data).forEach(key => {
        localStorage.setItem(key, data[key]);
      });
      return true;
    } catch (error) {
      console.error('Error importing data', error);
      return false;
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Storage;
}
