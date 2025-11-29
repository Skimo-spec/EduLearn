/**
 * Translations Module
 * Handles bilingual support (English/Arabic) for the LMS
 */

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      courses: 'Courses',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      profile: 'Profile',
      dashboard: 'Dashboard',
      cart: 'Cart',
      myLearning: 'My Learning'
    },

    // Hero Section
    hero: {
      title: 'Learn Without Limits',
      subtitle: 'Discover thousands of courses and start your learning journey today',
      browseCourses: 'Browse Courses',
      becomeInstructor: 'Become an Instructor'
    },

    // Features
    features: {
      title: 'Why Choose Us',
      subtitle: 'Everything you need to succeed in your learning journey',
      selfPaced: {
        title: 'Self-Paced Learning',
        description: 'Learn at your own pace, anytime and anywhere'
      },
      certificates: {
        title: 'Certificates',
        description: 'Earn certificates upon course completion'
      },
      community: {
        title: 'Community',
        description: 'Join a community of learners and instructors'
      },
      support: {
        title: '24/7 Support',
        description: 'Get help whenever you need it'
      }
    },

    // Courses
    courses: {
      title: 'Popular Courses',
      subtitle: 'Explore our most popular courses',
      viewAll: 'View All Courses',
      enroll: 'Enroll Now',
      addToCart: 'Add to Cart',
      free: 'Free',
      bestseller: 'Bestseller',
      new: 'New',
      students: 'students',
      lessons: 'lessons',
      hours: 'hours',
      level: 'Level',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      rating: 'Rating',
      reviews: 'reviews',
      instructor: 'Instructor',
      language: 'Language',
      lastUpdated: 'Last Updated',
      whatYouLearn: 'What You\'ll Learn',
      requirements: 'Requirements',
      description: 'Description',
      curriculum: 'Curriculum',
      instructorInfo: 'Instructor',
      studentReviews: 'Student Reviews',
      relatedCourses: 'Related Courses'
    },

    // Blog
    blog: {
      title: 'Latest from Our Blog',
      subtitle: 'Stay updated with the latest news and articles',
      readMore: 'Read More',
      readingTime: 'min read',
      postedBy: 'Posted by',
      on: 'on',
      categories: 'Categories',
      tags: 'Tags',
      search: 'Search articles...',
      allCategories: 'All Categories',
      shareArticle: 'Share this article',
      relatedPosts: 'Related Posts',
      comments: 'Comments',
      leaveComment: 'Leave a Comment',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourComment: 'Your Comment',
      postComment: 'Post Comment'
    },

    // Auth
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      fullName: 'Full Name',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      noAccount: 'Don\'t have an account?',
      haveAccount: 'Already have an account?',
      signupHere: 'Sign up here',
      loginHere: 'Login here',
      orContinueWith: 'Or continue with',
      google: 'Google',
      facebook: 'Facebook',
      role: 'I want to',
      student: 'Learn (Student)',
      instructor: 'Teach (Instructor)',
      admin: 'Manage (Admin)',
      agreeTerms: 'I agree to the Terms and Conditions',
      passwordStrength: 'Password Strength',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong'
    },

    // Cart & Checkout
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      continueShopping: 'Continue Shopping',
      item: 'item',
      items: 'items',
      subtotal: 'Subtotal',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      remove: 'Remove',
      billingDetails: 'Billing Details',
      paymentMethod: 'Payment Method',
      creditCard: 'Credit Card',
      paypal: 'PayPal',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      placeOrder: 'Place Order',
      orderSummary: 'Order Summary',
      discount: 'Discount',
      tax: 'Tax'
    },

    // Certificate
    certificate: {
      title: 'Certificate of Completion',
      subtitle: 'This is to certify that',
      hasCompleted: 'has successfully completed the course',
      issuedOn: 'Issued on',
      certificateId: 'Certificate ID',
      download: 'Download PDF',
      print: 'Print Certificate',
      share: 'Share Certificate',
      verify: 'Verify Certificate'
    },

    // Admin
    admin: {
      dashboard: 'Dashboard',
      users: 'Users',
      courses: 'Courses',
      blogs: 'Blog Posts',
      orders: 'Orders',
      settings: 'Settings',
      totalUsers: 'Total Users',
      totalCourses: 'Total Courses',
      totalSales: 'Total Sales',
      pendingOrders: 'Pending Orders',
      addNew: 'Add New',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      save: 'Save',
      cancel: 'Cancel',
      search: 'Search...',
      filter: 'Filter',
      export: 'Export',
      import: 'Import',
      actions: 'Actions',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected'
    },

    // Footer
    footer: {
      about: 'About Us',
      aboutText: 'EduLearn is a leading online learning platform dedicated to providing quality education to everyone, everywhere.',
      quickLinks: 'Quick Links',
      courses: 'Courses',
      blog: 'Blog',
      aboutUs: 'About Us',
      contact: 'Contact',
      faq: 'FAQ',
      support: 'Support',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe to our newsletter for updates',
      subscribe: 'Subscribe',
      copyright: '© 2024 EduLearn. All rights reserved.',
      language: 'Language'
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Info',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      reset: 'Reset',
      clear: 'Clear',
      apply: 'Apply',
      showMore: 'Show More',
      showLess: 'Show Less',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      tryNow: 'Try Now',
      comingSoon: 'Coming Soon',
      notFound: 'Not Found',
      pageNotFound: 'Page Not Found',
      goHome: 'Go to Homepage',
      required: 'Required',
      optional: 'Optional',
      select: 'Select',
      all: 'All',
      none: 'None',
      other: 'Other'
    },

    // Validation Messages
    validation: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      password: 'Password must be at least 8 characters',
      passwordMatch: 'Passwords do not match',
      minLength: 'Minimum length is {min} characters',
      maxLength: 'Maximum length is {max} characters',
      invalidFormat: 'Invalid format',
      invalidCard: 'Invalid card number',
      invalidCVV: 'Invalid CVV',
      invalidExpiry: 'Invalid expiry date'
    },

    // Success Messages
    success: {
      loginSuccess: 'Login successful!',
      signupSuccess: 'Account created successfully!',
      logoutSuccess: 'Logged out successfully!',
      addedToCart: 'Added to cart!',
      removedFromCart: 'Removed from cart!',
      orderPlaced: 'Order placed successfully!',
      commentPosted: 'Comment posted successfully!',
      profileUpdated: 'Profile updated successfully!',
      passwordChanged: 'Password changed successfully!',
      saved: 'Saved successfully!',
      deleted: 'Deleted successfully!',
      updated: 'Updated successfully!'
    },

    // Error Messages
    error: {
      loginFailed: 'Login failed. Please check your credentials.',
      signupFailed: 'Signup failed. Please try again.',
      invalidCredentials: 'Invalid email or password',
      emailExists: 'Email already exists',
      networkError: 'Network error. Please check your connection.',
      serverError: 'Server error. Please try again later.',
      notFound: 'Resource not found',
      unauthorized: 'Unauthorized access',
      forbidden: 'Access forbidden',
      validationError: 'Please fix the errors and try again',
      genericError: 'Something went wrong. Please try again.'
    }
    },

    // ================= Arabic Translation =================

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      courses: 'الدورات',
      blog: 'المدونة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      signup: 'إنشاء حساب',
      logout: 'تسجيل الخروج',
      profile: 'الملف الشخصي',
      dashboard: 'لوحة التحكم',
      cart: 'سلة المشتريات',
      myLearning: 'دوراتي'
    },

    // Hero Section
    hero: {
      title: 'تعلّم بلا حدود',
      subtitle: 'اكتشف آلاف الدورات وابدأ رحلتك التعليمية اليوم',
      browseCourses: 'تصفح الدورات',
      becomeInstructor: 'كن مدربًا'
    },

    // Features
    features: {
      title: 'لماذا تختارنا',
      subtitle: 'كل ما تحتاجه للنجاح في رحلتك التعليمية',
      selfPaced: {
        title: 'تعلّم بالوتيرة المناسبة لك',
        description: 'تعلّم في أي وقت ومن أي مكان وفق سرعتك الخاصة'
      },
      certificates: {
        title: 'شهادات معتمدة',
        description: 'احصل على شهادة بعد إتمام الدورة'
      },
      community: {
        title: 'مجتمع تعليمي',
        description: 'انضم إلى مجتمع من المتعلمين والمدربين'
      },
      support: {
        title: 'دعم 24/7',
        description: 'احصل على المساعدة في أي وقت تحتاج إليه'
      }
    },

    // Courses
    courses: {
      title: 'الدورات الشائعة',
      subtitle: 'استكشف أكثر دوراتنا شهرة',
      viewAll: 'عرض جميع الدورات',
      enroll: 'التحق الآن',
      addToCart: 'أضف إلى السلة',
      free: 'مجانية',
      bestseller: 'الأكثر مبيعًا',
      new: 'جديدة',
      students: 'طلاب',
      lessons: 'دروس',
      hours: 'ساعات',
      level: 'المستوى',
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم',
      rating: 'التقييم',
      reviews: 'التعليقات',
      instructor: 'المدرب',
      language: 'اللغة',
      lastUpdated: 'آخر تحديث',
      whatYouLearn: 'ما الذي ستتعلمه',
      requirements: 'المتطلبات',
      description: 'الوصف',
      curriculum: 'المنهج',
      instructorInfo: 'عن المدرب',
      studentReviews: 'آراء الطلاب',
      relatedCourses: 'دورات ذات صلة'
    },

    // Blog
    blog: {
      title: 'آخر المقالات من مدونتنا',
      subtitle: 'ابقَ على اطلاع على أحدث الأخبار والمقالات',
      readMore: 'اقرأ المزيد',
      readingTime: 'دقيقة قراءة',
      postedBy: 'نشر بواسطة',
      on: 'في',
      categories: 'الفئات',
      tags: 'الوسوم',
      search: 'ابحث في المقالات...',
      allCategories: 'جميع الفئات',
      shareArticle: 'شارك المقال',
      relatedPosts: 'مقالات ذات صلة',
      comments: 'التعليقات',
      leaveComment: 'اترك تعليقًا',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      yourComment: 'تعليقك',
      postComment: 'أضف تعليقًا'
    },

    // Auth
    auth: {
      login: 'تسجيل الدخول',
      signup: 'إنشاء حساب',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      fullName: 'الاسم الكامل',
      rememberMe: 'تذكرني',
      forgotPassword: 'هل نسيت كلمة المرور؟',
      noAccount: 'ليس لديك حساب؟',
      haveAccount: 'هل لديك حساب بالفعل؟',
      signupHere: 'أنشئ حسابًا هنا',
      loginHere: 'سجّل دخولك هنا',
      orContinueWith: 'أو تابع باستخدام',
      google: 'جوجل',
      facebook: 'فيسبوك',
      role: 'أرغب في',
      student: 'التعلّم (طالب)',
      instructor: 'التدريس (مدرب)',
      admin: 'الإدارة (مشرف)',
      agreeTerms: 'أوافق على الشروط والأحكام',
      passwordStrength: 'قوة كلمة المرور',
      weak: 'ضعيفة',
      medium: 'متوسطة',
      strong: 'قوية'
    },

    // Cart & Checkout
    cart: {
      title: 'سلة المشتريات',
      empty: 'سلتك فارغة',
      continueShopping: 'تابع التسوق',
      item: 'عنصر',
      items: 'عناصر',
      subtotal: 'المجموع الفرعي',
      total: 'الإجمالي',
      checkout: 'إتمام الشراء',
      remove: 'إزالة',
      billingDetails: 'بيانات الفاتورة',
      paymentMethod: 'طريقة الدفع',
      creditCard: 'بطاقة ائتمان',
      paypal: 'باي بال',
      cardNumber: 'رقم البطاقة',
      expiryDate: 'تاريخ الانتهاء',
      cvv: 'رمز الأمان CVV',
      placeOrder: 'إتمام الطلب',
      orderSummary: 'ملخص الطلب',
      discount: 'الخصم',
      tax: 'الضريبة'
    },

    // Certificate
    certificate: {
      title: 'شهادة إتمام',
      subtitle: 'هذا لتأكيد أن',
      hasCompleted: 'قد أتم بنجاح دورة',
      issuedOn: 'صادرة في',
      certificateId: 'رقم الشهادة',
      download: 'تحميل PDF',
      print: 'طباعة الشهادة',
      share: 'مشاركة الشهادة',
      verify: 'تحقق من الشهادة'
    },

    // Admin
    admin: {
      dashboard: 'لوحة التحكم',
      users: 'المستخدمون',
      courses: 'الدورات',
      blogs: 'المقالات',
      orders: 'الطلبات',
      settings: 'الإعدادات',
      totalUsers: 'إجمالي المستخدمين',
      totalCourses: 'إجمالي الدورات',
      totalSales: 'إجمالي المبيعات',
      pendingOrders: 'الطلبات المعلقة',
      addNew: 'إضافة جديد',
      edit: 'تعديل',
      delete: 'حذف',
      view: 'عرض',
      save: 'حفظ',
      cancel: 'إلغاء',
      search: 'بحث...',
      filter: 'تصفية',
      export: 'تصدير',
      import: 'استيراد',
      actions: 'الإجراءات',
      status: 'الحالة',
      active: 'نشط',
      inactive: 'غير نشط',
      pending: 'قيد الانتظار',
      approved: 'تمت الموافقة',
      rejected: 'مرفوض'
    },

    // Footer
    footer: {
      about: 'من نحن',
      aboutText: 'EduLearn هي منصة تعليمية رائدة عبر الإنترنت مكرسة لتقديم تعليم عالي الجودة للجميع.',
      quickLinks: 'روابط سريعة',
      courses: 'الدورات',
      blog: 'المدونة',
      aboutUs: 'من نحن',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
      support: 'الدعم',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
      followUs: 'تابعنا',
      newsletter: 'النشرة البريدية',
      newsletterText: 'اشترك في نشرتنا للحصول على أحدث التحديثات',
      subscribe: 'اشترك',
      copyright: '© 2024 EduLearn. جميع الحقوق محفوظة.',
      language: 'اللغة'
    },

    // Common
    common: {
      loading: 'جارٍ التحميل...',
      error: 'خطأ',
      success: 'تم بنجاح',
      warning: 'تحذير',
      info: 'معلومة',
      confirm: 'تأكيد',
      yes: 'نعم',
      no: 'لا',
      ok: 'موافق',
      close: 'إغلاق',
      back: 'رجوع',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      reset: 'إعادة تعيين',
      clear: 'مسح',
      apply: 'تطبيق',
      showMore: 'عرض المزيد',
      showLess: 'عرض أقل',
      viewDetails: 'عرض التفاصيل',
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      tryNow: 'جرّب الآن',
      comingSoon: 'قريبًا',
      notFound: 'غير موجود',
      pageNotFound: 'الصفحة غير موجودة',
      goHome: 'العودة إلى الرئيسية',
      required: 'إجباري',
      optional: 'اختياري',
      select: 'اختر',
      all: 'الكل',
      none: 'لا شيء',
      other: 'أخرى'
    },

    // Validation Messages
    validation: {
      required: 'هذا الحقل مطلوب',
      email: 'يرجى إدخال بريد إلكتروني صالح',
      password: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل',
      passwordMatch: 'كلمتا المرور غير متطابقتين',
      minLength: 'الحد الأدنى للطول هو {min} أحرف',
      maxLength: 'الحد الأقصى للطول هو {max} أحرف',
      invalidFormat: 'تنسيق غير صالح',
      invalidCard: 'رقم البطاقة غير صالح',
      invalidCVV: 'رمز الأمان غير صالح',
      invalidExpiry: 'تاريخ انتهاء غير صالح'
    },

    // Success Messages
    success: {
      loginSuccess: 'تم تسجيل الدخول بنجاح!',
      signupSuccess: 'تم إنشاء الحساب بنجاح!',
      logoutSuccess: 'تم تسجيل الخروج بنجاح!',
      addedToCart: 'تمت الإضافة إلى السلة!',
      removedFromCart: 'تمت الإزالة من السلة!',
      orderPlaced: 'تم تقديم الطلب بنجاح!',
      commentPosted: 'تم نشر التعليق بنجاح!',
      profileUpdated: 'تم تحديث الملف الشخصي بنجاح!',
      passwordChanged: 'تم تغيير كلمة المرور بنجاح!',
      saved: 'تم الحفظ بنجاح!',
      deleted: 'تم الحذف بنجاح!',
      updated: 'تم التحديث بنجاح!'
    },

    // Error Messages
    error: {
      loginFailed: 'فشل تسجيل الدخول. يرجى التحقق من البيانات.',
      signupFailed: 'فشل إنشاء الحساب. حاول مرة أخرى.',
      invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      emailExists: 'البريد الإلكتروني مستخدم بالفعل',
      networkError: 'خطأ في الاتصال. تحقق من الإنترنت.',
      serverError: 'خطأ في الخادم. حاول لاحقًا.',
      notFound: 'المورد غير موجود',
      unauthorized: 'دخول غير مصرح به',
      forbidden: 'الوصول مرفوض',
      validationError: 'يرجى تصحيح الأخطاء والمحاولة مجددًا',
      genericError: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
    }
  }
};

/**
 * Translation helper function
 * @param {string} key - Translation key (dot notation)
 * @param {string} lang - Language code (en/ar)
 * @returns {string} Translated text
 */
function translate(key, lang = Storage.language.get()) {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return value || key;
}

/**
 * Update all translatable elements on the page
 * @param {string} lang - Language code (en/ar)
 */
function updatePageTranslations(lang = Storage.language.get()) {
  // Update text content for elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translate(key, lang);
  });

  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    element.placeholder = translate(key, lang);
  });

  // Update titles
  document.querySelectorAll('[data-translate-title]').forEach(element => {
    const key = element.getAttribute('data-translate-title');
    element.title = translate(key, lang);
  });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, translate, updatePageTranslations };
}
