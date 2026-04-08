Dream Canvas Project
🌌 Overview
Dream Canvas is a frontend showcase blending hand‑sketched assets, textures, and real‑time animations. It demonstrates design, motion, and subtle patterns that merge into a cohesive, responsive visual experience.

🚀 Getting Started
Development server
bash
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
Open http://localhost:3000 in your browser.

Environment variables
NEXT_PUBLIC_OPENWEATHER_KEY → required for the City Selector / Living Canvas.

✨ Features
Homepage Animations: Alternating slide‑in effects (left, right, bottom) with fade, scale, blur, and spring physics.

Gallery View: Filterable grid of design assets, animated with Framer Motion (initial, whileInView, viewport).

City Selector: Search bar connected to OpenWeather API, transforming the Living Canvas in real time based on the city selected.

Living Canvas: Dynamic environment combining rain, snow, gradients, stars, planets, and wind, all in one.

🛠️ Technical Showcase
Motion System
Framer Motion powers scroll‑triggered reveals.

Homepage sections alternate slide directions (x: ±100, y: 100) with fade, scale, and blur.

Gallery cards use combined transforms (opacity, y, x, scale) for dynamic entry.

Staggered children animate sequentially for headings, text, and buttons.

Randomness
Stars: generateStars(n) produces randomized positions and twinkle cycles for natural variation.

Rain: Raindrops generated with staggered timers and randomized keyframe classes (animate-rain-animation-\*) to avoid uniform lines.

Snow: Similar to rain but slower, with opacity tweaks for softness.

Wind: Clouds and trees sway at randomized speeds tied to API wind data.

Randomness ensures no two renders look identical, creating organic motion.

Tailwind Customizations
Custom gradients (from-soft-clay, to-stone-500) for backgrounds.

Keyframe animations defined in globals.css for rain, snow, and tree sway.

Utility classes for layering (isolate, z-\*) to manage stacking contexts.

Accessibility
Semantic HTML structure.

Clear text contrast and enriched descriptions.

Motion tuned for readability (no excessive jitter, viewport triggers only once).

📂 Architecture
app/layout.tsx → global layout, navigation, footer.

app/page.tsx → homepage sections with motion wrappers.

components/ → reusable UI elements (cards, buttons, frames).

context/CityContext.tsx → weather state management.

data/gallery-data.ts → mock gallery items with categories.

📦 Deployment
Deploy easily on Vercel.
Follow Next.js deployment docs.

📝 Notes & Quirks
Next/Image stacking contexts: layering decorative assets required isolation or DOM order adjustments.

Randomness: ensures organic feel but can complicate testing — document seed values if determinism is needed.

Animations: viewport triggers are set to once: true to avoid distraction from repeated motion.

Viewport: this project is designed to work on large desktop screens, so many pin point asset location animations will not run correctly on portable devices with smaller screens.
