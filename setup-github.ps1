Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Lead Management CRM - GitHub Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Initializing Git repository..." -ForegroundColor Yellow
git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to initialize Git repository" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 2: Adding remote repository..." -ForegroundColor Yellow
git remote add origin https://github.com/anuragmishrash/LeadManagementModule.git
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Remote might already exist or URL is incorrect" -ForegroundColor Orange
}

Write-Host ""
Write-Host "Step 3: Adding all files to Git..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to add files" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Yellow
$commitMessage = @"
Initial commit: Complete Lead Management CRM System

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

Admin: Anurag Mishra
"@

git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to create commit" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 5: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Note: You may need to authenticate with GitHub" -ForegroundColor Cyan
git branch -M main
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "   Manual Push Required" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "The repository has been set up locally." -ForegroundColor Yellow
    Write-Host "To push to GitHub, run these commands:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  git branch -M main" -ForegroundColor White
    Write-Host "  git push -u origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "Make sure you have:" -ForegroundColor Cyan
    Write-Host "1. Created the repository on GitHub" -ForegroundColor White
    Write-Host "2. Set up authentication (SSH key or token)" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "   Success!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository URL: https://github.com/anuragmishrash/LeadManagementModule" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Visit the GitHub repository" -ForegroundColor White
    Write-Host "2. Add a description and topics" -ForegroundColor White
    Write-Host "3. Enable GitHub Pages if needed" -ForegroundColor White
    Write-Host "4. Set up branch protection rules" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "Additional commits you can make:" -ForegroundColor Magenta
Write-Host ""
Write-Host "For frontend-specific changes:" -ForegroundColor Cyan
Write-Host "  npm run commit:frontend" -ForegroundColor White
Write-Host ""
Write-Host "For backend-specific changes:" -ForegroundColor Cyan
Write-Host "  npm run commit:backend" -ForegroundColor White
Write-Host ""
Write-Host "For integration changes:" -ForegroundColor Cyan
Write-Host "  npm run commit:integration" -ForegroundColor White
Write-Host ""
Write-Host "For CRM enhancements:" -ForegroundColor Cyan
Write-Host "  npm run commit:crm" -ForegroundColor White
Write-Host ""
Write-Host "For settings features:" -ForegroundColor Cyan
Write-Host "  npm run commit:settings" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to exit"