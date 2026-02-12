# Contact System Testing Checklist

## Pre-Testing Setup

### Backend
- [ ] MongoDB installed and running
- [ ] Backend `.env` configured with MONGODB_URI
- [ ] Backend dependencies installed (`npm install`)
- [ ] Backend server running (`npm start`)
- [ ] Backend accessible at http://localhost:5000

### Frontend
- [ ] EmailJS account created
- [ ] Email service connected (Gmail/etc)
- [ ] Email template created with correct variables
- [ ] Frontend `.env` configured with EmailJS credentials
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Frontend running (`npm run dev`)
- [ ] Frontend accessible at http://localhost:5173

---

## Functional Testing

### Test 1: Valid Form Submission
**Steps:**
1. Navigate to Contact section
2. Fill all required fields:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+1234567890"
   - Service: "Academic Projects"
   - Message: "This is a test message"
3. Click "Send Message"

**Expected Results:**
- [ ] Button shows "Sending..." during submission
- [ ] Button is disabled during submission
- [ ] Success message appears: "Message sent successfully! We'll respond within 24 hours."
- [ ] Form fields are cleared
- [ ] Email received in configured inbox
- [ ] Data saved in MongoDB

**Verify MongoDB:**
```bash
mongosh
use projectnest
db.contacts.find().pretty()
```

### Test 2: Email Validation
**Steps:**
1. Enter invalid email: "notanemail"
2. Try to submit

**Expected Results:**
- [ ] Browser shows validation error
- [ ] Form does not submit

### Test 3: Required Fields
**Steps:**
1. Leave Name field empty
2. Try to submit

**Expected Results:**
- [ ] Browser shows "Please fill out this field"
- [ ] Form does not submit

### Test 4: Network Error Handling
**Steps:**
1. Stop backend server
2. Fill and submit form

**Expected Results:**
- [ ] Error message appears: "Failed to send message. Please try again or contact us directly."
- [ ] Form data is preserved
- [ ] Button re-enabled

### Test 5: EmailJS Error Handling
**Steps:**
1. Use invalid EmailJS credentials in `.env`
2. Fill and submit form

**Expected Results:**
- [ ] Error message appears
- [ ] Console shows EmailJS error
- [ ] User-friendly error displayed

---

## UI/UX Testing

### Desktop (1920x1080)
- [ ] Form layout is two-column
- [ ] All fields properly aligned
- [ ] Hover effects work on submit button
- [ ] Status messages display correctly

### Tablet (768px)
- [ ] Form remains readable
- [ ] Two-column layout maintained or stacks appropriately
- [ ] Touch targets are adequate

### Mobile (375px)
- [ ] Form is single column
- [ ] All fields are full width
- [ ] Submit button is full width
- [ ] No horizontal scrolling
- [ ] Touch targets minimum 44px

---

## Performance Testing

- [ ] Form submission completes in < 3 seconds
- [ ] No console errors
- [ ] No memory leaks (check DevTools)
- [ ] Animations smooth during submission

---

## Security Testing

- [ ] `.env` files not committed to git
- [ ] EmailJS public key only (no private keys)
- [ ] Backend validates input
- [ ] No sensitive data in console logs
- [ ] CORS properly configured

---

## Production Readiness

### Backend
- [ ] Environment variables set in hosting platform
- [ ] MongoDB Atlas connection string configured
- [ ] CORS allows production frontend URL
- [ ] Error logging implemented

### Frontend
- [ ] Production `.env` configured
- [ ] VITE_API_URL points to production backend
- [ ] Build succeeds (`npm run build`)
- [ ] No console warnings in production build

---

## Post-Deployment Testing

- [ ] Submit test form from production URL
- [ ] Verify email received
- [ ] Verify data in production MongoDB
- [ ] Test from different devices
- [ ] Test from different browsers

---

## Troubleshooting

### Email not received
1. Check EmailJS dashboard for errors
2. Verify Service ID, Template ID, Public Key
3. Check spam folder
4. Verify email service is connected

### Backend connection failed
1. Check backend is running
2. Verify VITE_API_URL is correct
3. Check CORS configuration
4. Check MongoDB connection

### Form not submitting
1. Open browser console for errors
2. Check network tab for failed requests
3. Verify all environment variables set
4. Check backend logs

---

## Success Criteria

✅ All tests pass
✅ Email received within 30 seconds
✅ Data persisted in MongoDB
✅ No console errors
✅ Mobile responsive
✅ Production deployment successful
