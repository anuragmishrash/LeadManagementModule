@echo off
echo Building and Starting Lead Management System on Port 5000...
echo.
echo Step 1: Building React App...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Starting Production Server on Port 5000...
cd server
call npm start

pause