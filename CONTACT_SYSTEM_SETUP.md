# Contact System Setup Guide

Production-ready contact system with EmailJS (instant notifications) + Node.js backend (data persistence).

## Architecture

```
User submits form
    ↓
Frontend (React)
    ├─→ EmailJS → Instant email notification
    └─→ Backend API → MongoDB storage
```

---

## Part 1: EmailJS Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** tab
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow connection instructions
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form Submission - {{name}}
```

**Body:**
```
New contact form submission from ProjectNest Studio website:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
Submitted at: {{reply_to}}
```

4. Save and copy your **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Configure Frontend
Update `/projectnest-frontend/.env`:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_API_URL=http://localhost:5000
```

---

## Part 2: Backend Setup

### Option A: Local MongoDB (Development)

**Install MongoDB:**
```bash
# macOS
brew install mongodb-community
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

**Configure Backend:**
```bash
cd projectnest-backend
cp .env.example .env
```

Update `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/projectnest
```

**Start Backend:**
```bash
npm install
npm start
```

### Option B: MongoDB Atlas (Production)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create new cluster (free tier)
4. Create database user
5. Whitelist IP: `0.0.0.0/0` (allow all)
6. Get connection string
7. Update `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/projectnest
```

---

## Part 3: Testing

### Start Both Services

**Terminal 1 - Backend:**
```bash
cd projectnest-backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd projectnest-frontend
npm run dev
```

### Test Form Submission
1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill form and submit
4. Check:
   - ✅ Email received (EmailJS)
   - ✅ Data in MongoDB
   - ✅ Success message shown

### Verify MongoDB Data
```bash
# Connect to MongoDB
mongosh

# View data
use projectnest
db.contacts.find().pretty()
```

---

## Part 4: Production Deployment

### Backend Deployment (Railway/Render/Heroku)

**Railway Example:**
```bash
cd projectnest-backend
railway login
railway init
railway add
```

Add environment variables in Railway dashboard:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `PORT`: 5000

### Frontend Deployment (Vercel/Netlify)

Update `.env` for production:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_API_URL=https://your-backend.railway.app
```

**Vercel:**
```bash
cd projectnest-frontend
vercel
```

Add environment variables in Vercel dashboard.

---

## Security Checklist

✅ EmailJS public key only (safe for frontend)
✅ Backend secrets in `.env` (never committed)
✅ MongoDB credentials protected
✅ CORS configured
✅ Input validation enabled
✅ `.env` in `.gitignore`

---

## Troubleshooting

**EmailJS not sending:**
- Verify Service ID, Template ID, Public Key
- Check EmailJS dashboard for errors
- Ensure template variables match form fields

**Backend connection failed:**
- Check MongoDB is running
- Verify MONGODB_URI format
- Check firewall/network settings

**CORS errors:**
- Update backend CORS to allow frontend URL
- Check VITE_API_URL is correct

---

## API Reference

**POST** `/api/contact`

Request:
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

---

## Future Enhancements

- [ ] Rate limiting (express-rate-limit)
- [ ] Admin dashboard to view leads
- [ ] Email auto-responder
- [ ] Analytics integration
- [ ] Spam protection (reCAPTCHA)
