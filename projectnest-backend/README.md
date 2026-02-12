# ProjectNest Backend API

Production-ready Node.js backend for contact form data persistence.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
cp .env.example .env
# Update MONGODB_URI with your MongoDB connection string
```

3. Start server:
```bash
npm start          # Production
npm run dev        # Development with auto-reload
```

## API Endpoint

**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "academic",
  "message": "Project inquiry"
}
```

Response:
```json
{
  "success": true,
  "message": "Contact saved successfully"
}
```

## MongoDB Setup

### Local (Development)
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

### Cloud (Production)
Use MongoDB Atlas: https://www.mongodb.com/cloud/atlas
