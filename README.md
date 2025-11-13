# Ellty Frontend Test

A pixel-perfect replication of UI components from Figma, built with HTML, CSS, and vanilla JavaScript.

## What's This?

This is my submission for the Ellty frontend developer test. The goal was to recreate the components from the Figma design as accurately as possible and make them interactive.

## What I Built

**Three main components:**
- **Button** - Yellow action button with hover and active states
- **Checkbox** - Custom checkbox with 9 different variants (unchecked, hover, pressed, checked, etc.)
- **Pages Card** - A complete component combining checkboxes with a "select all" feature

**Key features:**
- Pixel-perfect design matching Figma specs
- Interactive checkboxes with smooth state transitions
- "Select all" functionality - checking "All pages" selects everything
- Clean, readable code structure
- Montserrat typography throughout

## How to Run

**Super simple - just open the file:**
1. Download or clone this repo
2. Open `index.html` in your browser
3. That's it!

**Or use a local server:**
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html          # Main page with all components
├── css/
│   └── styles.css      # All the styling
├── js/
│   └── script.js       # Interactive functionality
└── assets/
    └── Vector 141.svg  # Checkmark icon
```

## Tech Stack

Just the basics - no frameworks needed:
- HTML5
- CSS3 (Flexbox, custom properties)
- Vanilla JavaScript (for checkbox interactions)
- Google Fonts (Montserrat)

## What Works

✅ All buttons respond to hover and click
✅ Checkboxes show all 9 variants from Figma
✅ "All pages" checkbox controls all page checkboxes
✅ Typography matches Figma exactly (14px Montserrat Regular)
✅ Colors, spacing, and shadows are pixel-perfect
✅ Instant animations (0ms as per Figma specs)

## Design Reference

[View the Figma Design](https://www.figma.com/design/dwBFtlKY933OJWWSrGPs5q/Frontend?node-id=0-1)

---

Built for Ellty - November 2025
