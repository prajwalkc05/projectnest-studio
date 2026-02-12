# ProjectNest Studio - Frontend

Production-ready React frontend with animated UI and integrated contact system.

## Features

- ✨ Animated hero section with trust metrics
- 🎨 Global animated background (particles, orbs, gradients)
- 📱 Fully responsive mobile-first design
- 🎯 Academic & Freelancing service sections
- 📧 **Dual contact system: EmailJS + Backend API**
- 🚀 Smooth scroll navigation
- 🎭 Framer Motion animations

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- React Router DOM
- EmailJS Browser

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Update `.env` with your credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=http://localhost:5000
```

### 3. Start Development Server
```bash
npm run dev
```

Visit http://localhost:5173

## Contact System Setup

The contact form uses a **hybrid architecture**:

1. **EmailJS** → Instant email notifications (no backend email logic)
2. **Backend API** → Persistent storage in MongoDB

### EmailJS Setup (Required)

1. Create account at https://www.emailjs.com/
2. Add email service (Gmail recommended)
3. Create email template with variables: `name`, `email`, `phone`, `service`, `message`
4. Copy Service ID, Template ID, and Public Key to `.env`

### Backend Setup (Required)

The backend must be running for form submissions to work:

```bash
cd ../projectnest-backend
npm install
npm start
```

See `CONTACT_SYSTEM_SETUP.md` for detailed instructions.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── GlobalBackground.jsx
├── layouts/
│   ├── Navbar/
│   └── Footer/
├── pages/
│   ├── Home.jsx
│   ├── Contact.jsx      # Contact form with EmailJS + API
│   ├── ServicesSection.jsx
│   ├── FreelancingSection.jsx
│   ├── HowItWorks.jsx
│   └── WhyChooseUs.jsx
├── routes/
├── styles/
│   ├── global.css
│   └── variables.css
└── App.jsx
```

## Build for Production

```bash
npm run build
```

Output in `dist/` directory.

## Deployment

### Vercel (Recommended)
```bash
vercel
```

Add environment variables in Vercel dashboard.

### Netlify
```bash
netlify deploy --prod
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_abc123` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_xyz789` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | `your_public_key` |
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

## Design System

### Colors
- Primary: `#fb923c` (Orange)
- Secondary: `#f97316`
- Dark: `#020617`, `#0f172a`, `#1e293b`
- Text: `#f1f5f9`, `#94a3b8`

### Breakpoints
- Mobile: `375px`
- Tablet: `768px`
- Desktop: `1024px`

## Performance Optimizations

- Lazy loading for sections
- Optimized animations with `willChange`
- Reduced particle counts
- CSS transitions over JS animations where possible
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - ProjectNest Studio
