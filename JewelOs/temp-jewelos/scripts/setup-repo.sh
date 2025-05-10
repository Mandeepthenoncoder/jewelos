#!/bin/bash

# JewelOS Repository Setup Script

echo "🔧 Setting up JewelOS repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
fi

# Add remote if not already added
if ! git remote | grep -q "origin"; then
  echo "Adding remote origin..."
  git remote add origin https://github.com/Mandeepthenoncoder/jewelos.git
fi

# Create initial commit if no commits exist
if [ -z "$(git log -1 2>/dev/null)" ]; then
  echo "Creating initial commit..."
  git add .
  git commit -m "Initial commit: JewelOS project setup"
fi

# Push to remote
echo "Pushing to remote repository..."
git push -u origin main || git push -u origin master

echo "✅ Repository setup complete!"
echo "🚀 JewelOS is now configured for continuous commits."
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Set up your Firebase configuration"
echo "3. Run 'npm run dev' to start the development server" 