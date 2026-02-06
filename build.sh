#!/bin/bash

echo "Installing dependencies..."
npm install

echo ""
echo "Building project..."
npm run build

echo ""
echo "Build complete! The dist folder contains the production-ready files."
