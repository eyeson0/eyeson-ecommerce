#!/bin/bash

echo "🚀 EYESON Development Server Starting..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "   Run: ./setup.sh"
    exit 1
fi

echo "📖 Starting development servers..."
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:3000"
echo "   Admin:    http://localhost:5174"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

npm run dev
