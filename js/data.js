// Courses Data
const Data = {
  courses: [
    {
      id: 1,
      title: 'القياده الاستراتيجيه في المؤسسات الحكوميه',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      description: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      category: 'البرامج الاداريه والقياديه',
      level: 'Beginner',
      price: 99.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff',
        title: 'Senior Web Developer',
        bio: '10+ years of experience in web development'
      },
      rating: 4.8,
      reviewsCount: 1250,
      studentsCount: 15420,
      duration: '40 hours',
      lessonsCount: 156,
      language: 'English',
      lastUpdated: '2024-01-15',
      bestseller: true,
      featured: true,
      whatYouLearn: [
        'Build responsive websites with HTML, CSS, and JavaScript',
        'Master modern JavaScript ES6+ features',
        'Create dynamic web applications with React',
        'Build RESTful APIs with Node.js and Express',
        'Work with databases (MongoDB, PostgreSQL)',
        'Deploy applications to production'
      ],
      requirements: [
        'Basic computer skills',
        'No programming experience required',
        'A computer with internet connection'
      ],
      curriculum: [
        {
          id: 1,
          title: 'Introduction to Web Development',
          lessons: [
            { id: 1, title: 'Welcome to the Course', duration: '5:30', type: 'video', free: true },
            { id: 2, title: 'Setting Up Your Environment', duration: '12:45', type: 'video', free: true },
            { id: 3, title: 'How the Web Works', duration: '15:20', type: 'video', free: false }
          ]
        },
        {
          id: 2,
          title: 'HTML Fundamentals',
          lessons: [
            { id: 4, title: 'HTML Basics', duration: '20:15', type: 'video', free: false },
            { id: 5, title: 'HTML Forms', duration: '18:30', type: 'video', free: false },
            { id: 6, title: 'Semantic HTML', duration: '16:45', type: 'video', free: false }
          ]
        },
        {
          id: 3,
          title: 'CSS Styling',
          lessons: [
            { id: 7, title: 'CSS Basics', duration: '22:10', type: 'video', free: false },
            { id: 8, title: 'Flexbox Layout', duration: '25:30', type: 'video', free: false },
            { id: 9, title: 'CSS Grid', duration: '28:15', type: 'video', free: false }
          ]
        }
      ],
      reviews: [
        {
          id: 1,
          user: 'Sarah Johnson',
          avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random',
          rating: 5,
          date: '2024-01-10',
          comment: 'Excellent course! Very comprehensive and well-structured.'
        },
        {
          id: 2,
          user: 'Mike Chen',
          avatar: 'https://ui-avatars.com/api/?name=Mike+Chen&background=random',
          rating: 4,
          date: '2024-01-08',
          comment: 'Great content, but could use more practical projects.'
        }
      ]
    },
    {
      id: 2,
      title: 'اداره الاداء والتخطيط الاستراتيجي',
      excerpt: 'تعلم كيفيه التخطيط والطرق الصحيحه لتنفيذها',
      description: 'تعلم كيفيه التخطيط والطرق الصحيحه لتنفيذها',
      category: 'البرامج الاداريه والقياديه',
      level: 'Beginner',
      price: 79.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.9,
      reviewsCount: 2100,
      studentsCount: 18900,
      duration: '30 hours',
      lessonsCount: 95,
      language: 'English',
      lastUpdated: '2024-01-18',
      featured: true,
      whatYouLearn: [
        'Design principles and best practices',
        'User research and persona creation',
        'Wireframing and prototyping',
        'Visual design and typography',
        'Usability testing'
      ],
      requirements: [
        'No prior design experience needed',
        'Computer with Figma installed (free)'
      ]
    },
    {
      id: 3,
      title: 'تطوير مهارات المديرين التنفيذيين',
      excerpt: 'A comprehensive guide for instructors looking to create engaging online courses.',
      description: 'A comprehensive guide for instructors looking to create engaging online courses.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Intermediate',
      price: 94.99,
      originalPrice: 189.99,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.6,
      reviewsCount: 750,
      studentsCount: 9800,
      duration: '45 hours',
      lessonsCount: 142,
      language: 'English',
      lastUpdated: '2024-01-20',
      whatYouLearn: [
        'React Native fundamentals',
        'Navigation and routing',
        'State management with Redux',
        'API integration',
        'Publishing to App Store and Play Store'
      ],
      requirements: [
        'JavaScript and React knowledge required',
        'Basic understanding of mobile development'
      ]
    },
    {
      id: 4,
      title: 'اداره الوقت واتخاذ القرار',
      excerpt: 'Learn how to stay productive and maintain work-life balance while working remotely.',
      description: 'Learn how to stay productive and maintain work-life balance while working remotely.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Beginner',
      price: 69.99,
      originalPrice: 139.99,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.5,
      reviewsCount: 1450,
      studentsCount: 16700,
      duration: '25 hours',
      lessonsCount: 88,
      language: 'English',
      lastUpdated: '2024-01-14',
      whatYouLearn: [
        'SEO optimization techniques',
        'Social media marketing strategies',
        'Email marketing campaigns',
        'Google Ads and Facebook Ads',
        'Analytics and reporting'
      ],
      requirements: [
        'No prior marketing experience needed',
        'Basic internet skills'
      ]
    },
    {
      id: 5,
      title: 'مهارات التفاوض والاقناع',
      excerpt: 'A beginner-friendly guide to understanding machine learning concepts and applications.',
      description: 'A beginner-friendly guide to understanding machine learning concepts and applications.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Advanced',
      price: 109.99,
      originalPrice: 219.99,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 980,
      studentsCount: 11200,
      duration: '50 hours',
      lessonsCount: 165,
      language: 'English',
      lastUpdated: '2024-01-16',
      bestseller: true,
      whatYouLearn: [
        'Supervised and unsupervised learning',
        'Neural networks and deep learning',
        'Natural language processing',
        'Computer vision',
        'Model deployment'
      ],
      requirements: [
        'Python programming experience',
        'Statistics and linear algebra knowledge',
        'Calculus basics'
      ]
    },
    {
      id: 6,
      title: 'القياده التحويليه واداره التغيير المؤسسي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Beginner',
      price: 59.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.7,
      reviewsCount: 1680,
      studentsCount: 14500,
      duration: '20 hours',
      lessonsCount: 72,
      language: 'English',
      lastUpdated: '2024-01-11',
      whatYouLearn: [
        'Camera settings and controls',
        'Composition techniques',
        'Lighting fundamentals',
        'Photo editing with Lightroom',
        'Building a photography portfolio'
      ],
      requirements: [
        'A camera (DSLR, mirrorless, or smartphone)',
        'No prior photography experience needed'
      ]
    },
    {
      id: 7,
      title: 'بناء فرق العمل عاليه الكفاءه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Intermediate',
      price: 84.99,
      originalPrice: 169.99,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.6,
      reviewsCount: 820,
      studentsCount: 10300,
      duration: '28 hours',
      lessonsCount: 96,
      language: 'English',
      lastUpdated: '2024-01-13',
      whatYouLearn: [
        'Strategic planning frameworks',
        'Business model development',
        'Financial analysis',
        'Leadership and team management',
        'Change management'
      ],
      requirements: [
        'Basic business knowledge helpful',
        'Interest in entrepreneurship or management'
      ]
    },
    {
      id: 8,
      title: 'حوكمه المؤسسات واداره المخاطر',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاداريه والقياديه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 9,
      title: 'صياغه العقود والاتفاقيات الدوليه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 10,
      title: 'التحكيم التجاري الدولي وآلياته',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 11,
      title: 'القانون الاداري وتطبيقاته العمليه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 12,
      title: 'الملكيه الفكريه وحمايه الابتكار',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 13,
      title: 'مكافحه الفساد والحوكمه القانونيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 14,
      title: 'القاضي في العصر الرقمي: التعامل مع الادله الاكترونيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج القانونيه والقضائيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 15,
      title: 'السياسات الاقتصاديه العربيه المشتركه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 16,
      title: 'اداره الميزانيه العامه والتحليل المالي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 17,
      title: 'اقتصاديات التنميه المستدامه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 18,
      title: 'الاستثمار الاجنبي المباشر واداره المخاطر',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 19,
      title: 'تمويل المشروعات الصغيره والمتوسطه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 20,
      title: 'الاقتصاد الرقمي والتحول المالي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 21,
      title: 'دراسات الجدوي الاقتصاديه للمشروعات',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'البرامج الاقتصاديه والماليه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 22,
      title: 'التحول الرقمي في المؤسسات الحكوميه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 23,
      title: 'تطبيقات الذكاء الاصطناعي في الاداره والاقتصاد',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 24,
      title: 'امن المعلومات وحمايه البيانات',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 25,
      title: 'نظام الERP وتكامل الانظمه المؤسسيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 26,
      title: 'التحليل الرقمي للبيانات واتخاذ القرار',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 27,
      title: 'المهارات الرقميه للعاملين في القطاعات العامه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 28,
      title: 'مهارات التواصل الفعال وفن التعامل مع الاخرين',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه البشريه وبناء القدرات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 29,
      title: 'اداره الضغوطات المهنيه وتحقيق التوازن النفسي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه البشريه وبناء القدرات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 30,
      title: 'الابداع والابتكار في بيئه العمل',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه البشريه وبناء القدرات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 27,
      title: 'الذكاء العاطفي في القياده والاداره',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه البشريه وبناء القدرات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 28,
      title: 'البرمجه اللغويه العصبيه وتطوير الذات',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه البشريه وبناء القدرات',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 29,
      title: 'اداره المنشآت الفندقيه الحديثه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج السياحه والفنادق',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 30,
      title: 'التسويق السياحي الالكتروني',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج السياحه والفنادق',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 31,
      title: 'جوده الخدمه الفندقيه والتميز في تجربه الضيف',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج السياحه والفنادق',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 32,
      title: 'السياحه المستدامه والاقتصاد الاخضر',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج السياحه والفنادق',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 33,
      title: 'تنشيط السياحه البينيه العربيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج السياحه والفنادق',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 34,
      title: 'التنافسيه الصناعيه في الاسواق العربيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الصناعه والتجاره',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 35,
      title: 'سلاسل الامداد والتوريد الحديثه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الصناعه والتجاره',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 36,
      title: 'التجاره الالكترونيه في الوطن العربي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الصناعه والتجاره',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 37,
      title: 'تنميه الصادرات وتعزيز التجاره البينيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الصناعه والتجاره',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 38,
      title: 'معايير الجوده والتصنيع الذكي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الصناعه والتجاره',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 39,
      title: 'الاقتصاد الاخضر واداره الموارد الطبيعيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 40,
      title: 'الطاقه المتجدده وكفاءه الطاقه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 41,
      title: 'الاستدامه المؤسسيه والمسؤوليه المجتمعيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 42,
      title: 'اداره النفايات واعاده التدوير',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 43,
      title: 'التغير المناخي والسياسات البيئيه العربيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 44,
      title: 'الدبلوماسيه الاقتصاديه والتعاون العربي الدولي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 45,
      title: 'بروتوكولات المراسم الرسميه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 46,
      title: 'اعداد المذكرات والخطابات الرسميه الدوليه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 47,
      title: 'الاعلام الدبلوماسي وصناعه الصور الذهنيه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 48,
      title: 'مهارات المتحدث الرسمي واداره الازمات الاعلاميه',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الاعلام والعلاقات العامه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 49,
      title: 'العلاقات العامه الدوليه والاتصال المؤسسي',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الاعلام والعلاقات العامه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 50,
      title: 'الاعلام التنموي ودوره في دعم الاقتصاد',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الاعلام والعلاقات العامه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
    {
      id: 51,
      title: 'تصميم الحملات الاعلاميه الفعاله',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      description: 'Learn how design thinking can help you solve complex problems creatively.',
      category: 'برامج الاعلام والعلاقات العامه',
      level: 'Beginner',
      price: 74.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      instructor: {
        id: 2,
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      rating: 4.8,
      reviewsCount: 1120,
      studentsCount: 13400,
      duration: '32 hours',
      lessonsCount: 108,
      language: 'English',
      lastUpdated: '2024-01-17',
      whatYouLearn: [
        'Ableton Live interface and workflow',
        'Music theory basics',
        'Sound design and synthesis',
        'Mixing and mastering',
        'Creating different music genres'
      ],
      requirements: [
        'Computer with Ableton Live (trial version OK)',
        'No musical experience required'
      ]
    },
  ],

  // Blog Posts Data
  blogs: [
    {
      id: 1,
      title: 'القياده الاستراتيجيه في المؤسسات الحكوميه',
      slug: 'design-thinking-problem-solving',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 2,
      title: 'اداره الاداء والتخطيط الاستراتيجي',
      slug: 'future-web-development-2024',
      excerpt: 'تعلم كيفيه التخطيط والطرق الصحيحه لتنفيذها',
      content: `<p>Web development is constantly evolving. Let's look at the key trends that will define 2024...</p>`,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Web Development', 'Trends', '2024'],
      date: '2024-01-18',
      readingTime: 10,
      views: 3200
    },
    {
      id: 3,
      title: 'تطوير مهارات المديرين التنفيذيين',
      slug: 'build-successful-online-course',
      excerpt: 'A comprehensive guide for instructors looking to create engaging online courses.',
      content: `<p>Creating an online course requires careful planning and execution. Here's how to do it right...</p>`,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Online Learning', 'Course Creation', 'Teaching'],
      date: '2024-01-15',
      readingTime: 12,
      views: 1890,
      featured: true
    },
    {
      id: 4,
      title: 'اداره الوقت واتخاذ القرار',
      slug: 'mastering-remote-work-tips',
      excerpt: 'Learn how to stay productive and maintain work-life balance while working remotely.',
      content: `<p>Remote work has become the new normal. Here are strategies to excel in a remote environment...</p>`,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Remote Work', 'Productivity', 'Work-Life Balance'],
      date: '2024-01-12',
      readingTime: 7,
      views: 2780
    },
    {
      id: 5,
      title: 'مهارات التفاوض والاقناع',
      slug: 'introduction-machine-learning-beginners',
      excerpt: 'A beginner-friendly guide to understanding machine learning concepts and applications.',
      content: `<p>Machine learning might seem complex, but the basics are accessible to everyone. Let's start...</p>`,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Machine Learning', 'AI', 'Beginners'],
      date: '2024-01-10',
      readingTime: 15,
      views: 4100
    },
    {
      id: 6,
      title: 'القياده التحويليه واداره التغيير المؤسسي',
      slug: 'design-thinking-problem-solving',
      excerpt: 'Learn how design thinking can help you solve complex problems creatively.',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 7,
      title: 'بناء فرق العمل عاليه الكفاءه',
      slug: 'design-thinking-problem-solving',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 8,
      title: 'حوكمه المؤسسات واداره المخاطر',
      slug: 'حوكمه المؤسسات واداره المخاطر',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاداريه والقياديه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 9,
      title: 'صياغه العقود والاتفاقات الدوليه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 10,
      title: 'التحكيم التجاري الدولي وآلياته',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 11,
      title: 'القانون الاداري وتطبيقاته العمليه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 12,
      title: 'الملكيه الفكريه وحمايه الابتكار',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 13,
      title: 'مكافحه الفساد والحوكمه القانونيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 14,
      title: 'القاضي في العصر الرقمي: التعامل مع الادله القانونيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 15,
      title: 'تطوير مهارات المستشارين القانونيين',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج القانونيه والقضائيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 16,
      title: 'السياسات الاقتصاديه العربيه المشتركه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 17,
      title: 'إداره الميزانيه العامه والتحليل المالي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 18,
      title: 'اقتصاديات التنميه المستدامه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 19,
      title: 'الاستثمار الاجنبي المباشر وإداره المخاطر',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 20,
      title: 'تمويل المشروعات الصغيره والمتوسطه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 21,
      title: 'الاقتصاد الرقمي والتحول المالي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 22,
      title: 'دراسات الجدوي الاقتصاديه للمشروعات',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'البرامج الاقتصاديه والماليه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 23,
      title: 'التحول الرقمي في المؤسسات الحكوميه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 24,
      title: 'تطبيقات الذكاء الاصطناعي في الاداره والاقتصاد',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 25,
      title: 'امن المعلومات وحمايه البيانات',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 26,
      title: 'نظام الERP وتكامل الانظمه المؤسسيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 27,
      title: 'التحليل الرقمي للبيانات واتخاذ القرار',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 28,
      title: 'المهارات الرقميه للعاملين في القطاعات العامه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التحول الرقمي وتكنولوجيا المعلومات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 29,
      title: 'مهارات التواصل الفعال وفن التعامل مع الاخرين',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه البشريه وبناء القدرات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 30,
      title: 'إداره الضغوط المهنيه وتحقيق التوازن النفسي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه البشريه وبناء القدرات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 31,
      title: 'الابداع والابتكار في بيئه العمل',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه البشريه وبناء القدرات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 32,
      title: 'الذكاء العاطفي في القيادات والاداره',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه البشريه وبناء القدرات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 33,
      title: 'البرمجه اللغويه العصبيه وتطوير الذات',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه البشريه وبناء القدرات',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 34,
      title: 'اداره المنشآت الفندقيه الحديثه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج السياحه والفنادق',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 35,
      title: 'التسويق السياحي الالكتروني',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج السياحه والفنادق',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 36,
      title: 'جوده الخدمه الفندقيه والتميز في تجربه الضيف',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج السياحه والفنادق',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 37,
      title: 'السياحه المستدامه والاقتصاد الاخضر',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج السياحه والفنادق',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 38,
      title: 'تنشيط السياحه البينيه العربيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج السياحه والفنادق',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 39,
      title: 'التنافسيه الصناعيه في الاسواق العربيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الصناعه والتجاره',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 40,
      title: 'سلاسل الامداد والتوريد الحديثه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الصناعه والتجاره',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 41,
      title: 'التجاره الالكترونيه في الوطن العربي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الصناعه والتجاره',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 42,
      title: 'تنميه الصادرات وتعزيز التجاره البينيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الصناعه والتجاره',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 43,
      title: 'معايير الجوده والتصنيع الذكي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الصناعه والتجاره',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 44,
      title: 'الاقتصاد الاخضر واداره الموارد الطبيعيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 45,
      title: 'الطاقه المتجدده وكفاءه الطاقه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 46,
      title: 'الاستدامه المؤسسيه والمسؤوليه المجتمعيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 47,
      title: 'إداره النفايات وإعاده التدوير',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 48,
      title: 'التغير المناخي والسياسات البيئيه العربيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج التنميه المستدامه والطاقه والبيئه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 49,
      title: 'الدبلوماسيه الاقتصاديه والتعاون العربي الدولي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 50,
      title: 'بروتوكولات المراسم الرسميه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 51,
      title: 'إعداد المذكرات والخطابات الرسميه الدوليه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 52,
      title: 'الاعلام الدبلوماسي وصناعه الصوره الذهنيه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج العلاقات الدوليه والدبلوماسيه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 53,
      title: 'مهارات المتحدث الرسمي وإداره الازمات الاعلاميه',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الاعلام والعلاقات العامه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 54,
      title: 'العلاقات العامه الدوليه والاتصال المؤسسي',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الاعلام والعلاقات العامه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 55,
      title: 'الاعلام التنموي ودروه في دعم الاقتصاد',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الاعلام والعلاقات العامه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
    {
      id: 56,
      title: 'تصميم الحملات الاعلاميه الفعاله',
      slug: '',
      excerpt: 'تعلم كيفيه القياده بطرق فعاله علي يد متخصصين',
      content: `<p>Design thinking is a human-centered approach to innovation. Here's how to apply it...</p>`,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
      author: {
        name: 'John Instructor',
        avatar: 'https://ui-avatars.com/api/?name=John+Instructor&background=10B981&color=fff'
      },
      category: 'برامج الاعلام والعلاقات العامه',
      tags: ['Design Thinking', 'Innovation', 'Problem Solving'],
      date: '2024-01-08',
      readingTime: 9,
      views: 1650
    },
  ],

  /**
   * Get all courses
   */
  getCourses() {
    return this.courses;
  },

  /**
   * Get course by ID
   */
  getCourseById(id) {
    return this.courses.find(course => course.id === parseInt(id));
  },

  /**
   * Get course by slug
   */
  getCourseBySlug(slug) {
    return this.courses.find(course => course.slug === slug);
  },

  /**
   * Get courses by category
   */
  getCoursesByCategory(category) {
    return this.courses.filter(course => course.category === category);
  },

  /**
   * Get featured courses
   */
  getFeaturedCourses() {
    return this.courses.filter(course => course.featured);
  },

  /**
   * Get bestseller courses
   */
  getBestsellerCourses() {
    return this.courses.filter(course => course.bestseller);
  },

  /**
   * Search courses
   */
  searchCourses(query) {
    const lowerQuery = query.toLowerCase();
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(lowerQuery) ||
      course.description.toLowerCase().includes(lowerQuery) ||
      course.category.toLowerCase().includes(lowerQuery)
    );
  },

  /**
   * Get all blogs
   */
  getBlogs() {
    return this.blogs;
  },

  /**
   * Get blog by ID
   */
  getBlogById(id) {
    return this.blogs.find(blog => blog.id === parseInt(id));
  },

  /**
   * Get blog by slug
   */
  getBlogBySlug(slug) {
    return this.blogs.find(blog => blog.slug === slug);
  },

  /**
   * Get blogs by category
   */
  getBlogsByCategory(category) {
    return this.blogs.filter(blog => blog.category === category);
  },

  /**
   * Get featured blogs
   */
  getFeaturedBlogs() {
    return this.blogs.filter(blog => blog.featured);
  },

  /**
   * Search blogs
   */
  searchBlogs(query) {
    const lowerQuery = query.toLowerCase();
    return this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(lowerQuery) ||
      blog.excerpt.toLowerCase().includes(lowerQuery) ||
      blog.category.toLowerCase().includes(lowerQuery)
    );
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Data;
}
