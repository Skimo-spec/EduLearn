/**
 * Main Application Module
 * Initializes and coordinates all application modules
 */

const App = {
  /**
   * Initialize the application
   */
  init() {
    console.log('🚀 Initializing EduLearn LMS...');

    // Initialize language
    App.initLanguage();

    // Initialize UI components
    UI.init();

    // Update user interface
    App.updateUserInterface();

    // Setup global event listeners
    App.setupEventListeners();

    // Initialize page-specific functionality
    App.initPage();

    console.log('✅ Application initialized successfully');
  },

  /**
   * Initialize language settings
   */
  initLanguage() {
    const currentLang = Storage.language.get();
    const html = document.documentElement;

    // Set language and direction
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // Update language switcher buttons
    App.updateLanguageSwitcher();
  },

  /**
   * Update language switcher UI
   */
  updateLanguageSwitcher() {
    const currentLang = Storage.language.get();
    const switchers = document.querySelectorAll('.language-switcher');

    switchers.forEach(switcher => {
      const langText = switcher.querySelector('.lang-text');
      if (langText) {
        langText.textContent = currentLang === 'en' ? 'English' : 'العربية';
      }
    });
  },

  /**
   * Switch language
   * @param {string} lang - Language code (en/ar)
   */
  switchLanguage(lang) {
    Storage.language.set(lang);
    window.location.reload();
  },

  /**
   * Update user interface based on auth status
   */
  updateUserInterface() {
    const user = Auth.getCurrentUser();
    const authButtons = document.querySelectorAll('.auth-buttons');
    const userMenus = document.querySelectorAll('.user-menu');
    const adminLinks = document.querySelectorAll('.admin-only');

    if (user) {
      // User is logged in
      authButtons.forEach(btn => btn.style.display = 'none');
      userMenus.forEach(menu => {
        menu.style.display = 'flex';
        const userName = menu.querySelector('.user-name');
        const userAvatar = menu.querySelector('.user-avatar');
        if (userName) userName.textContent = user.name;
        if (userAvatar) userAvatar.src = user.avatar;
      });

      // Show admin links only for admins
      if (Auth.isAdmin()) {
        adminLinks.forEach(link => link.style.display = 'block');
      }
    } else {
      // User is not logged in
      authButtons.forEach(btn => btn.style.display = 'flex');
      userMenus.forEach(menu => menu.style.display = 'none');
      adminLinks.forEach(link => link.style.display = 'none');
    }

    // Update cart count
    App.updateCartCount();
  },

  /**
   * Update cart count in UI
   */
  updateCartCount() {
    const cartCount = Storage.cart.count();
    const cartBadges = document.querySelectorAll('.cart-count');

    cartBadges.forEach(badge => {
      if (cartCount > 0) {
        badge.textContent = cartCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    });
  },

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Language switcher
    document.addEventListener('click', (e) => {
      if (e.target.closest('.language-switcher')) {
        const currentLang = Storage.language.get();
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        App.switchLanguage(newLang);
      }
    });

    // Logout button
    document.addEventListener('click', (e) => {
      if (e.target.closest('.logout-btn')) {
        e.preventDefault();
        App.handleLogout();
      }
    });

    // Add to cart buttons
    document.addEventListener('click', (e) => {
      const addToCartBtn = e.target.closest('.add-to-cart');
      if (addToCartBtn) {
        e.preventDefault();
        const courseId = parseInt(addToCartBtn.dataset.courseId);
        App.addToCart(courseId);
      }
    });

    // Remove from cart buttons
    document.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.remove-from-cart');
      if (removeBtn) {
        e.preventDefault();
        const courseId = parseInt(removeBtn.dataset.courseId);
        App.removeFromCart(courseId);
      }
    });

    // Enroll buttons
    document.addEventListener('click', (e) => {
      const enrollBtn = e.target.closest('.enroll-btn');
      if (enrollBtn) {
        e.preventDefault();
        const courseId = parseInt(enrollBtn.dataset.courseId);
        App.enrollCourse(courseId);
      }
    });
  },

  /**
   * Initialize page-specific functionality
   */
  initPage() {
    const page = document.body.dataset.page;

    switch (page) {
      case 'home':
        App.initHomePage();
        break;
      case 'courses':
        App.initCoursesPage();
        break;
      case 'course-details':
        App.initCourseDetailsPage();
        break;
      case 'blog':
        App.initBlogPage();
        break;
      case 'blog-details':
        App.initBlogDetailsPage();
        break;
      case 'login':
        App.initLoginPage();
        break;
      case 'signup':
        App.initSignupPage();
        break;
      case 'checkout':
        App.initCheckoutPage();
        break;
      case 'certificate':
        App.initCertificatePage();
        break;
      case 'admin':
        App.initAdminPage();
        break;
    }
  },

  /**
   * Initialize home page
   */
  initHomePage() {
    console.log('Initializing home page...');
    // Load featured courses
    const coursesContainer = document.querySelector('.courses-grid');
    if (coursesContainer) {
      const courses = Data.getFeaturedCourses().slice(0, 6);
      App.renderCourses(courses, coursesContainer);
    }
  },

  /**
   * Initialize courses page
   */
  initCoursesPage() {
    console.log('Initializing courses page...');
    const coursesContainer = document.querySelector('.courses-grid');
    if (coursesContainer) {
      const courses = Data.getCourses();
      App.renderCourses(courses, coursesContainer);
    }

    // Setup search and filters
    App.setupCourseFilters();
  },

  /**
   * Initialize course details page
   */
  initCourseDetailsPage() {
    console.log('Initializing course details page...');
    const courseId = new URLSearchParams(window.location.search).get('id');
    if (courseId) {
      const course = Data.getCourseById(courseId);
      if (course) {
        App.renderCourseDetails(course);
      }
    }
  },

  /**
   * Initialize blog page
   */
  initBlogPage() {
    console.log('Initializing blog page...');
    const blogsContainer = document.querySelector('.slider-container');
    if (blogsContainer) {
      const blogs = Data.getBlogs();
      App.renderBlogsSlider(blogs, blogsContainer);
    }

    // Setup search and filters
    App.setupBlogFilters();
  },

  /**
   * Initialize blog details page
   */
  initBlogDetailsPage() {
    console.log('Initializing blog details page...');
    const blogId = new URLSearchParams(window.location.search).get('id');
    if (blogId) {
      const blog = Data.getBlogById(blogId);
      if (blog) {
        App.renderBlogDetails(blog);
      }
    }
  },

  /**
   * Initialize login page
   */
  initLoginPage() {
    console.log('Initializing login page...');
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      Validation.setupRealtimeValidation(loginForm);

      loginForm.addEventListener('formValidated', (e) => {
        const formData = Validation.getFormData(loginForm);
        App.handleLogin(formData);
      });
    }
  },

  /**
   * Initialize signup page
   */
  initSignupPage() {
    console.log('Initializing signup page...');
    const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
      Validation.setupRealtimeValidation(signupForm);

      signupForm.addEventListener('formValidated', (e) => {
        const formData = Validation.getFormData(signupForm);
        App.handleSignup(formData);
      });
    }
  },

  /**
   * Initialize checkout page
   */
  initCheckoutPage() {
    console.log('Initializing checkout page...');
    App.renderCart();

    const checkoutForm = document.querySelector('#checkoutForm');
    if (checkoutForm) {
      Validation.setupRealtimeValidation(checkoutForm);

      checkoutForm.addEventListener('formValidated', (e) => {
        const formData = Validation.getFormData(checkoutForm);
        App.handleCheckout(formData);
      });
    }
  },

  /**
   * Initialize certificate page
   */
  initCertificatePage() {
    console.log('Initializing certificate page...');
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    if (orderId) {
      App.renderCertificate(orderId);
    }
  },

  /**
   * Initialize admin page
   */
  initAdminPage() {
    console.log('Initializing admin page...');
    // Check if user is admin
    if (!Auth.isAdmin()) {
      window.location.href = 'index.html';
      return;
    }

    App.renderAdminDashboard();
  },

  /**
   * Render courses
   */
  renderCourses(courses, container) {
    container.innerHTML = courses.map(course => `
      <div class="card course-card">
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-content">
          <span class="course-category">${course.category}</span>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${UI.truncate(course.description, 100)}</p>
          <div class="course-meta">
            <div class="course-instructor">
              <img src="${course.instructor.avatar}" alt="${course.instructor.name}" class="instructor-avatar" style="width: 24px; height: 24px; border-radius: 50%;">
              <span>${course.instructor.name}</span>
            </div>
            <div class="course-rating">
              <span>⭐ ${course.rating}</span>
              <span>(${course.reviewsCount})</span>
            </div>
          </div>
          <div class="course-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <span class="course-price">${course.price > 0 ? UI.formatCurrency(course.price) : 'Free'}</span>
            <a href="course-details.html?id=${course.id}" class="btn btn-primary btn-sm">View Details</a>
          </div>
        </div>
      </div>
    `).join('');
  },

  /**
   * Render blogs
   */
  renderBlogs(blogs, container) {
    container.innerHTML = blogs.map(blog => `
      <div class="card blog-card">
        <img src="${blog.image}" alt="${blog.title}" class="blog-image">
        <div class="blog-content">
          <div class="blog-meta">
            <span>${blog.category}</span>
            <span>•</span>
            <span>${UI.formatDate(blog.date)}</span>
            <span>•</span>
            <span>${blog.readingTime} min read</span>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
          <a href="blog-details.html?id=${blog.id}" class="blog-read-more">
            Read More →
          </a>
        </div>
      </div>
    `).join('');
  },

  /**
   * Render blogs in slider format
   */
  renderBlogsSlider(blogs, container) {
    // Group blogs into slides of 6
    const slides = [];
    for (let i = 0; i < blogs.length; i += 6) {
      slides.push(blogs.slice(i, i + 6));
    }

    container.innerHTML = slides.map(slide => `
      <div class="slider-slide">
        ${slide.map(blog => `
          <div class="card blog-card">
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
              <div class="blog-meta">
                <span>${blog.category}</span>
                <span>•</span>
                <span>${UI.formatDate(blog.date)}</span>
                <span>•</span>
                <span>${blog.readingTime} min read</span>
              </div>
              <h3 class="blog-title">${blog.title}</h3>
              <p class="blog-excerpt">${blog.excerpt}</p>
              <a href="blog-details.html?id=${blog.id}" class="blog-read-more">
                Read More →
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  },

  /**
   * Handle login
   */
  handleLogin(formData) {
    const result = Auth.login(formData.email, formData.password, formData.rememberMe === 'on');

    if (result.success) {
      UI.showToast(result.message, 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      UI.showToast(result.message, 'error');
    }
  },

  /**
   * Handle signup
   */
  handleSignup(formData) {
    const result = Auth.register(formData);

    if (result.success) {
      UI.showToast(result.message, 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      UI.showToast(result.message, 'error');
    }
  },

  /**
   * Handle logout
   */
  handleLogout() {
    UI.confirm('Are you sure you want to logout?', () => {
      Auth.logout();
      UI.showToast('Logged out successfully', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    });
  },

  /**
   * Add course to cart
   */
  addToCart(courseId) {
    const course = Data.getCourseById(courseId);
    if (course) {
      const added = Storage.cart.add(course);
      if (added) {
        UI.showToast('Course added to cart!', 'success');
        App.updateCartCount();
      } else {
        UI.showToast('Course already in cart', 'info');
      }
    }
  },

  /**
   * Remove course from cart
   */
  removeFromCart(courseId) {
    Storage.cart.remove(courseId);
    UI.showToast('Course removed from cart', 'success');
    App.updateCartCount();

    // Refresh cart display if on checkout page
    if (document.body.dataset.page === 'checkout') {
      App.renderCart();
    }
  },

  /**
   * Enroll in course
   */
  enrollCourse(courseId) {
    if (!Auth.isLoggedIn()) {
      UI.showToast('Please login to enroll', 'warning');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
      return;
    }

    const course = Data.getCourseById(courseId);
    if (course) {
      if (course.price > 0) {
        // Add to cart and redirect to checkout
        Storage.cart.add(course);
        window.location.href = 'checkout.html';
      } else {
        // Free course - enroll directly
        Storage.enrolledCourses.add(courseId);
        UI.showToast('Successfully enrolled!', 'success');
      }
    }
  },

  /**
   * Render cart
   */
  renderCart() {
    const cartItems = Storage.cart.get();
    const cartContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');

    if (cartContainer) {
      if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
      } else {
        cartContainer.innerHTML = cartItems.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
              <h4 class="cart-item-title">${item.title}</h4>
              <p class="cart-item-instructor">${item.instructor.name}</p>
              <p class="cart-item-price">${UI.formatCurrency(item.price)}</p>
            </div>
            <button class="cart-remove remove-from-cart" data-course-id="${item.id}">×</button>
          </div>
        `).join('');
      }
    }

    if (cartSummary) {
      const total = Storage.cart.total();
      cartSummary.innerHTML = `
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>${UI.formatCurrency(total)}</span>
        </div>
        <div class="summary-row">
          <span>Total:</span>
          <span>${UI.formatCurrency(total)}</span>
        </div>
      `;
    }
  },

  /**
   * Handle checkout
   */
  handleCheckout(formData) {
    const user = Auth.getCurrentUser();
    if (!user) {
      UI.showToast('Please login to continue', 'warning');
      return;
    }

    const cartItems = Storage.cart.get();
    if (cartItems.length === 0) {
      UI.showToast('Your cart is empty', 'warning');
      return;
    }

    // Create order
    const order = Storage.orders.add({
      userId: user.id,
      items: cartItems,
      total: Storage.cart.total(),
      billingInfo: formData
    });

    // Enroll in courses
    cartItems.forEach(item => {
      Storage.enrolledCourses.add(item.id);
    });

    // Clear cart
    Storage.cart.clear();

    // Show success and redirect
    UI.showToast('Order placed successfully!', 'success');
    setTimeout(() => {
      window.location.href = `certificate.html?orderId=${order.id}`;
    }, 1500);
  },

  /**
   * Render certificate
   */
  renderCertificate(orderId) {
    const order = Storage.orders.getById(orderId);
    if (!order) return;

    const user = Auth.getCurrentUser();
    const course = order.items[0]; // First course in order

    const certificateContainer = document.querySelector('.certificate');
    if (certificateContainer) {
      const certId = `${CONFIG.certificate.idPrefix}-${orderId}`;
      const date = UI.formatDate(order.createdAt, 'long');

      document.querySelector('.certificate-recipient').textContent = user.name;
      document.querySelector('.certificate-course').textContent = course.title;
      document.querySelector('.certificate-date').textContent = `Issued on ${date}`;
      document.querySelector('.certificate-id').textContent = `Certificate ID: ${certId}`;
    }

    // Print button
    const printBtn = document.querySelector('.print-certificate');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  },

  /**
   * Render admin dashboard
   */
  renderAdminDashboard() {
    const orders = Storage.orders.get();
    const users = [Auth.getCurrentUser()]; // In real app, would fetch all users
    const courses = Data.getCourses();

    // Update stats
    document.querySelector('.stat-users').textContent = users.length;
    document.querySelector('.stat-courses').textContent = courses.length;
    document.querySelector('.stat-sales').textContent = UI.formatCurrency(orders.reduce((sum, o) => sum + o.total, 0));
    document.querySelector('.stat-orders').textContent = orders.length;
  },

  /**
   * Setup course filters
   */
  setupCourseFilters() {
    const searchInput = document.querySelector('.course-search');
    const categoryFilters = document.querySelectorAll('.category-filter');

    if (searchInput) {
      searchInput.addEventListener('input', UI.debounce((e) => {
        const query = e.target.value;
        const courses = Data.searchCourses(query);
        const container = document.querySelector('.courses-grid');
        App.renderCourses(courses, container);
      }, 300));
    }

    categoryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        categoryFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const category = filter.dataset.category;
        const courses = category === 'all' ? Data.getCourses() : Data.getCoursesByCategory(category);
        const container = document.querySelector('.courses-grid');
        App.renderCourses(courses, container);
      });
    });
  },

  /**
   * Setup blog filters
   */
  setupBlogFilters() {
    const searchInput = document.querySelector('.blog-search-input');
    const categoryFilters = document.querySelectorAll('.category-tag');

    if (searchInput) {
      searchInput.addEventListener('input', UI.debounce((e) => {
        const query = e.target.value;
        const blogs = Data.searchBlogs(query);
        const container = document.querySelector('.slider-container');
        App.renderBlogsSlider(blogs, container);
      }, 300));
    }

    categoryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        categoryFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const category = filter.dataset.category;
        const blogs = category === 'all' ? Data.getBlogs() : Data.getBlogsByCategory(category);
        const container = document.querySelector('.slider-container');
        App.renderBlogsSlider(blogs, container);
      });
    });
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
