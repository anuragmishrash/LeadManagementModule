@echo off
echo Starting Lead Management System on Port 5000...
echo.
echo Building React app...
call npm run build

echo.
echo Starting server on http://localhost:5000...
cd server
call node server.js

pause