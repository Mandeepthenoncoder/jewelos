@echo off
echo 🔧 Setting up JewelOS repository...

REM Initialize git if not already initialized
if not exist ".git" (
  echo Initializing git repository...
  git init
)

REM Check if remote origin exists
git remote | findstr "origin" > nul
if errorlevel 1 (
  echo Adding remote origin...
  git remote add origin https://github.com/Mandeepthenoncoder/jewelos.git
)

REM Create initial commit if no commits exist
git log -1 > nul 2>&1
if errorlevel 1 (
  echo Creating initial commit...
  git add .
  git commit -m "Initial commit: JewelOS project setup"
)

REM Push to remote
echo Pushing to remote repository...
git push -u origin main 2> nul || git push -u origin master

echo ✅ Repository setup complete!
echo 🚀 JewelOS is now configured for continuous commits.
echo.
echo Next steps:
echo 1. Run 'npm install' to install dependencies
echo 2. Set up your Firebase configuration
echo 3. Run 'npm run dev' to start the development server

pause 