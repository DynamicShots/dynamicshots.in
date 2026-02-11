# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DynamicShots (dynamicshots.in) — a professional photography portfolio website. Currently showing a "coming soon" landing page, with the full site to be built out.

## Tech Stack

- **Framework**: Next.js 16 (App Router, `src/` directory)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (using `@import "tailwindcss"` syntax, not `@tailwind` directives)
- **Deployment**: Vercel (Mumbai region `bom1`)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Architecture

- `src/app/layout.tsx` — Root layout with Geist font, metadata (OG/Twitter cards for dynamicshots.in)
- `src/app/page.tsx` — Main page (currently the "coming soon" landing)
- `src/app/globals.css` — Global styles including custom animations (fadeInUp, shutterReveal, pulseGlow, gradientShift)
- `src/app/icon.svg` — Favicon (aperture/lens SVG)
- `vercel.json` — Vercel deployment config

## Tailwind CSS v4 Notes

This project uses Tailwind CSS v4 which has a different configuration approach from v3:
- No `tailwind.config.js` — theme customization uses `@theme inline` in `globals.css`
- CSS import is `@import "tailwindcss"` (not `@tailwind base/components/utilities`)
- PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss`)

## Design Direction

- Dark, cinematic aesthetic (dark backgrounds, subtle blue/indigo accents)
- Photography-themed visual elements (aperture icons, shutter animations)
- Minimal and elegant — prioritize whitespace and typography
