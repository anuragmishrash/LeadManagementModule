# Contributing to Lead Management CRM System

Thank you for your interest in contributing to the Lead Management CRM System! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- MongoDB Atlas account (for database)

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/LeadManagementModule.git`
3. Install dependencies: `npm install && cd server && npm install`
4. Set up environment variables (copy `.env.example` files)
5. Start development servers: `npm run dev:full`

## 📝 Commit Message Guidelines

We follow conventional commit messages for better project history:

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- **feat**: New feature implementation
- **fix**: Bug fixes
- **docs**: Documentation updates
- **style**: Code formatting changes (no logic changes)
- **refactor**: Code refactoring without feature changes
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

### Examples
```bash
feat(frontend): implement advanced lead filtering system
fix(api): resolve lead deletion error handling
docs(readme): update installation instructions
style(components): format LeadForm component with prettier
refactor(backend): optimize database query performance
test(api): add unit tests for lead routes
chore(deps): update React to version 18.2.0
```

### Scope Guidelines
- **frontend**: React components, UI, styling
- **backend**: API routes, database, server logic
- **api**: Specific API endpoint changes
- **components**: React component updates
- **database**: Database schema or query changes
- **config**: Configuration file changes

## 🔧 Development Workflow

### Branch Naming
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-bug`
- Documentation: `docs/description-of-update`
- Refactoring: `refactor/description-of-refactor`

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with appropriate commit messages
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with:
   - Clear title and description
   - Screenshots for UI changes
   - Test results
   - Breaking changes (if any)

## 🧪 Testing Guidelines

### Frontend Testing
- Test React components with user interactions
- Validate form submissions and error handling
- Check responsive design on different screen sizes
- Verify API integration works correctly

### Backend Testing
- Test all API endpoints with various inputs
- Validate database operations
- Check error handling and status codes
- Test authentication and authorization

### Manual Testing Checklist
- [ ] Lead creation with all field combinations
- [ ] Lead search and filtering functionality
- [ ] Settings page functionality
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Error handling for network failures
- [ ] Form validation edge cases

## 📋 Code Style Guidelines

### Frontend (React/TypeScript)
- Use TypeScript for all new components
- Follow React Hooks patterns
- Use Tailwind CSS for styling
- Implement proper error boundaries
- Add proper TypeScript interfaces

### Backend (Node.js)
- Use async/await for asynchronous operations
- Implement proper error handling middleware
- Follow RESTful API conventions
- Add input validation for all endpoints
- Use meaningful variable and function names

### General Guidelines
- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Use consistent naming conventions
- Remove unused imports and variables

## 🐛 Bug Reports

When reporting bugs, please include:
- **Environment**: OS, Node.js version, browser
- **Steps to reproduce**: Clear step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For new features, please provide:
- **Use case**: Why is this feature needed?
- **Description**: Detailed explanation of the feature
- **Mockups**: UI mockups if applicable
- **Implementation ideas**: Technical approach suggestions

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions and components
- Update README.md for new features
- Include inline comments for complex logic
- Update API documentation for endpoint changes

### Component Documentation
```typescript
/**
 * LeadForm component for creating and editing leads
 * @param onSubmit - Callback function when form is submitted
 * @param isSubmitting - Loading state for form submission
 * @param initialData - Optional initial data for editing
 */
```

## 🔒 Security Guidelines

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Validate all user inputs
- Implement proper authentication checks
- Follow OWASP security guidelines

## 📞 Getting Help

- **Issues**: Create a GitHub issue for bugs or questions
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Contact anurag@leadcrm.com for urgent matters

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributor graphs

Thank you for contributing to make this project better! 🚀