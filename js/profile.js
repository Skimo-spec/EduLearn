/**
 * Profile Page Module
 * Handles profile page functionality including editing, password changes, and data display
 */

const Profile = {
  /**
   * Initialize profile page
   */
  init() {
    console.log('Initializing profile page...');

    // Check if user is logged in
    const user = Auth.getCurrentUser();
    if (!user) {
      window.location.href = 'login.html';
      return;
    }

    // Load user data
    Profile.loadUserData();

    // Setup event listeners
    Profile.setupEventListeners();

    console.log('Profile page initialized');
  },

  /**
   * Load and display user data
   */
  loadUserData() {
    const user = Auth.getCurrentUser();
    if (!user) return;

    // Update profile header
    const profileName = document.querySelector('.profile-name');
    const profileEmail = document.querySelector('.profile-email');
    const profileRole = document.querySelector('.profile-role');
    const profileAvatar = document.querySelector('.profile-avatar-img');

    if (profileName) profileName.textContent = user.name || 'User';
    if (profileEmail) profileEmail.textContent = user.email || '';
    if (profileRole) profileRole.textContent = Profile.getRoleDisplayName(user.role || 'student');
    if (profileAvatar) profileAvatar.src = user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name || 'User') + '&background=random';

    // Update profile information
    const profileFullname = document.querySelector('.profile-fullname');
    const profileEmailDisplay = document.querySelector('.profile-email-display');
    const profilePhone = document.querySelector('.profile-phone');
    const profileRoleDisplay = document.querySelector('.profile-role-display');
    const profileBio = document.querySelector('.profile-bio');

    if (profileFullname) profileFullname.textContent = user.name || 'Not provided';
    if (profileEmailDisplay) profileEmailDisplay.textContent = user.email || 'Not provided';
    if (profilePhone) profilePhone.textContent = user.phone || 'Not provided';
    if (profileRoleDisplay) profileRoleDisplay.textContent = Profile.getRoleDisplayName(user.role || 'student');
    if (profileBio) profileBio.textContent = user.bio || 'No bio provided';

    // Load enrolled courses
    Profile.loadEnrolledCourses();

    // Load certificates
    Profile.loadCertificates();
  },

  /**
   * Get display name for user role
   */
  getRoleDisplayName(role) {
    const roleNames = {
      'student': 'Student',
      'instructor': 'Instructor',
      'admin': 'Administrator'
    };
    return roleNames[role] || 'Student';
  },

  /**
   * Load enrolled courses
   */
  loadEnrolledCourses() {
    const enrolledCourses = Storage.enrolledCourses.get();
    const coursesContainer = document.querySelector('.enrolled-courses');

    if (!coursesContainer) return;

    if (enrolledCourses.length === 0) {
      coursesContainer.innerHTML = '<p class="text-center" data-translate="profile.noCourses">You haven\'t enrolled in any courses yet.</p>';
      return;
    }

    coursesContainer.innerHTML = enrolledCourses.map(courseId => {
      const course = Data.getCourseById(courseId);
      if (!course) return '';

      // Mock progress data (in real app, this would come from user progress tracking)
      const progress = Math.floor(Math.random() * 100) + 1;
      const isCompleted = progress >= 100;

      return `
        <div class="enrolled-course-card">
          <img src="${course.image}" alt="${course.title}" class="enrolled-course-image">
          <div class="enrolled-course-content">
            <h3 class="enrolled-course-title">${course.title}</h3>
            <div class="enrolled-course-meta">
              <span><i class="fas fa-user"></i> ${course.instructor.name}</span>
              <span><i class="fas fa-clock"></i> ${course.duration || '10h'}</span>
            </div>
            <div class="enrolled-course-progress">
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
              </div>
              <div class="progress-text">${progress}% Complete</div>
            </div>
            <div class="enrolled-course-actions">
              <a href="course-details.html?id=${course.id}" class="btn btn-primary btn-sm">
                <i class="fas fa-play"></i>
                ${isCompleted ? 'Review' : 'Continue'}
              </a>
              ${isCompleted ? `<a href="certificate.html?courseId=${course.id}" class="btn btn-outline btn-sm">
                <i class="fas fa-certificate"></i>
                Certificate
              </a>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  /**
   * Load certificates
   */
  loadCertificates() {
    const certificates = Storage.certificates.get();
    const certificatesContainer = document.querySelector('.certificates-grid');

    if (!certificatesContainer) return;

    if (certificates.length === 0) {
      certificatesContainer.innerHTML = '<p class="text-center" data-translate="profile.noCertificates">No certificates earned yet.</p>';
      return;
    }

    certificatesContainer.innerHTML = certificates.map(cert => {
      const course = Data.getCourseById(cert.courseId);
      if (!course) return '';

      return `
        <div class="certificate-card">
          <div class="certificate-icon">
            <i class="fas fa-certificate"></i>
          </div>
          <h3 class="certificate-card-title">${course.title}</h3>
          <p class="certificate-card-date">Earned on ${UI.formatDate(cert.earnedDate)}</p>
          <div class="certificate-card-actions">
            <a href="certificate.html?courseId=${cert.courseId}" class="btn btn-primary btn-sm">
              <i class="fas fa-eye"></i>
              View
            </a>
            <button class="btn btn-outline btn-sm" onclick="Profile.downloadCertificate('${cert.id}')">
              <i class="fas fa-download"></i>
              Download
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // // Edit profile button
    // const editProfileBtn = document.querySelector('.edit-profile-btn');
    // if (editProfileBtn) {
    //   editProfileBtn.addEventListener('click', Profile.openEditProfileModal);
    // }

    // Edit section buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.edit-section-btn')) {
        const section = e.target.closest('.edit-section-btn').dataset.section;
        Profile.toggleEditMode(section);
      }
    });


    // Avatar edit
    const avatarEditBtn = document.querySelector('.avatar-edit-btn');
    if (avatarEditBtn) {
      avatarEditBtn.addEventListener('click', Profile.handleAvatarEdit);
    }

    // Edit profile modal
    const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileModal = document.getElementById('editProfileModal');

const Profile = {
  openEditProfileModal() {
    editProfileModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  closeEditProfileModal() {
    editProfileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  },
  saveProfileChanges() {
    // هنا تكتب كود حفظ التعديلات
    console.log('Saving profile changes...');
    Profile.closeEditProfileModal();
  }
};

// فتح المودال لما المستخدم يضغط على الزر
if (editProfileBtn) {
  editProfileBtn.addEventListener('click', Profile.openEditProfileModal);
}

// كود غلق المودال اللي انت كاتبه سابقًا
if (editProfileModal) {
  // غلق المودال عند الضغط على X أو الخلفية
  editProfileModal.addEventListener('click', (e) => {
    if (e.target.closest('.modal-close') || e.target === editProfileModal) {
      Profile.closeEditProfileModal();
    }
  });

  // زرار الحفظ
  const saveBtn = editProfileModal.querySelector('[data-action="save"]');
  if (saveBtn) saveBtn.addEventListener('click', Profile.saveProfileChanges);

  // زرار الإلغاء
  const cancelBtn = editProfileModal.querySelector('[data-action="cancel"]');
  if (cancelBtn) cancelBtn.addEventListener('click', Profile.closeEditProfileModal);
}

    // Password form
    const passwordForm = document.querySelector('#passwordForm');
    if (passwordForm) {
      passwordForm.addEventListener('submit', Profile.handlePasswordChange);
    }

    // Password strength indicator
    const newPasswordInput = document.querySelector('#newPassword');
    if (newPasswordInput) {
      newPasswordInput.addEventListener('input', Profile.updatePasswordStrength);
    }
  },

  /**
   * Open edit profile modal
   */
  openEditProfileModal() {
    const user = Auth.getCurrentUser();
    const modal = document.querySelector('#editProfileModal');
    const form = modal.querySelector('#editProfileForm');

    if (!user || !modal || !form) return;

    // Populate form with current data
    const fullNameInput = form.querySelector('#editFullName');
    const emailInput = form.querySelector('#editEmail');
    const phoneInput = form.querySelector('#editPhone');
    const bioTextarea = form.querySelector('#editBio');

    if (fullNameInput) fullNameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
    if (phoneInput) phoneInput.value = user.phone || '';
    if (bioTextarea) bioTextarea.value = user.bio || '';

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
  },

  /**
   * Close edit profile modal
   */
  closeEditProfileModal() {
    const modal = document.querySelector('#editProfileModal');
    if (!modal) return;

    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
  },

  /**
   * Save profile changes
   */
  saveProfileChanges() {
    const form = document.querySelector('#editProfileForm');
    if (!form) return;

    const formData = new FormData(form);
    const user = Auth.getCurrentUser();

    if (!user) return;

    // Update user data
    const updatedUser = {
      ...user,
      name: formData.get('fullName') || user.name,
      email: formData.get('email') || user.email,
      phone: formData.get('phone') || user.phone,
      bio: formData.get('bio') || user.bio
    };

    // Save to storage (in real app, this would be an API call)
    Storage.users.update(updatedUser);

    // Update current user session
    Auth.setCurrentUser(updatedUser);

    // Reload profile data
    Profile.loadUserData();

    // Close modal
    Profile.closeEditProfileModal();

    // Show success message
    UI.showToast('Profile updated successfully!', 'success');
  },

  /**
   * Toggle edit mode for sections
   */
  toggleEditMode(section) {
    const sectionElement = document.querySelector(`[data-section="${section}"]`);
    if (!sectionElement) return;

    const parentSection = sectionElement.closest('.profile-section');
    parentSection.classList.toggle('edit-mode');

    // Update button text
    const btn = sectionElement.querySelector('.edit-section-btn');
    const isEditing = parentSection.classList.contains('edit-mode');

    if (btn) {
      const icon = btn.querySelector('i');
      const text = btn.querySelector('span');

      if (isEditing) {
        if (icon) icon.className = 'fas fa-save';
        if (text) text.textContent = 'Save';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
      } else {
        if (icon) icon.className = 'fas fa-edit';
        if (text) text.textContent = 'Edit';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
      }
    }
  },

  /**
   * Handle password change
   */
  async handlePasswordChange(e) {
    e.preventDefault();

    const form = e.target;
    const currentPassword = form.querySelector('#currentPassword').value;
    const newPassword = form.querySelector('#newPassword').value;
    const confirmPassword = form.querySelector('#confirmPassword').value;

    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      UI.showToast('Please fill in all fields', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      UI.showToast('New passwords do not match', 'error');
      return;
    }

    if (newPassword.length < 8) {
      UI.showToast('Password must be at least 8 characters long', 'error');
      return;
    }

    // In real app, verify current password with server
    const user = Auth.getCurrentUser();
    if (user.password !== currentPassword) {
      UI.showToast('Current password is incorrect', 'error');
      return;
    }

    // Update password
    const updatedUser = { ...user, password: newPassword };
    Storage.users.update(updatedUser);
    Auth.setCurrentUser(updatedUser);

    // Clear form
    form.reset();

    // Show success message
    UI.showToast('Password changed successfully!', 'success');
  },

  /**
   * Update password strength indicator
   */
  updatePasswordStrength(e) {
    const password = e.target.value;
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');

    if (!strengthBar || !strengthText) return;

    let strength = 0;
    let feedback = '';

    // Check length
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;

    // Check complexity
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^A-Za-z0-9]/.test(password)) strength += 10;

    // Update UI
    strengthBar.style.width = strength + '%';

    if (strength < 30) {
      strengthBar.style.backgroundColor = 'var(--color-error)';
      feedback = 'Weak';
    } else if (strength < 60) {
      strengthBar.style.backgroundColor = 'var(--color-warning)';
      feedback = 'Medium';
    } else {
      strengthBar.style.backgroundColor = 'var(--color-success)';
      feedback = 'Strong';
    }

    strengthText.textContent = feedback;
  },

  /**
   * Toggle theme
   */
  toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.classList.add('dark');
      themeToggle.querySelector('i').className = 'fas fa-sun';
      Storage.theme.set('dark');
    } else {
      themeToggle.classList.remove('dark');
      themeToggle.querySelector('i').className = 'fas fa-moon';
      Storage.theme.set('light');
    }
  },

  /**
   * Handle avatar edit
   */
  handleAvatarEdit() {
    // In a real app, this would open a file picker
    // For demo purposes, we'll just show a message
    UI.showToast('Avatar editing feature coming soon!', 'info');
  },

  /**
   * Download certificate
   */
  downloadCertificate(certId) {
    // In a real app, this would generate and download a PDF
    UI.showToast('Certificate download feature coming soon!', 'info');
  }
};

// Initialize profile page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Profile.init);
} else {
  Profile.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Profile;
}
