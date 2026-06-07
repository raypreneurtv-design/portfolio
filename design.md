# Insight Operator — Design System

## Mission
Implementation-ready, token-driven UI guidance for the Insight Operator marketing site. Optimized for a refined, premium, **dark, ink-only** look that reads as "a real operator built this," not an AI template. Restraint over decoration.

## Brand
- Product/brand: Insight Operator
- URL: https://www.insightoperator.com/
- Audience: home-service business owners (HVAC, plumbing, roofing, landscaping, electrical, cleaning)
- Product surface: marketing/landing site that books intro calls

## Style Foundations
- Visual style: refined dark, flat, monochrome ("ink-only"), generous whitespace, real product over decoration.
- Font: `font.family.primary = DM Sans`, stack `DM Sans, -apple-system, Segoe UI, Roboto, sans-serif`. One typeface, strong hierarchy.
- Type scale (rem): `xs=0.8`, `sm=0.9`, `base=1`, `lg=1.125`, `xl=1.375`, `2xl=1.75`, `3xl=2.5`, `4xl=3.5`, `5xl=4.5`. Tighten tracking on `>=3xl` headings (`letter-spacing: -0.02em`).
- Color tokens (semantic — never raw hex in components):
  - `color.surface.base = #0a0a0b` (near-black, NOT pure #000)
  - `color.surface.raised = #121214`
  - `color.surface.muted = #18181b`
  - `color.border = rgba(255,255,255,0.10)`
  - `color.border.strong = rgba(255,255,255,0.18)`
  - `color.text.primary = #f5f5f7`
  - `color.text.secondary = #a1a1aa`
  - `color.text.tertiary = #71717a`
  - `color.text.inverse = #0a0a0b`
  - `color.accent = #ffffff` (the ONE pop: solid white primary buttons, black text)
  - `color.glow = rgba(180,200,255,0.55)` (cool white — used ONLY for the hero dot-grid cursor glow, nowhere else)
- Spacing scale (px): `1=4, 2=8, 3=12, 4=16, 5=24, 6=32, 7=48, 8=64, 9=96, 10=128`.
- Radius: `sm=8px`, `md=12px`, `lg=16px`, `pill=999px`.
- Motion: `instant=150ms`, `fast=250ms`, `normal=400ms`. Easing `cubic-bezier(0.4,0,0.2,1)`. Subtle only — fades and small slides on scroll, never bounce/glitch.

## Signature Interactions (the only two effects allowed)
1. **Hero dot-grid cursor glow** — a dot grid behind the hero. Dots sit at ~`color.border` opacity by default; a soft radial `color.glow` follows the cursor (tracked via `--mx`/`--my` CSS vars on `mousemove`) and brightens the dots within ~200px. No glow on touch devices. Component: `DotGridBackground`.
2. **Logo marquee** — a single horizontal auto-scrolling row of integration/stack logos ("Runs on"), masked to fade at both edges, pauses on hover. Honest content: integrations, not fabricated clients. Component: `LogoMarquee`.

## Banned (the AI-template tells — remove all)
Gradients (text or button), glows other than the one hero cursor glow, glitch, scanlines, shimmer, starry-night, neon (#00a8ff / #00ff87), glass-morphism blur panels, colored drop-shadow glows, marquee on anything but the logo row.

## Rules: Do
- Use semantic tokens, never raw hex, in components.
- Every interactive component defines: default, hover, focus-visible, active, disabled.
- Primary button = solid white, black text. Secondary = transparent with `color.border`, white text. Ghost = text + underline on hover.
- Real screenshots/product over illustration. Concrete copy ("answers every call, books the job") over hype.
- Keep ONE accent (white). Borders and type create hierarchy, not color.

## Rules: Don't
- No low-contrast text (body `>= color.text.secondary` on base).
- No second accent color. No reintroducing any banned effect.
- No one-off spacing/type values outside the scale.

## Accessibility (WCAG 2.2 AA)
- Focus-visible ring on all interactive elements (`outline: 2px solid color.text.primary; outline-offset: 2px`).
- Body/secondary text must hit AA contrast on `surface.base`.
- Dot-grid glow is decorative (`aria-hidden`, `pointer-events:none`), and disabled under `prefers-reduced-motion`.

## QA checklist
- [ ] No banned effect present anywhere.
- [ ] Single typeface (DM Sans), tokens only, no raw hex in components.
- [ ] Primary CTA is the only white-filled element in a section.
- [ ] Dot glow off on touch + reduced-motion.
- [ ] Logo row is honest (integrations or real clients only).
