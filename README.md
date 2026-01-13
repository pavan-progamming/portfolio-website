# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a fully functional contact form.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for all devices
- **Sections**:
  - Hero section with animated code card
  - About me
  - Skills showcase with interactive power hub
  - Featured projects with images
  - Experience & Education timeline
  - Content creation (YouTube videos)
  - Contact form with EmailJS integration
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Scroll to Top**: Floating button for easy navigation

## 🛠️ Technologies Used

- React 19
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Scroll (smooth scrolling)
- EmailJS (contact form)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/recute-port.git
cd recute-port
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (for EmailJS):
   Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:

```bash
npm run dev
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `recute-port` (or your preferred name)
3. Don't initialize with README, .gitignore, or license

### Step 2: Update Base Path (if needed)

If your repository name is different from `recute-port`, update `vite.config.js`:

```js
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

If deploying to `username.github.io` (user site), use:

```js
base: '/',
```

### Step 3: Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/your-username/recute-port.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

1. **Option A: Using npm script (Recommended)**

```bash
npm run deploy
```

2. **Option B: Manual deployment**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **gh-pages** branch
   - Click **Save**
   - Your site will be available at: `https://your-username.github.io/recute-port/`

### Step 5: Enable GitHub Pages in Repository Settings

1. Go to your repository → **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

Your portfolio will be live at: `https://your-username.github.io/recute-port/`

## 📝 Notes

- Make sure to update the base path in `vite.config.js` if your repository name is different
- For user sites (`username.github.io`), the base should be `/`
- The `.env` file is gitignored, so you'll need to set up EmailJS separately on the deployed site
- After deployment, update any hardcoded URLs in your code if needed

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rallapati Pavan Kumar**

- GitHub: [@pavan-progamming](https://github.com/pavan-progamming)
- LinkedIn: [Pavan Kumar Rallapati](https://www.linkedin.com/in/pavan-kumar-rallapati-2762a9319/)
- Email: pavankumarallapati9182@gmail.com
