#!/bin/bash

# This script sets up the development environment for the Goal-Management application.

# Update package lists
echo "Updating package lists..."
sudo apt update

# Install Node.js and npm
echo "Installing Node.js and npm..."
sudo apt install -y nodejs npm

# Install Yarn
echo "Installing Yarn..."
sudo npm install --global yarn

# Install Vite
echo "Installing Vite..."
sudo npm install -g create-vite

# Install dependencies
echo "Installing project dependencies..."
yarn install

# Install Tailwind CSS
echo "Installing Tailwind CSS..."
yarn add -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
echo "Initializing Tailwind CSS..."
npx tailwindcss init -p

echo "Development environment setup complete!"