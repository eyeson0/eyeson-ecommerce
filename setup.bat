@echo off
REM EYESON Setup Script for Windows

echo 🚀 EYESON Setup Starting...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+
    echo    Visit: https://nodejs.org/
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

echo.
echo 📦 Installing root dependencies...
call npm install

echo.
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo 📦 Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo 📦 Installing admin dependencies...
cd admin
call npm install
cd ..

echo.
echo 🔧 Copying environment template...
if not exist .env (
    copy .env.example .env
    echo ✅ Created .env file - Please edit with your settings
) else (
    echo ℹ️  .env file already exists
)

echo.
echo ✅ Setup complete!
echo.
echo 📖 Next steps:
echo    1. Edit .env file with your database and API credentials
echo    2. For PostgreSQL setup:
echo       cd backend
echo       npx prisma migrate dev
echo    3. Start development servers:
echo       npm run dev
echo.
echo 🐳 Or use Docker:
echo    docker-compose up
echo.
pause
