# LoanLink Client

Frontend application for **LoanLink** — A modern Microloan Request & Approval Tracker System built with React.

## 🚀 Live Demo

- **Live Site:** [https://loanlink-efb49.web.app](https://loanlink-efb49.web.app)
- **Server API:** [https://ll-server-sigma.vercel.app](https://ll-server-sigma.vercel.app)

## 📋 About

LoanLink is a full-featured microloan management platform where borrowers can apply for loans, managers can create and review loan products, and admins oversee the entire system. It features role-based dashboards, secure Stripe payments, and real-time authentication via Firebase.

## ✨ Features

### Public

- Animated landing page with Framer Motion
- Browse and search loan products
- Light/Dark theme toggle
- Responsive design across all devices
- Authentication via Email/Password, Google & GitHub

### Borrower Dashboard

- Apply for loans with detailed forms
- Track application status (Pending / Approved / Rejected)
- Pay $10 application fee via Stripe
- View payment history and cancel pending applications

### Manager Dashboard

- Create and manage loan products
- Approve or reject borrower applications
- Monitor fee payments and application analytics

### Admin Dashboard

- Manage user roles and suspend accounts
- Oversee all loans and applications
- Toggle loan visibility on homepage

### Payments

- Secure Stripe checkout integration
- Payment confirmation with confetti celebration
- Transaction history tracking

## 🛠️ Tech Stack

| Category          | Technologies                                  |
| ----------------- | --------------------------------------------- |
| **Frontend**      | React 18, React Router v6                     |
| **Styling**       | Tailwind CSS, DaisyUI                         |
| **Animation**     | Framer Motion                                 |
| **Auth**          | Firebase Authentication                       |
| **Payments**      | Stripe                                        |
| **HTTP Client**   | Axios                                         |
| **Forms**         | React Hook Form                               |
| **Build Tool**    | Vite                                          |
| **Notifications** | React Hot Toast, SweetAlert2                  |
| **Other**         | Swiper.js, React Icons, jsPDF, React Confetti |

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, LoadingSpinner)
├── contexts/         # AuthContext, ThemeContext
├── firebase/         # Firebase configuration
├── layouts/          # MainLayout, DashboardLayout
├── pages/
│   ├── Home/         # Landing page
│   ├── Auth/         # Login, Register
│   ├── Loans/        # AllLoans, LoanDetails, LoanApplication
│   ├── Dashboard/
│   │   ├── Admin/    # ManageUsers, AllLoansAdmin, LoanApplicationsAdmin
│   │   ├── Manager/  # AddLoan, ManageLoans, PendingApplications, etc.
│   │   └── Borrower/ # MyLoans, BorrowerProfile
│   ├── Payment/      # Payment, PaymentSuccess
│   ├── AboutUs/
│   ├── ContactUs/
│   └── ErrorPage/
├── routes/           # Route definitions & guards
├── services/         # API service layer
├── main.jsx
└── index.css
```

## 🔧 Getting Started

### Prerequisites

- Node.js v18+
- Firebase project with Email/Password, Google & GitHub auth enabled
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/ivyfaraezi/LoanLink-Client.git
cd LoanLink-Client

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Fill in your Firebase & Stripe keys in .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
VITE_API_URL=your_backend_url
```

### Build & Deploy

```bash
# Production build
npm run build

# Deploy to Firebase Hosting
firebase login
firebase deploy
```

## 🎯 Routes

| Route                             | Access   | Description       |
| --------------------------------- | -------- | ----------------- |
| `/`                               | Public   | Home page         |
| `/all-loans`                      | Public   | Browse loans      |
| `/about`                          | Public   | About us          |
| `/contact`                        | Public   | Contact page      |
| `/login`                          | Public   | Login             |
| `/register`                       | Public   | Registration      |
| `/loan/:id`                       | Private  | Loan details      |
| `/loan-application/:id`           | Borrower | Apply for loan    |
| `/payment/:applicationId`         | Borrower | Stripe payment    |
| `/dashboard/manage-users`         | Admin    | User management   |
| `/dashboard/all-loans`            | Admin    | All loans         |
| `/dashboard/add-loan`             | Manager  | Create loan       |
| `/dashboard/manage-loans`         | Manager  | Manage loans      |
| `/dashboard/pending-applications` | Manager  | Pending approvals |
| `/dashboard/my-loans`             | Borrower | My applications   |
| `/dashboard/profile`              | Borrower | Profile           |

## 🐛 Troubleshooting

| Issue                 | Solution                                                              |
| --------------------- | --------------------------------------------------------------------- |
| Build errors          | `rm -rf node_modules && npm install`                                  |
| Firebase auth issues  | Verify authorized domains & enabled auth methods in Firebase Console  |
| API connection errors | Check `VITE_API_URL` in `.env` and backend CORS settings              |
| Payment issues        | Verify Stripe publishable key and use test card `4242 4242 4242 4242` |

---
