# Legal Excellence - Lawyer Website

A modern, responsive website for a law firm built with Next.js, TypeScript, and MongoDB.

## Features

- 🏠 **Home Page** - Hero section, practice areas, testimonials
- 📄 **About Page** - Company story, values, timeline, credentials
- ⚖️ **Practice Areas** - Detailed information about legal services
- 📅 **Book Consultation** - Consultation request form with database storage
- 📧 **Contact Form** - Contact form with database storage
- 🔐 **Admin Dashboard** - Protected admin area to view consultations and contacts

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: Cookie-based sessions

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database (MongoDB Atlas recommended for production)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/legal_excellence
```

4. Create admin user:
```bash
npm run create-admin
```

Or set custom credentials:
```
ADMIN_USERNAME=yourusername
ADMIN_PASSWORD=yourpassword
npm run create-admin
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Admin Access

- **URL**: `/admin`
- **Default Credentials**: 
  - Username: `admin`
  - Password: `admin123`

⚠️ **Important**: Change the default password after first login!

## Database Collections

The application uses the following MongoDB collections:

- `consultations` - Consultation requests from the booking form
- `contacts` - Contact form submissions
- `admins` - Admin user accounts

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `ADMIN_USERNAME` (optional)
   - `ADMIN_PASSWORD` (optional)
4. Deploy

### MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for Vercel)
5. Get your connection string
6. Add to environment variables

## Project Structure

```
├── app/
│   ├── admin/          # Admin dashboard page
│   ├── api/           # API routes
│   │   ├── auth/      # Authentication endpoints
│   │   ├── contact/   # Contact form endpoint
│   │   └── consultation/ # Consultation endpoint
│   ├── about/         # About page
│   ├── book-consultation/ # Booking page
│   └── practice-areas/ # Practice areas page
├── components/         # React components
├── lib/               # Utility functions
│   ├── db.ts         # MongoDB connection
│   └── auth.ts       # Authentication helpers
└── scripts/          # Utility scripts
    └── create-admin.ts # Admin user creation script
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run create-admin` - Create admin user

## License

Private project
