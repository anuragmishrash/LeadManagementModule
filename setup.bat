@echo off
echo Setting up Lead Management System...
echo.

echo Step 1: Installing Frontend Dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Step 2: Installing Backend Dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo Setup Complete! 
echo.
echo To start the application, run:
echo   npm run dev:full
echo.
echo Or double-click start-fullstack.bat
echo.
pause