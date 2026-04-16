<img width="1376" height="768" alt="Cover image of keenkeeper" src="https://github.com/user-attachments/assets/87ff22fb-1b40-41f4-9e61-0658075a5cc4" />

<div align="center">

  <h1>🌿 FriendKeeper: Personal Relationship Manager</h1>

  <p><em>Nurture the connections that matter most — one interaction at a time.</em></p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

</div>

<hr/>

## 📖 Overview

**FriendKeeper** is a personal relationship management web application designed to tracks your interactions, reminds you when it's time to reconnect and gives you a beautiful dashboard to manage all your friendships in one place.

This project focuses on **React state management, Context API, React Router v7, real-time interaction tracking and data visualization** — all wrapped in a clean, responsive UI.

<hr/>

## 🔗 Live Site Link

👉 **https://a-07-keen-keeper.vercel.app/**

<hr/>

## 🛠️ Technologies Used

- **Frontend:** React 19 (with Hooks — `useState`, `useEffect`, `useContext`, `use`)
- **Routing:** React Router v7 (`createBrowserRouter`, `loader`, `useParams`)
- **Styling:** Tailwind CSS v4, DaisyUI v5
- **Data Visualization:** Recharts (`PieChart`, `Pie`, `Tooltip`)
- **Notifications:** React Toastify
- **Icons:** React Icons (`react-icons`)
- **Data Source:** Local JSON (`/data.json`) via `fetch()` with Promise-based loading
- **Architecture:** Component-based with Global State via Context API (`MotherProvider`)

<hr/>

## 🎨 UI 
https://github.com/user-attachments/assets/6bd3ca7f-382d-4048-844b-871251bea38e
<hr/>

## ✨ Features

- **🧑‍🤝‍🧑 Friend Dashboard:** Browse all your friends in a beautiful card grid with status badges (On Track, Almost Due, Overdue).
- **📋 Friend Details Page:** View detailed info for each friend — days since contact, next due date, relationship goal, note, and email.
- **⚡ Quick Check-In:** Instantly log a Call, Text, or Video interaction with any friend — tracked in real time.
- **📅 Timeline View:** See a chronological log of all your interactions. Filter by type (Call/Text/Video) or sort by date. Search interactions by name or action.
- **📊 Stats Page:** Visual pie chart breakdown of your interaction activity (Calls vs Texts vs Video calls).
- **🔔 Smart Toasts:** Real-time feedback for every action — success, error, and info notifications.
- **🚫 404 Error Page:** Custom animated error page for unknown routes.
- **📱 Fully Responsive:** Works seamlessly across mobile, tablet, and desktop.

<hr/>

## ⚙️ Core Implementation Concepts

- **Global State with Context API:** `MotherProvider` shares `clickedData`, `call`, `text`, `video` state and `handleBtn` across the entire app without prop drilling to deep levels.
- **React `use()` Hook:** Used for Promise-based data fetching inside components with `Suspense` boundaries — a modern React 19 pattern.
- **React Router Loaders:** Data is pre-fetched using `loader` functions in the router config, ensuring data is available before the component renders.
- **Interaction Deduplication:** `handleBtn` prevents logging the same action twice for the same friend using `Array.find()`.
- **Dynamic Filtering & Sorting:** Timeline supports multi-mode filtering (by type, by date) and live search — all managed via `useEffect` and `useState`.
- **Recharts Data Visualization:** Pie chart dynamically updates based on live interaction counts, with a fallback "No Activity" state.
- **Persistent UI Feedback:** `react-toastify` provides non-blocking notifications for all user actions.

<hr/>

## 📁 Project Structure

```
src/
├── main.jsx               # Router setup & app entry
├── Root.jsx               # Layout with Navbar, Footer, ToastContainer
├── MotherProvider.jsx     # Global Context — state & handlers
│
├── Home.jsx               # Home page — Hero + Stats + Friends grid
├── HeroSection.jsx        # Hero banner with CTA
├── StatsSectionInHome.jsx # 4 stat cards (Friends, On-track, Overdue, Interactions)
│
├── Friends.jsx            # Friends grid (uses Context + use())
├── Friend.jsx             # Single friend card
├── FriendDetails.jsx      # Detailed friend page with check-in
│
├── Timeline.jsx           # Interaction log with filter & search
├── Stats.jsx              # Pie chart activity overview
│
├── Navbar.jsx             # Sticky nav with active NavLinks
├── Footer.jsx             # Footer with social links
└── Error.jsx              # 404 page
```

<hr/>

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/MdHadiuzzaman0/friendkeeper.git

# Navigate into the project
cd friendkeeper

# Install dependencies
npm install

# Start the dev server
npm run dev
```

> Make sure `data.json` is placed in the `/public` folder.

<hr/>

## 👤 Author

**Md. Hadiuzzaman**

Textile Engineering Graduate | KUET | Frontend Developer focused on building smart, responsive React applications. Passionate about mastering the full-stack ecosystem and creating seamless interactive user experiences.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdhadiuzzaman)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MdHadiuzzaman0)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mdhadiuzzaman483@gmail.com)

<hr/>

<div align="center">
  <p>⭐ If you found this project helpful, please give it a star!</p>
  <p>© 2026 FriendKeeper — Made with 🌿 by Md. Hadiuzzaman</p>
</div>

