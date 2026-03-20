# Helpi Website Design Language and Style Guide

Version: 1.0
Date: 2026-03-21
Scope: Visual language, UI behavior, content style, and implementation tokens for https://helpi-template.framer.website

## 1) Executive Summary

This site uses a warm, trust-first nonprofit aesthetic built on:
- High-contrast editorial typography for emotional storytelling.
- Soft warm backgrounds with dark navy emphasis for authority.
- Rounded cards and image-led sections to communicate humanity.
- Clear CTA rhythm across long-form landing content.
- Repeated social proof and impact metrics to build confidence.

The visual voice is compassionate, credible, and action-oriented.

## 2) Brand Intent and Personality

### Personality Traits
- Compassionate: Warm palette and people-first imagery.
- Reliable: Dark neutral/navy headings and stable grid.
- Energetic: Frequent CTA moments and dynamic collage-style media.
- Transparent: Metrics, impact counters, and donation clarity language.

### Positioning Style
- Community + impact, not luxury or hyper-corporate.
- Emotion first, then proof, then conversion.

## 3) Information Architecture Pattern

Primary page pattern observed:
1. Hero with mission headline + social proof
2. Mission overview and support programs
3. Why choose us / value pillars
4. Causes and impact metrics
5. Detailed cause cards and goal amounts
6. FAQ for friction removal
7. Story/blog section for narrative trust
8. Final contact CTA + footer

Navigation labels:
- About Us
- Causes
- Projects
- Events
- Contact

## 4) Visual Foundations

### 4.1 Color System (Extracted Source Tokens)

Raw tokens found in source:
- #FFFFFF
- #FFF1EE
- #0F0F0F
- #202E3F
- #6F6F6F
- #C5C6C6
- #4D5561
- #FFF9F8
- #F0F0F0
- #FFFFFFE6
- #FFF9
- #FFF6
- #202E3F00

Recommended semantic mapping:

| Semantic Token | Hex | Purpose |
|---|---|---|
| color.background.base | #FFFFFF | Global surface |
| color.background.warm | #FFF9F8 | Warm section background |
| color.background.warm.alt | #FFF1EE | Highlighted section/CTA panels |
| color.text.primary | #202E3F | Headlines, high-emphasis text |
| color.text.strong | #0F0F0F | Near-black utility text |
| color.text.secondary | #4D5561 | Body text default |
| color.text.muted | #6F6F6F | Secondary labels |
| color.border.soft | #C5C6C6 | Inputs, dividers, subtle borders |
| color.border.light | #F0F0F0 | Low-contrast separators |
| color.overlay.white.90 | #FFFFFFE6 | Overlay, floating UI |
| color.alpha.white.60 | #FFF9 | Soft chips/over-image UI |
| color.alpha.white.40 | #FFF6 | Minimal tint states |
| color.transparent.brand | #202E3F00 | Brand fade/gradient stops |

Accessibility guidance:
- Keep body text at WCAG AA minimum contrast, target 4.5:1.
- Use color.text.primary on light backgrounds for headings.
- Avoid muted text for critical actions.

### 4.2 Typography System

Observed families:
- Questrial (dominant display and UI headings)
- Inter (utility/system and fallback text)
- Petrona (accent editorial italics)

Recommended roles:

| Token | Family | Weight | Style | Typical Use |
|---|---|---|---|---|
| font.family.display | Questrial | 400 | Normal | H1-H4, stat headlines |
| font.family.body | Questrial | 400 | Normal | Body copy and section intros |
| font.family.ui | Inter | 400-600 | Normal | Small labels, controls, metadata |
| font.family.accent | Petrona | 500-700 | Italic | Pull quotes, emotional emphasis |

Observed sizes in source include:
- 14, 16, 18, 22, 24, 28, 32, 36, 44, 46, 50, 54, 58, 60, 64, 68, 74, 80, 120, 150

Practical product scale to standardize:

