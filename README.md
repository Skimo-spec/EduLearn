# EduLearn LMS - Bilingual Learning Management System

A lightweight, responsive Learning Management System built with vanilla HTML, CSS, and JavaScript. Features full bilingual support (English/Arabic) with RTL layout, modern UI components, and comprehensive course management functionality.

## 🌟 Features

### Core Functionality
- **Bilingual Support**: Full English and Arabic translations with RTL layout
- **Responsive Design**: Mobile-first design with breakpoints at 360px, 768px, and 1024px
- **User Authentication**: Login/signup with role-based access (Student, Instructor, Admin)
- **Course Management**: Browse, search, filter, and enroll in courses
- **Shopping Cart**: Add courses to cart and complete checkout
- **Blog System**: Read articles with categories, tags, and comments
- **Certificate Generation**: Printable certificates upon course completion
- **Admin Dashboard**: Manage users, courses, blog posts, and orders

### Technical Features
- **Client-Side Only**: Runs entirely in the browser with localStorage
- **Modern CSS**: CSS variables, flexbox, grid, and utility classes
- **Vanilla JavaScript**: ES6+ features, modular architecture
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Form Validation**: Real-time validation with helpful error messages
- **Toast Notifications**: User-friendly feedback system
- **Modal System**: Reusable modal components
- **Responsive Navigation**: Hamburger menu for mobile devices

## 📁 Project Structure

```
المنصه التعليميه/
├── index.html              # Landing page
├── blog.html               # Blog listing page
├── blog-details.html       # Individual blog post
├── login.html              # Login page
├── signup.html             # Registration page
├── course-details.html     # Course details page
├── checkout.html           # Shopping cart & checkout
├── certificate.html        # Certificate generation
├── admin.html              # Admin dashboard
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css           # Browser normalization
│   ├── utilities.css       # Utility classes
│   ├── components.css      # Reusable components
│   ├── layout.css          # Layout & grid system
│   └── pages.css           # Page-specific styles
├── js/
│   ├── config.js           # App configuration
│   ├── translations.js     # Bilingual translations
│   ├── storage.js          # localStorage wrapper
│   ├── auth.js             # Authentication system
│   ├── validation.js       # Form validation
│   ├── ui.js               # UI components
│   ├── data.js             # Mock data
│   ├── router.js           # Client-side routing
│   └── main.js             # App initialization
├── assets/
│   ├── images/             # Image assets
│   └── icons/              # SVG icons
├── README.md               # This file
└── TODO.md                 # Development tracker
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd المنصه-التعليميه
   ```

2. **Open with a local server** (recommended)
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

   Or simply open `index.html` directly in your browser.

## 👤 Demo Credentials

### Admin Account
- **Email**: admin@edulearn.com
- **Password**: Admin123

### Instructor Account
- **Email**: instructor@edulearn.com
- **Password**: Instructor123

### Student Account
- **Email**: student@edulearn.com
- **Password**: Student123

## 🎨 Design System

### Colors
- **Primary**: #4F46E5 (Indigo)
- **Secondary**: #10B981 (Green)
- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444
- **Info**: #3B82F6

### Typography
- **Primary Font**: Inter, system fonts
- **Arabic Font**: Cairo, Tajawal
- **Base Size**: 16px
- **Scale**: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px

### Breakpoints
- **Mobile**: 360px
- **Tablet**: 768px
- **Desktop**: 1024px

## 🌐 Bilingual Support

### Switching Languages
Click the language switcher button in the header or footer to toggle between English and Arabic. The selection is saved in localStorage and persists across sessions.

### RTL Layout
When Arabic is selected:
- Text direction changes to right-to-left
- Layout mirrors appropriately
- Navigation and UI elements flip
- Arabic fonts are applied

### Adding Translations
Edit `js/translations.js` to add or modify translations:

```javascript
const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      // ... more translations
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      // ... more translations
    }
  }
};
```

## 📚 Usage Guide

### For Students
1. **Browse Courses**: Explore available courses on the home page
2. **Search & Filter**: Use search and category filters to find courses
3. **View Details**: Click on a course to see full details and curriculum
4. **Add to Cart**: Add courses to your shopping cart
5. **Checkout**: Complete the purchase process
6. **Get Certificate**: Receive a certificate upon completion

### For Instructors
1. **Login**: Use instructor credentials
2. **Create Courses**: Access course creation tools (admin panel)
3. **Manage Content**: Edit course materials and curriculum
4. **View Students**: See enrolled students and their progress

### For Admins
1. **Login**: Use admin credentials
2. **Dashboard**: View statistics and overview
3. **Manage Users**: Add, edit, or remove users
4. **Manage Courses**: Create, edit, or delete courses
5. **Manage Blog**: Publish and manage blog posts
6. **View Orders**: Track all transactions
7. **Export Data**: Download reports as CSV

## 🔧 Configuration

Edit `js/config.js` to customize:

```javascript
const CONFIG = {
  appName: 'EduLearn LMS',
  defaultLanguage: 'en',
  itemsPerPage: {
    courses: 9,
    blogs: 9
  },
  // ... more settings
};
```

## 🎯 Key Features Explained

### Authentication System
- Mock authentication with demo accounts
- Role-based access control (Student, Instructor, Admin)
- Session persistence with localStorage
- Password strength validation

### Shopping Cart
- Add/remove courses
- Persistent cart across sessions
- Real-time total calculation
- Checkout process with form validation

### Course Management
- Browse and search courses
- Filter by category and level
- View detailed curriculum
- Enrollment tracking
- Progress monitoring

### Blog System
- Article listing with pagination
- Category and tag filtering
- Search functionality
- Comments system (localStorage)
- Social sharing buttons

### Certificate Generation
- Automatic certificate creation
- Unique certificate IDs
- Printable format
- PDF export option (with jsPDF)
- RTL support for Arabic certificates

### Admin Dashboard
- User management
- Course CRUD operations
- Blog post management
- Order tracking
- Statistics and analytics
- CSV export functionality

## 🔒 Security Notes

**Important**: This is a demo application for educational purposes. For production use:

1. **Never store passwords in plain text**
2. **Implement server-side authentication**
3. **Use HTTPS for all communications**
4. **Validate all inputs on the server**
5. **Implement proper session management**
6. **Add CSRF protection**
7. **Sanitize user-generated content**
8. **Use environment variables for sensitive data**

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The application is fully responsive with three main breakpoints:

- **Mobile (360px - 767px)**: Single column layout, hamburger menu
- **Tablet (768px - 1023px)**: Two column layout, expanded navigation
- **Desktop (1024px+)**: Multi-column layout, full navigation

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🐛 Known Issues

- Certificate PDF export requires jsPDF library (optional)
- localStorage has size limitations (typically 5-10MB)
- No real-time updates (refresh required)
- Mock data resets on browser cache clear

## 🔮 Future Enhancements

- [ ] Video player integration
- [ ] Real-time chat support
- [ ] Progress tracking with charts
- [ ] Email notifications
- [ ] Social media integration
- [ ] Advanced search with filters
- [ ] Course recommendations
- [ ] Payment gateway integration
- [ ] Backend API integration
- [ ] Mobile app version

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 👥 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📞 Support

For questions or support, please open an issue in the repository.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from various open-source projects
- Fonts: Inter, Cairo, Tajawal
- Inspiration from modern LMS platforms

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
