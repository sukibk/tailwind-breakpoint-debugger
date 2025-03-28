# Tailwind Breakpoint Debugger

A lightweight React component to help developers visualize and debug Tailwind CSS breakpoints during development.

Tested with **Vite** and **Next.js**.  
Before installing, check which **Tailwind version** you're using — setup differs between **Tailwind v3** and **v4**.

---

## ✨ Features

- 📏 Shows current active breakpoint
    - Supports custom Tailwind breakpoints
    - Default: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
    - Optional: `3xl`, `4xl` (see setup instructions below)
- 💻 Renders in development mode only
- 🎨 Minimal, non-intrusive design

---

## 📦 Installation

Using **npm**:

```bash
npm install tailwind-breakpoint-debugger
```

Or with **yarn**:

```bash
yarn add tailwind-breakpoint-debugger
```

---

## 🧠 Usage

Import and include the component in your app:

```tsx
import BreakpointDebugger from 'tailwind-breakpoint-debugger';

function MyApp() {
  return (
    <>
      {/* Your app components */}
      <BreakpointDebugger />
    </>
  );
}
```

### 🔧 Customizing Breakpoints

You can optionally show only specific breakpoints:

```tsx
<BreakpointDebugger breakpoints={['xs', 'md', 'lg']} />
```

---

## ✅ Requirements

- React 18+
- Tailwind CSS v3.0+ (works with v4 too)

---

## ⚙️ Tailwind Setup

### 📘 Tailwind v3 / Next.js

This package works out of the box with **Next.js + Tailwind v3**, as long as you add the package to your Tailwind `content` array:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/tailwind-breakpoint-debugger/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Use rem for consistency
        '3xl': '122.5rem', // 1960px
        '4xl': '160rem',   // 2560px
      },
    },
  },
  plugins: [],
}
```

And don’t forget to include Tailwind layers in your global CSS:

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 📘 Tailwind v4 / Next.js

As Tailwind v4 uses a **CSS-first configuration model**, there is different setup you need to put in your `global.css` file. Also, you will need to create and use `tailwind.config.js`, regardless of version with Next.js:

```css
@import "tailwindcss";
@config "../tailwind.config.js";
```


Everything else remains the same as with v3 setup.

---
### ⚡ Tailwind v4 / Vite

> This method **only works with Vite**, as `@source` is currently not supported by Next.js.

Tailwind v4 supports a **CSS-first configuration model**. You no longer need `tailwind.config.js` unless you're using advanced features.

Instead, define breakpoints directly in your global CSS:

```css
/* global.css or whatever CSS file you're using */
@import "tailwindcss";

@source "../node_modules/tailwind-breakpoint-debugger"; /* Required to scan the package */

@theme {
  /* Use rem to avoid overlapping breakpoint ranges */
  --breakpoint-3xl: 122.5rem; /* 1960px */
  --breakpoint-4xl: 160rem;   /* 2560px */
}
```

---

## 📝 Notes

- Only renders in **development mode**
- Non-intrusive, positioned in the **bottom-left** of the screen
- **No effect** on production builds

---

## 📄 License

MIT License

---

## 📧 Questions / Contacts / Bugs

Hey there! This is my first package on npm, and while it’s built to help fellow developers get started more easily, I understand that things don’t always work perfectly.

If you run into any bugs, have questions, or just want to share feedback or suggestions — I’d genuinely appreciate it. Don’t hesitate to reach out! Also if you have any cool open-source project ideas, feel free to share them with me :)

Contact me on:
- Linkedin: https://www.linkedin.com/in/marko-sudar-00918221b/
- Email: markosudar02priv@gmail.com

In case of problems with code:
- Make a pull request on GitHub
- Shoot me an e-mail with the subject "Tailwind Breakpoint Debugger is Bugggered!" xD


Thanks for using Tailwind Breakpoint Debugger! 🚀

---
Keywords: tailwind, next.js, react, breakpoint, debugger, tailwindcss, vite, tailwind v4, tailwind v3

