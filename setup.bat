@echo off
echo 🚀 Setting up MERN E-commerce Website...
echo.

echo 📦 Installing Backend Dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed
    pause
    exit /b 1
)

echo.
echo 📦 Installing Frontend Dependencies...
cd ../frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend installation failed
    pause
    exit /b 1
)

echo.
echo ✅ Setup completed successfully!
echo.
echo 📋 Next Steps:
echo 1. Update backend/.env with your MongoDB Atlas connection string
echo 2. Run start-backend.bat to start the backend server
echo 3. Run start-frontend.bat to start the frontend server
echo.
pause