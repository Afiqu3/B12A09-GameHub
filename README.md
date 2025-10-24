# 🎮 GameHub

Welcome to **GameHub**, a vibrant online platform designed to connect gamers with indie game developers! Discover exciting indie games, explore detailed game information, and support creators by installing your favorites. Built with modern web technologies, GameHub offers a seamless, interactive, and visually appealing experience.

---

## 🌟 Features
- **Unified Layout**: A sleek, consistent design with a shared header and footer across all pages, except for a unique 404 page.
- **Dynamic Navbar**: 
  - Logo on the left for branding.
  - Navigation links on the right, including dynamic login/register or profile/logout based on user authentication.
  - Profile picture click navigates to the My Profile page.
- **Homepage**:
  - **Banner Slider**: A captivating slider showcasing at least 3 stunning game images.
  - **Popular Games**: Displays at least 3 top-rated games in a stylish card layout, with cover photos, titles, and additional details.
  - **Newsletter Section**: A modern subscription form for users to stay updated with the latest game releases.
- **Game Details Page**: A protected route with rich game details (title, cover photo, description, ratings, etc.) from JSON data, accessible only to logged-in users.
- **About Page**: A dedicated page providing information about GameHub, its mission, and the team behind it.
- **Authentication**:
  - Email/password and Google login options.
  - Robust password validation (uppercase, lowercase, minimum 6 characters).
  - Functional forgot password feature with email pre-fill and Gmail redirect.
- **Profile Management**: Update name and photo URL via a dedicated update form in the My Profile section.
- **Custom 404 Page**: A visually engaging Not Found page for invalid routes.
- **Dynamic Titles**: Page titles update dynamically based on the current route.

---

## 🛠️ Technologies Used
- **React**: For building a dynamic and responsive user interface.
- **Tailwind CSS**: Utility-first CSS framework for modern, responsive styling.
- **Daisy UI**: Pre-built Tailwind components for a polished look.
- **Firebase**: Handles secure email/password and Google authentication.
- **Axios**: Fetches game data from JSON effortlessly.
- **Framer Motion**: Adds smooth animations and transitions.
- **React Router**: Enables seamless client-side routing.
- **React Icons**: Provides a rich set of icons for enhanced UI.
- **React Spinners**: Displays elegant loading animations.
- **React Toastify**: Shows user-friendly notifications.

---

## 🎲 Usage
- **Homepage**: Explore featured games, interact with the banner slider, and subscribe to the newsletter for updates.
- **Game Details**: Log in to access detailed game pages with cover photos, descriptions, ratings, and download links.
- **About Page**: Learn about GameHub’s mission, vision, and the team behind the platform.
- **Authentication**:
  - **Login**: Use email/password or Google to sign in. Includes links to register and forgot password.
  - **Register**: Create an account with name, email, photo URL, and a validated password.
  - **Forgot Password**: Pre-fills email from the login page and redirects to Gmail for password reset.
- **Profile**: View your profile and update your name or photo URL via the update form.
- **Navigation**: Use the navbar to switch between pages, with dynamic links based on login status.
- **404 Page**: A creative page displayed for invalid routes.

---

## 🚀 Deployment

https://gamehub-a09.netlify.app/