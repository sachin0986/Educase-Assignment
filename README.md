# 🚀 Educase-Assignment

# 🌐 Live Demo
# Deployment Platforms

- Vercel : https://educase-assignment-oc2b.vercel.app/
- GitHub : https://github.com/sachin0986/Educase-Assignment


## ✨ Features

### Form Validation
- Comprehensive input validation
- Real-time error messaging
- Strict required field checks

### Technical Specifications
- React Hooks
- React Router integration
- Tailwind CSS styling
- Responsive design
- Client-side validation

## 🛠 Prerequisites

Before installation, ensure you have:
- Node.js (v16+)
- npm (v8+)
- React (v18+)

## 📦 Installation

### Clone the Repository
```bash
git clone https://github.com/sachin0986/Educase-Assignment
cd Educase-Assignment
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Required Packages
- react-router-dom
- tailwindcss
- @Lucide React

## 🔧 Configuration

### Tailwind CSS Setup
Create `tailwind.config.js`:
```javascript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Routing Configuration
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}
```

## 📝 Validation Rules

### Full Name
- Required
- Minimum 2 characters
- No special characters

### Phone Number
- Required
- 10 digits
- Numbers only

### Email
- Required
- Valid email format
- Unique email check (backend implementation)

### Password
- Required
- Minimum 8 characters
- Must contain:
  * Uppercase letter
  * Lowercase letter
  * Number
  * Special character

### Company Name
- Optional
- Maximum 100 characters

### Agency Status
- Required selection
- Boolean (Yes/No)

## 🚀 Running the Project

### Development Mode
```bash
npm start
# or
yarn start
```

### Production Build
```bash
npm run build
# or
yarn build
```

## 🧪 Testing

### Run Tests
```bash
npm test
# or
yarn test
```

## 🔒 Security Considerations

- Implement HTTPS
- Use secure password hashing
- Implement CSRF protection
- Validate and sanitize all inputs
- Use environment variables for sensitive configurations

## 📡 API Integration

### Recommended Endpoints
- `/` - Home
- `/create-account` - User registration
- `/sign-in` - user SignIn
- `/account-settings` - User Account Details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

### Contribution Guidelines
- Follow existing code style
- Write tests for new features
- Update documentation
- Ensure code passes all checks

## 📄 License

Distributed under MIT License. 
See `LICENSE.md` for more information.

## 📞 Contact

Project Maintainer: Sachin Arora
- Email: sachinarora8279@gmail.com
- Project Link: https://github.com/sachin0986/Educase-Assignment

## 🌟 Acknowledgments

- React
- Tailwind CSS
- React Router
- Community Contributors

---

**Built with ❤️ by PopX Team**