| Text Role | Desktop | Mobile | Line Height |
|---|---|---|---|
| Display XL | 74 | 46 | 1.1 |
| Display L | 60 | 40 | 1.1 |
| H1 | 50 | 36 | 1.1 |
| H2 | 36 | 28 | 1.2 |
| H3 | 28 | 24 | 1.2 |
| H4 | 24 | 22 | 1.2 |
| Body L | 18 | 18 | 1.5 |
| Body M | 16 | 16 | 1.5 |
| Body S | 14 | 14 | 1.5 |
| Label | 14 | 14 | 1.2 |

Case and rhythm:
- Sentence case for body and headline readability.
- Tight display line-height around 1.1 to 1.2.
- Body around 1.5 for long-form scannability.

### 4.3 Spacing and Sizing

Frequently observed spacing values:
- 4, 10, 16, 20, 24, 30, 40, 70, 80, 130
- Typical button padding includes 12x22.
- Section vertical spacing includes 130 top and bottom in larger layouts.

Recommended spacing token set:

| Token | Value |
|---|---|
| space.1 | 4 |
| space.2 | 8 |
| space.3 | 12 |
| space.4 | 16 |
| space.5 | 20 |
| space.6 | 24 |
| space.7 | 30 |
| space.8 | 40 |
| space.9 | 56 |
| space.10 | 70 |
| space.11 | 80 |
| space.12 | 96 |
| space.13 | 130 |

### 4.4 Radius and Shape

Observed:
- 20px appears as a dominant corner radius.
- 10px appears on selected image wrappers.
- Some circular and pill treatments exist in avatars and badges.

Recommended radius tokens:

| Token | Value | Use |
|---|---|---|
| radius.sm | 10 | Chips, small cards |
| radius.md | 14 | Input fields |
| radius.lg | 20 | Primary cards, sections |
| radius.full | 9999 | Pills, circular buttons, avatars |

## 5) Grid and Responsive Behavior

Observed breakpoint ranges:
- 0-767 mobile
- 768-991 tablet portrait/small landscape
- 992-1279 desktop small
- 1280+ desktop large

Observed container clues:
- Max width appears around 1280 to 1345 in key sections.
- Full-width image bands used between structured sections.

Recommended layout tokens:

| Token | Value |
|---|---|
| breakpoint.sm | 768 |
| breakpoint.md | 992 |
| breakpoint.lg | 1280 |
| container.max | 1345 |
| container.gutter.desktop | 30 |
| container.gutter.mobile | 20 |

Layout rules:
- Keep long-form sections in constrained containers.
- Use alternating full-bleed media to reset visual fatigue.
- Maintain consistent top/bottom section rhythm.

## 6) Component Language

### 6.1 Buttons and CTAs

Behavior and style:
- Primary CTA repeated frequently per section.
- Compact but confident button shape, rounded corners.
- Clear imperative labels: Donate, Contact, Join, View More.

Component spec:
- Height: 44 to 48
- Horizontal padding: 22 to 28
- Radius: radius.lg
- Label size: 14 to 16
- Transition: color/fill 0.3s, ease style cubic-bezier(.44,0,.56,1)

### 6.2 Cards

Patterns:
- Cause cards with title, short description, fund target, and CTA.
- Story cards with image, date, title, and Read More.
- Value pillar mini-cards with icon + heading + supportive line.

Card principles:
- Strong top visual or icon anchor.
- Clear hierarchy: title then context then action.
- Generous internal spacing (20 to 30).

### 6.3 Metrics and Social Proof

Patterns:
- Large numerics (200K+, 99%, 50M+) near concise labels.
- Volunteer counters and trust signals near top.

Spec guidance:
- Metric value in display role.
- Descriptor in body S or label.
- Group in clusters of 3 or 4 for scanning.

### 6.4 FAQ Accordion

Patterns:
- Single-line question headers.
- Plus icon affordance.
- Compact card rows with clear active state.

### 6.5 Navigation and Footer

Patterns:
- Straightforward nav labels.
- Footer provides secondary links and legal line.
- Contact CTA repeated near page end.

