@echo off
echo Installing Lead Management System Dependencies...
echo.
echo Installing Frontend Dependencies...
npm install
echo.
echo Installing Backend Dependencies...
cd server
npm install
cd ..
echo.
echo Installation Complete!
echo.
echo To start the application, run: npm run dev:full
echo Or use the start-fullstack.bat file
echo.
pause