#!/bin/bash

echo "🚀 Starting ProjectNest Contact System..."
echo ""

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB not running. Starting MongoDB..."
    brew services start mongodb-community 2>/dev/null || docker start mongodb 2>/dev/null || echo "❌ Please start MongoDB manually"
fi

# Start backend
echo "📦 Starting Backend API..."
cd projectnest-backend
npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend..."
cd ../projectnest-frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ System running!"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
