📦 Digital Time Capsule
🧭 Introduction
Digital Time Capsule is a memory preservation app that lets users securely store personal messages, media, and predictions to be unlocked at a specific future date. It's like sending a surprise to your future self or loved ones! The project focuses on emotional connection, secure storage, and creative expression with a modern web experience.

<img width="1912" height="928" alt="image" src="https://github.com/user-attachments/assets/c79a3c55-d2d5-4fbf-923b-eece265429a0" />
<img width="1918" height="920" alt="image" src="https://github.com/user-attachments/assets/b046f43a-b40b-409c-a1f1-475143d0a24c" />
🔧 Project Type
Fullstack Application

Frontend: React + Tailwind CSS

Backend & Auth & Storage: Supabase

🚀 Deployed App
Frontend: https://digital-time-capsule.vercel.app

Backend (Supabase): https://supabase.io/dashboard/project/your-project-id

Database (Supabase PostgreSQL): https://supabase.io

📁 Directory Structure
pgsql
Copy
Edit
digital-time-capsule/
├─ frontend/               # React App
│  ├─ components/
│  ├─ pages/
│  ├─ auth/
│  ├─ assets/
├─ backend/ (Handled by Supabase)
│  ├─ Database Tables (Capsules, Users)
│  ├─ Storage (Media uploads)
🎥 Video Walkthrough of the Project
📽️ [Add your 1–3 minute demo video link here]

🧑‍💻 Video Walkthrough of the Codebase
📽️ [Add your 3–5 minute walkthrough link here]

✨ Features
🔐 User Authentication (Sign up/Login with Supabase)

📬 Create a time capsule with title, message, unlock date, and media (images, videos, PDFs)

⏳ Countdown timer that unlocks capsules when the time arrives

🎁 Surprise capsule sharing via email invite

🌐 Unique link-based access to view capsules

📤 File uploads using Supabase storage

📱 Responsive design with Tailwind CSS

🎨 Simple, clean UI experience

🧠 Design Decisions & Assumptions
Used Supabase for backend, database, auth, and storage to speed up development and keep it serverless

Capsule data is stored with an associated unlock timestamp

Capsules cannot be edited once created, maintaining the integrity of time-locked memories

Only invited users (via email) or capsule owners can view the capsule

No third-party email service — Supabase's built-in auth email is used for invitation

📦 Installation & Getting Started
Prerequisites
Node.js v18+

Supabase account

Setup Instructions
bash
Copy
Edit
git clone https://github.com/your-username/digital-time-capsule.git

cd digital-time-capsule/frontend
npm install
npm start
Supabase Setup
Create a Supabase project

Set up capsules and users tables

Enable email/password auth

Add bucket for media uploads

Update supabaseClient.js with your Supabase project URL and key

📖 Usage
Sign up or log in

Create a capsule by entering title, message, media, and unlock date

Invite people by entering their name & email

On the unlock date, recipients will be notified and can view the capsule

bash
Copy
Edit
# Example usage in terminal (React Dev Mode)
npm start
📸 Screenshot: Creating a Capsule

📸 Screenshot: Capsule Countdown

🔐 Credentials for Testing
yaml
Copy
Edit
Test Email: testuser@capsule.com
Password: Test1234
🌐 APIs Used
Supabase Auth API

Supabase Realtime Database

Supabase Storage API

🔁 API Endpoints
(Supabase auto-generates SQL-based endpoints. Here's how they map logically.)

POST /capsules – Create a new capsule

GET /capsules/:userId – Fetch all capsules by a user

GET /capsule/:id – Fetch a single capsule

POST /invite – Store invited user info

Supabase Storage: https://xyz.supabase.co/storage/v1/object/public/media/{file}

🛠 Technology Stack
Frontend:

React

Tailwind CSS

React Router DOM

Lucide Icons

Framer Motion (optional for animation)

Backend/Infra:

Supabase (PostgreSQL, Auth, Storage)

Email invite via Supabase triggers

📌 Future Improvements
Add notifications (email reminder when capsule unlocks)

AI-generated memory titles/predictions

Private/public capsule options

Capsule search & filtering

Responsive PWA support for offline viewing this readme make more good structure and presentable to any busy see and feel awsome
