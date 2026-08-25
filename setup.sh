#!/bin/bash

echo "🚀 EYESON Setup Starting..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL not found in PATH"
    echo "   Make sure PostgreSQL is installed and the psql command is available"
    echo "   Visit: https://www.postgresql.org/download/"
else
    echo "✅ PostgreSQL version: $(psql --version)"
fi

echo ""
echo "📦 Installing root dependencies..."
npm install

echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo "📦 Installing admin dependencies..."
cd admin
npm install
cd ..

echo ""
echo "🔧 Copying environment template..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file - Please edit with your settings"
else
    echo "ℹ️  .env file already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📖 Next steps:"
echo "   1. Edit .env file with your database and API credentials"
echo "   2. For PostgreSQL setup:"
echo "      cd backend"
echo "      npx prisma migrate dev"
echo "   3. Start development servers:"
echo "      npm run dev"
echo ""
echo "🐳 Or use Docker:"
echo "   docker-compose up"
echo ""