## 7) Motion and Interaction

Observed timing clues:
- Frequent 0.3s transitions with cubic-bezier(.44,0,.56,1).

Motion language recommendation:
- Use subtle reveal-in on section entry.
- Keep motion directional and purposeful, never decorative noise.
- Respect reduced-motion preference globally.

Motion tokens:

| Token | Value |
|---|---|
| motion.duration.fast | 150ms |
| motion.duration.base | 300ms |
| motion.duration.slow | 500ms |
| motion.easing.standard | cubic-bezier(.44,0,.56,1) |
| motion.easing.exit | cubic-bezier(.4,0,1,1) |

## 8) Imagery and Iconography

Imagery style:
- Human-centered photography with authentic volunteer/community scenes.
- Warm natural grading and high emotional readability.
- Rounded crops and collage layering in hero/sections.

Iconography style:
- Simple line/filled thematic icons (heart, health, people, plus).
- Use icons as support, not replacement for text labels.

## 9) Content and Copy Style

Voice:
- Warm, direct, hopeful.
- Plain language with action orientation.
- Focus on outcomes and dignity.

Copy pattern:
- Headline: aspiration or mission statement.
- Subtext: concrete explanation and empathy context.
- CTA: explicit action in 2 to 4 words.

Avoid:
- Corporate jargon.
- Ambiguous CTAs.
- Dense unbroken paragraphs.

## 10) Accessibility Requirements

Minimum requirements:
- Color contrast AA for all text and controls.
- Keyboard focus visible and consistent.
- Click targets at least 44x44.
- Logical heading hierarchy H1 to H4.
- Alt text for all content images.
- Reduced motion fallback for all animated components.

Recommended QA checks:
- Contrast scan on all warm background variants.
- Tab order test across nav, cards, accordions, footer.
- Screen-reader labels for all CTA links and icons.

## 11) Implementation Tokens (CSS Variables)

Suggested base variable contract:

:root {
  --color-background-base: #FFFFFF;
  --color-background-warm: #FFF9F8;
  --color-background-warm-alt: #FFF1EE;
  --color-text-primary: #202E3F;
  --color-text-strong: #0F0F0F;
  --color-text-secondary: #4D5561;
  --color-text-muted: #6F6F6F;
  --color-border-soft: #C5C6C6;
  --color-border-light: #F0F0F0;

  --font-display: "Questrial", sans-serif;
  --font-body: "Questrial", sans-serif;
  --font-ui: "Inter", sans-serif;
  --font-accent: "Petrona", serif;

  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 30px;
  --space-8: 40px;
  --space-10: 70px;
  --space-11: 80px;
  --space-13: 130px;

  --motion-duration-base: 300ms;
  --motion-ease-standard: cubic-bezier(.44,0,.56,1);

  --breakpoint-sm: 768px;
  --breakpoint-md: 992px;
  --breakpoint-lg: 1280px;
  --container-max: 1345px;
}

## 12) Do and Do Not

Do:
- Keep warm-light backgrounds with dark authoritative headings.
- Preserve rounded-card friendliness.
- Use repeated conversion opportunities throughout long pages.
- Pair emotional storytelling with hard impact numbers.

Do not:
- Switch to cold corporate blues/grays as dominant mood.
- Over-compress spacing in desktop sections.
- Use tiny text in donation-critical flows.
- Add motion-heavy effects that compete with mission content.

## 13) Governance and Maintenance

Recommended process:
1. Keep this file as the visual source of truth.
2. Mirror tokens in code (web app theme config).
3. Run monthly drift checks against production pages.
4. Review accessibility quarterly.
5. Update component specs before launching new page types.

## 14) Confidence and Method Note

This documentation is based on:
- Direct live content analysis of the website structure and component patterns.
- Extracted source-level style signals (font families, color tokens, breakpoints, spacing and radius frequencies).

If you want, this can be followed by a second pass that maps every section/component in your own app to this token contract so implementation and design stay 1:1.
