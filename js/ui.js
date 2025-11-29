/**
 * UI Module
 * Handles UI components, modals, toasts, and interactions
 */

const UI = {
  /**
   * Show toast notification
   * @param {string} message - Toast message
   * @param {string} type - Toast type (success, error, warning, info)
   * @param {number} duration - Duration in milliseconds
   */
  showToast(message, type = 'info', duration = CONFIG.toastDuration) {
    // Create toast container if it doesn't exist
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${UI.getToastIcon(type)}</div>
      <div class="toast-message">${message}</div>
      <button class="toast-close" aria-label="Close">×</button>
    `;

    // Add to container
    container.appendChild(toast);

    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      UI.removeToast(toast);
    });

    // Auto remove after duration
    setTimeout(() => {
      UI.removeToast(toast);
    }, duration);

    // Make toast visible
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    }, 10);
  },

  /**
   * Remove toast notification
   * @param {HTMLElement} toast - Toast element to remove
   */
  removeToast(toast) {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  },

  /**
   * Get icon for toast type
   * @param {string} type - Toast type
   * @returns {string} Icon HTML
   */
  getToastIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  },

  /**
   * Show modal
   * @param {string} title - Modal title
   * @param {string} content - Modal content (HTML)
   * @param {Object} options - Modal options
   */
  showModal(title, content, options = {}) {
    const {
      showClose = true,
      showFooter = true,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      onConfirm = null,
      onCancel = null,
      size = 'medium'
    } = options;

    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal modal-${size}">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          ${showClose ? '<button class="modal-close" aria-label="Close">×</button>' : ''}
        </div>
        <div class="modal-body">
          ${content}
        </div>
        ${showFooter ? `
          <div class="modal-footer">
            <button class="btn btn-ghost" data-action="cancel">${cancelText}</button>
            <button class="btn btn-primary" data-action="confirm">${confirmText}</button>
          </div>
        ` : ''}
      </div>
    `;

    document.body.appendChild(backdrop);

    // Show modal
    setTimeout(() => {
      backdrop.classList.add('active');
    }, 10);

    // Close button handler
    if (showClose) {
      const closeBtn = backdrop.querySelector('.modal-close');
      closeBtn.addEventListener('click', () => {
        UI.closeModal(backdrop);
        if (onCancel) onCancel();
      });
    }

    // Footer buttons handlers
    if (showFooter) {
      const cancelBtn = backdrop.querySelector('[data-action="cancel"]');
      const confirmBtn = backdrop.querySelector('[data-action="confirm"]');

      cancelBtn.addEventListener('click', () => {
        UI.closeModal(backdrop);
        if (onCancel) onCancel();
      });

      confirmBtn.addEventListener('click', () => {
        if (onConfirm) {
          const result = onConfirm();
          if (result !== false) {
            UI.closeModal(backdrop);
          }
        } else {
          UI.closeModal(backdrop);
        }
      });
    }

    // Close on backdrop click
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        UI.closeModal(backdrop);
        if (onCancel) onCancel();
      }
    });

    // Close on Escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        UI.closeModal(backdrop);
        if (onCancel) onCancel();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);

    return backdrop;
  },

  /**
   * Close modal
   * @param {HTMLElement} backdrop - Modal backdrop element
   */
  closeModal(backdrop) {
    backdrop.classList.remove('active');
    setTimeout(() => {
      backdrop.remove();
    }, 300);
  },

  /**
   * Show confirmation dialog
   * @param {string} message - Confirmation message
   * @param {Function} onConfirm - Callback on confirm
   * @param {Function} onCancel - Callback on cancel
   */
  confirm(message, onConfirm, onCancel = null) {
    UI.showModal('Confirm', `<p>${message}</p>`, {
      showClose: false,
      confirmText: 'Yes',
      cancelText: 'No',
      onConfirm: onConfirm,
      onCancel: onCancel,
      size: 'small'
    });
  },

  /**
   * Show alert dialog
   * @param {string} message - Alert message
   * @param {string} type - Alert type (success, error, warning, info)
   */
  alert(message, type = 'info') {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    UI.showModal(
      type.charAt(0).toUpperCase() + type.slice(1),
      `<div class="alert alert-${type}">
        <span class="alert-icon">${icons[type]}</span>
        <p>${message}</p>
      </div>`,
      {
        showFooter: false,
        size: 'small'
      }
    );
  },

  /**
   * Show loading spinner
   * @param {string} message - Loading message
   * @returns {HTMLElement} Loading element
   */
  showLoading(message = 'Loading...') {
    const loading = document.createElement('div');
    loading.className = 'modal-backdrop active';
    loading.innerHTML = `
      <div class="modal modal-small">
        <div class="modal-body" style="text-align: center; padding: 3rem;">
          <div class="spinner" style="margin: 0 auto 1rem;"></div>
          <p>${message}</p>
        </div>
      </div>
    `;
    document.body.appendChild(loading);
    return loading;
  },

  /**
   * Hide loading spinner
   * @param {HTMLElement} loading - Loading element
   */
  hideLoading(loading) {
    if (loading) {
      loading.remove();
    }
  },

  /**
   * Toggle mobile navigation
   */
  toggleMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-overlay');
    const menuToggle = document.querySelector('.menu-toggle');

    if (mobileNav && overlay) {
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      if (menuToggle) {
        menuToggle.classList.toggle('active');
      }
    }
  },

  /**
   * Close mobile navigation
   */
  closeMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-overlay');
    const menuToggle = document.querySelector('.menu-toggle');

    if (mobileNav && overlay) {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    }
  },

  /**
   * Setup mobile navigation
   */
  setupMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.mobile-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuToggle) {
      menuToggle.addEventListener('click', UI.toggleMobileNav);
    }

    if (overlay) {
      overlay.addEventListener('click', UI.closeMobileNav);
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', UI.closeMobileNav);
    });
  },

  /**
   * Setup dropdown menus
   */
  setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.dropdown-trigger');

      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdown.classList.add('active');
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    });
  },

  /**
   * Setup tabs
   */
  setupTabs() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const panes = container.parentElement.querySelectorAll('.tab-pane');

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs and panes
          tabs.forEach(t => t.classList.remove('active'));
          panes.forEach(p => p.classList.remove('active'));

          // Add active class to clicked tab and corresponding pane
          tab.classList.add('active');
          if (panes[index]) {
            panes[index].classList.add('active');
          }
        });
      });
    });
  },

  /**
   * Setup accordion
   */
  setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.curriculum-module-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const module = header.parentElement;
        module.classList.toggle('active');
      });
    });
  },

  /**
   * Setup scroll to top button
   */
  setupScrollToTop() {
    const scrollButton = document.querySelector('.scroll-to-top');

    if (scrollButton) {
      // Show/hide button based on scroll position
      const toggleScrollButton = () => {
        if (window.pageYOffset > 300) {
          scrollButton.classList.add('visible');
        } else {
          scrollButton.classList.remove('visible');
        }
      };

      // Add scroll event listener
      window.addEventListener('scroll', UI.throttle(toggleScrollButton, 100));

      // Add click event listener
      scrollButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Initial check
      toggleScrollButton();
    }
  },

  /**
   * Smooth scroll to element
   * @param {string} selector - Element selector
   * @param {number} offset - Scroll offset
   */
  scrollTo(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (element) {
      const top = element.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  },

  /**
   * Copy text to clipboard
   * @param {string} text - Text to copy
   * @returns {Promise} Copy promise
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      UI.showToast('Copied to clipboard!', 'success');
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      UI.showToast('Failed to copy', 'error');
      return false;
    }
  },

  /**
   * Format number with commas
   * @param {number} number - Number to format
   * @returns {string} Formatted number
   */
  formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * Format currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency symbol
   * @returns {string} Formatted currency
   */
  formatCurrency(amount, currency = '$') {
    return `${currency}${UI.formatNumber(amount.toFixed(2))}`;
  },

  /**
   * Format date
   * @param {string|Date} date - Date to format
   * @param {string} format - Date format
   * @returns {string} Formatted date
   */
  formatDate(date, format = 'short') {
    const d = new Date(date);
    const options = {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric' },
      full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    };

    return d.toLocaleDateString('en-US', options[format] || options.short);
  },

  /**
   * Truncate text
   * @param {string} text - Text to truncate
   * @param {number} length - Maximum length
   * @returns {string} Truncated text
   */
  truncate(text, length = 100) {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  },

  /**
   * Debounce function
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function
   * @param {Function} func - Function to throttle
   * @param {number} limit - Time limit in milliseconds
   * @returns {Function} Throttled function
   */
  throttle(func, limit = 300) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Initialize all UI components
   */
  init() {
    UI.setupMobileNav();
    UI.setupDropdowns();
    UI.setupTabs();
    UI.setupAccordion();
    UI.setupScrollToTop();
  }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', UI.init);
} else {
  UI.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UI;
}
