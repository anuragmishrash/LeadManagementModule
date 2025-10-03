@echo off
echo ========================================
echo   Lead Management CRM - GitHub Setup
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo Error: Failed to initialize Git repository
    pause
    exit /b 1
)

echo.
echo Step 2: Adding remote repository...
git remote add origin https://github.com/anuragmishrash/LeadManagementModule.git
if %errorlevel% neq 0 (
    echo Warning: Remote might already exist or URL is incorrect
)

echo.
echo Step 3: Adding all files to Git...
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files
    pause
    exit /b 1
)

echo.
echo Step 4: Creating initial commit...
git commit -m "Initial commit: Complete Lead Management CRM System

Features implemented:
- Professional CRM interface with dark sidebar navigation
- Comprehensive lead management with 15+ form fields
- Advanced search and filtering capabilities
- Real-time dashboard with lead statistics
- Settings management with multi-tab interface
- Full-stack integration with React + Node.js + MongoDB
- TypeScript support for type safety
- Responsive design for all screen sizes
- Professional table view with status badges
- Modal-based lead creation
- Form validation with real-time error handling
- Optimistic UI updates for better UX

Tech Stack:
- Frontend: React 18, TypeScript, Tailwind CSS, Vite
- Backend: Node.js, Express.js, MongoDB Atlas
- Form Handling: React Hook Form + Yup validation
- HTTP Client: Axios with proxy configuration

Admin: Anurag Mishra"

if %errorlevel% neq 0 (
    echo Error: Failed to create commit
    pause
    exit /b 1
)

echo.
echo Step 5: Pushing to GitHub...
echo Note: You may need to authenticate with GitHub
git branch -M main
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo   Manual Push Required
    echo ========================================
    echo.
    echo The repository has been set up locally.
    echo To push to GitHub, run these commands:
    echo.
    echo   git branch -M main
    echo   git push -u origin main
    echo.
    echo Make sure you have:
    echo 1. Created the repository on GitHub
    echo 2. Set up authentication (SSH key or token)
    echo.
) else (
    echo.
    echo ========================================
    echo   Success! 
    echo ========================================
    echo.
    echo Repository successfully pushed to GitHub!
    echo.
    echo Repository URL: https://github.com/anuragmishrash/LeadManagementModule
    echo.
    echo Next steps:
    echo 1. Visit the GitHub repository
    echo 2. Add a description and topics
    echo 3. Enable GitHub Pages if needed
    echo 4. Set up branch protection rules
    echo.
)

echo.
echo Additional commits you can make:
echo.
echo For frontend-specific changes:
echo   npm run commit:frontend
echo.
echo For backend-specific changes:
echo   npm run commit:backend
echo.
echo For integration changes:
echo   npm run commit:integration
echo.
echo For CRM enhancements:
echo   npm run commit:crm
echo.
echo For settings features:
echo   npm run commit:settings
echo.

pause