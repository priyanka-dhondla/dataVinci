# 📱💻 Responsive Layout Implementation (Desktop & Mobile)

## 🎯 Objective

Implement the **UI/UX design** provided in the [Figma File](https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0) for both **Desktop** and **Mobile** views using **ReactJS** with a **mobile-first responsive approach**.

---

## 🚀 Tech Stack

- **ReactJS** (Frontend Framework)
- **TailwindCSS** (Utility-first CSS Framework for Styling & Responsiveness)
- **Flexbox & CSS Grid** (Layout implementation)

---

## 📌 Key Implementation Points

### 1. **Figma Design Analysis**

- Extracted spacing, typography, and color system from Figma.
- Identified **breakpoints**:
  - **Desktop**: `≥ 1024px`
  - **Tablet**: `768px – 1023px`
  - **Mobile**: `< 768px`

---

### 2. **Responsive Design Approach**

- **Mobile-first** development strategy.
- Components adapt seamlessly across devices using **media queries** and **responsive utility classes**.
- Layouts handled with **Flexbox** and **CSS Grid** for better scalability.

---

### 3. **UI Components Implemented**

- **Navigation Bar**

  - Desktop: Horizontal menu with logo + links.
  - Mobile: Collapsible hamburger menu with smooth transition.

- **Content Sections**

  - Desktop: Multi-column grid layout.
  - Mobile: Single-column stacked layout.

- **Buttons & Inputs**
  - Adaptive padding & font sizes for touch devices.
  - Accessible (WCAG-compliant colors, hover/focus states).

---

### 4. **Accessibility Considerations**

- Minimum **16px font-size** for mobile readability.
- Ensured **color contrast ratio ≥ 4.5:1**.
- **Keyboard navigation support** (focus states, tab index).
- **ARIA labels** for navigation and interactive elements.

---

### 5. **Testing & Verification**

- Verified responsiveness via **Chrome DevTools** (iPhone, iPad, Desktop).
- Cross-browser tested (Chrome, Safari, Firefox, Edge).
- Compared with **Figma design** for pixel-perfect alignment.

---

## 📂 Project Structure

```bash
src/
 ├── components/     # Reusable UI components (Navbar, Button, etc.)
 ├── assets/         # Images, icons, fonts
 ├── App.tsx         # Root component
 └── main.tsx        # Entry point

```

## Install dependencies

```bash
npm install

```

## Start Sever Locally

```bash
npm run dev

```
