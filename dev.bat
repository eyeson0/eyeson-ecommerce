@echo off
REM Start EYESON Development Servers

echo 🚀 EYESON Development Server Starting...
echo.

REM Check if .env exists
if not exist .env (
    echo ❌ .env file not found!
    echo    Run: setup.bat
    exit /b 1
)

echo 📖 Starting development servers...
echo    Frontend: http://localhost:5173
echo    Backend:  http://localhost:3000
echo    Admin:    http://localhost:5174
echo.
echo Press Ctrl+C to stop all servers
echo.

call npm run dev
pause
