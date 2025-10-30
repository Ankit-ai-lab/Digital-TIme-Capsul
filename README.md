# 📦 Digital Time Capsule  

### 🕰️ *Preserve your memories. Relive your moments.*  

A **memory preservation web app** that lets users securely store personal messages, photos, videos, and predictions — all set to unlock at a specific **future date**.  
It’s like sending a surprise to your **future self** or loved ones!  

Built with ❤️ for emotional connection, creativity, and digital nostalgia — using a **modern fullstack web experience**.

---

## 🧭 Introduction

**Digital Time Capsule** empowers users to create time-locked memories.  
Each capsule stores text, media, and unlock dates securely using **Supabase**, ensuring privacy and trust.  
When the unlock time arrives, users or invited recipients can open the capsule and revisit those moments — like unwrapping a piece of the past.  

---
<img width="1912" height="928" alt="image" src="https://github.com/user-attachments/assets/c79a3c55-d2d5-4fbf-923b-eece265429a0" />
<img width="1918" height="920" alt="image" src="https://github.com/user-attachments/assets/b046f43a-b40b-409c-a1f1-475143d0a24c" />
## 🛠️ Project Type

| Layer | Technology |
|:------|:------------|
| **Frontend** | React + Tailwind CSS |
| **Backend / Auth / Storage** | Supabase (PostgreSQL, Auth, Storage) |

---

## 🚀 Deployed Links

🌐 **Live App:** [https://digital-time-capsule.vercel.app](https://digital-time-capsule.vercel.app)  
🗄️ **Supabase Dashboard:** [https://supabase.io/dashboard/project/your-project-id](https://supabase.io/dashboard/project/your-project-id)  

---

## 🗂️ Directory Structure

digital-time-capsule/
├─ frontend/ # React App
│ ├─ components/
│ ├─ pages/
│ ├─ auth/
│ ├─ assets/
├─ backend/ (Supabase Managed)
│ ├─ Database Tables (Capsules, Users)
│ ├─ Storage (Media Uploads)

yaml
Copy code

---

## ✨ Core Features

- 🔐 **User Authentication** (Sign up/Login with Supabase)  
- 📬 **Create Capsules** with title, message, unlock date & media  
- ⏳ **Countdown Timer** that reveals the capsule when time arrives  
- 🎁 **Share Capsules** via unique links or email invites  
- 📤 **File Uploads** (images, videos, PDFs) with Supabase Storage  
- 📱 **Responsive Design** with Tailwind CSS  
- 🎨 **Simple and Clean UI** focused on user emotion  

---

## 🧠 Design Choices

- 🧩 Used **Supabase** for backend, database, auth, and storage — fast, serverless, and reliable.  
- 🕰️ Capsules are **time-locked** and cannot be edited after creation.  
- 👀 **Privacy-first**: Only capsule owners or invited users can view.  
- 💌 Supabase’s built-in email auth handles user invitations and login.  

---

## 🪜 Installation & Setup

### 🧰 Prerequisites
- Node.js v18+
- Supabase account

### ⚙️ Steps
```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/digital-time-capsule.git

# 2️⃣ Go to project directory
cd digital-time-capsule/frontend

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
🧱 Supabase Setup
Create a new Supabase project.

Set up capsules and users tables.

Enable email/password authentication.

Create a bucket for media uploads.

Update supabaseClient.js with your project URL & API key.

📖 Usage
Sign up / Log in

Create a Capsule — add title, message, unlock date & media

Invite users via email (optional)

On the unlock date, the capsule automatically becomes viewable 🎉

🧪 Testing Credentials
yaml
Copy code
Email: testuser@capsule.com
Password: Test1234
🔁 API Overview
🔹 Supabase Auto Endpoints
Method	Endpoint	Description
POST	/capsules	Create a new capsule
GET	/capsules/:userId	Fetch all capsules by user
GET	/capsule/:id	Fetch a single capsule
POST	/invite	Store invited user info
Storage	/media/{file}	Access uploaded media

🌐 APIs Used
Supabase Auth API

Supabase Realtime Database

Supabase Storage API

🧩 Technology Stack
🎨 Frontend
React

Tailwind CSS

React Router DOM

Lucide Icons

Framer Motion (for smooth animations)

⚙️ Backend / Infra
Supabase (PostgreSQL, Auth, Storage)

Supabase Triggers (for invites)

🌟 Future Enhancements
🔔 Email notifications when capsule unlocks

🧠 AI-generated capsule titles or memory summaries

🔒 Public / Private capsule options

🔍 Capsule search & filtering

📱 PWA support for offline access

🎥 Demo Videos
📽️ Project Walkthrough: [Add your 1–3 min video link here]
📽️ Codebase Overview: [Add your 3–5 min video link here]

👨‍💻 Author
Ankit Gupta
Frontend & Fullstack Developer
🔗 @Ankit-ai-lab

❤️ Acknowledgements
“The best way to predict the future is to create it.”

Special thanks to Masai School for inspiring this solo project.
Digital Time Capsule reflects emotion, innovation, and the timeless joy of revisiting memories — built with passion and purpose.
