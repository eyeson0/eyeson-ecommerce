# Contributing to EYESON

Thank you for your interest in contributing to EYESON!

## Code of Conduct

- Be respectful and inclusive
- Report issues responsibly
- Follow best practices
- Test your changes

## How to Contribute

### 1. Fork and Clone
```bash
git clone https://github.com/your-username/eyeson-ecommerce.git
cd eyeson-ecommerce
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Test thoroughly

### 4. Commit with Clear Messages
```bash
git commit -m "feat: Add description of your feature"
```

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding tests

### Example
```
feat(auth): Add email verification

Implement email verification using Nodemailer.
Support OTP codes with expiry.

Closes #123
```

## Development Guidelines

### Frontend
- Use React functional components
- Use TypeScript for type safety
- Follow TailwindCSS conventions
- Keep components small and reusable
- Use Zustand for state management

### Backend
- Use Express middleware patterns
- Validate all inputs server-side
- Use Prisma ORM for database queries
- Implement proper error handling
- Log important actions

### Database
- Use Prisma for all database operations
- Write migrations for schema changes
- Keep schema documentation updated
- Test migrations thoroughly

## Testing

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage
```

## Security

- Never commit secrets or API keys
- Always validate server-side
- Use HTTPS in production
- Hash passwords with Argon2id
- Implement rate limiting
- Sanitize user inputs

## Pull Request Checklist

- [ ] Tests pass
- [ ] No console errors
- [ ] Code is well-documented
- [ ] Types are properly defined
- [ ] No security issues
- [ ] Database migrations included (if needed)
- [ ] Updated README if needed

## Questions?

Feel free to ask in:
- GitHub Issues
- GitHub Discussions
- Email: dev@eyeson.com

Happy coding! 🚀
