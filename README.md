# 🟢 DREW

![Project Status](https://img.shields.io/badge/STATUS-ONLINE-00ff41?style=for-the-badge&logo=instacart&logoColor=black)
![Tech Stack](https://img.shields.io/badge/Tech-HTML_|_Tailwind_|_JS-blue?style=for-the-badge)

> **"Bridging the gap between creative storytelling and robust software engineering."**

## 📂 Overview
This is a personal portfolio website designed with a **Sci-Fi / RPG / Terminal aesthetic**. It features a "HUD" (Heads-Up Display) interface that organizes my work into "Quests" (Projects) and "Abilities" (Skills).

The design is fully responsive and uses a single-page layout with dynamic filtering for project categories.

## ⚡ Features
* **RPG Theming:** Sections are named uniquely (Identity, Skill Tree, Quest Log, Summon).
* **Dynamic Filtering:** The "Quest Log" allows users to filter projects by category (Game Dev, Software Dev, All).
* **Visual Effects:** Includes CRT grid backgrounds, "glitch" hover effects, and terminal-green accents.
* **Responsive Design:** Built with Tailwind CSS to work on mobile and desktop.
* **No Build Step:** Uses CDN links for libraries, making it easy to edit and deploy.

## 🛠️ Tech Stack
* **HTML5** - Structure
* **Tailwind CSS (via CDN)** - Styling & Responsive Layout
* **Vanilla JavaScript** - Project Filtering Logic
* **FontAwesome** - Icons

## 🚀 How to Run
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/drewwastaken/Portfolio.git](https://github.com/drewwastaken/Portfolio.git)
    ```
2.  **Open the file:**
    Simply double-click `index.html` to open it in your web browser. No `npm install` or server required!

## 🖼️ Asset Requirements
To ensure the site looks correct, the root folder must contain the following images:

| File Name | Description |
| :--- | :--- |
| `profile.jpg` | Your main profile avatar (square aspect ratio) |
| `closedopen.png` | Screenshot for Closed:Open game |
| `dengue.png` | Screenshot for Dengue Heatmap |
| `eclipse.png` | Screenshot for Eclipse game |
| `ecoality.png` | Screenshot for Hawk-a-thon/EcoAlity |
| `cyberedge.png` | Screenshot for Cyberedge Industries |
| `monteoro.png` | Screenshot for Monte Oro Atelier |

## 🎨 Customization
* **Colors:** The color palette is defined in the `<script>` tag inside `index.html` under `tailwind.config`.
    * Primary Accent: `hud-accent` (#00ff41)
    * Background: `hud-black` (#050505)
* **Filtering:** To add new project categories, simply add a button in the `Quest Log` section and update the `filterProjects` function script at the bottom of the body.

## 🌐 Deployment
This site is static, so it is perfect for **GitHub Pages**.
1.  Go to your GitHub Repository Settings.
2.  Click **Pages** in the sidebar.
3.  Set "Source" to `Deploy from a branch` and select `main` / `root`.
4.  Save. Your site will be live at `https://drewwastaken.github.io/Portfolio/`.

## 👤 Author
**Nicholas Andrew Alcantara**
* BS Information Technology Student @ TUP Manila
* [LinkedIn](https://linkedin.com/in/drew-alcantara)
* [GitHub](https://github.com/drewwastaken)

---
*Inspired by the design of cr0ybot.com*
