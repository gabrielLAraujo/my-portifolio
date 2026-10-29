# DESIGN.md — frauchesgabriel.work

Direction: calm, technical and trustworthy. The site sells software work to small and
mid-sized business owners (PT, `/`) and contract work to international teams (EN, `/en`).
It should read like a small professional studio, not a developer playground: no neon,
no animated backgrounds, no custom cursor, no gradient text.

## Color

Neutral scale is warm gray (stone). One primary color (teal) for actions and links.
No second accent. Every value exists in light and dark.

| Token             | Light     | Dark      | Role                               |
| ----------------- | --------- | --------- | ---------------------------------- |
| `--bg`            | `#fafaf9` | `#0c0a09` | Page background                    |
| `--surface`       | `#ffffff` | `#1c1917` | Cards, header, inputs              |
| `--surface-muted` | `#f5f5f4` | `#141210` | Alternate section background       |
| `--border`        | `#e7e5e4` | `#292524` | Dividers, card and input borders   |
| `--text`          | `#1c1917` | `#f5f5f4` | Headings and body                  |
| `--text-muted`    | `#57534e` | `#a8a29e` | Secondary text, captions           |
| `--primary`       | `#0f766e` | `#2dd4bf` | Primary buttons, links, focus ring |
| `--primary-hover` | `#115e59` | `#5eead4` | Hover of primary                   |
| `--on-primary`    | `#ffffff` | `#042f2e` | Text on primary buttons            |
| `--primary-soft`  | `#ccfbf1` | `#042f2e` | Tags, highlighted step numbers     |
| `--success`       | `#15803d` | `#4ade80` | Form sent                          |
| `--error`         | `#b91c1c` | `#f87171` | Form errors                        |

Contrast: `--text-muted` on `--bg` is above 7:1 in both themes; white on `--primary`
is 5.4:1; `--on-primary` on dark `--primary` is above 9:1.

## Typography

One family: Geist (variable, via `next/font`), weights 400, 500 and 600 only.
Code-like labels (stack chips) use the system monospace stack.

| Name    | Size / line height                                 | Use                     |
| ------- | -------------------------------------------------- | ----------------------- |
| display | 56/60 desktop, 36/42 mobile, 600, tracking -0.02em | Hero heading            |
| h2      | 36/44 desktop, 28/36 mobile, 600, tracking -0.01em | Section headings        |
| h3      | 20/28, 600                                         | Card and step titles    |
| lead    | 20/32, 400                                         | Hero and section intros |
| body    | 16/26, 400                                         | Text                    |
| small   | 14/20, 500                                         | Labels, captions, nav   |
| eyebrow | 13/20, 500, uppercase, tracking 0.08em             | Section labels          |

Text columns stay at 65 characters (`max-w-prose`).

## Spacing and layout

Tailwind's 4px scale. Content width 1120px (`max-w-6xl` with 24px side padding,
16px on phones). Sections: 96px vertical padding on desktop, 64px on phones.
Layouts are left-aligned; only the final call to action is centered.

## Shape and depth

Radius: 8px for buttons and inputs, 12px for cards, full for chips.
One shadow for raised cards in light mode: `0 1px 2px rgb(28 25 23 / 0.06), 0 1px 3px rgb(28 25 23 / 0.08)`.
No shadows in dark mode; borders carry the edges.

## Components

- **Button primary**: `--primary` fill, `--on-primary` text, 44px tall, 8px radius; hover `--primary-hover`; focus 2px ring in `--primary` with 2px offset; disabled 60% opacity.
- **Button secondary**: `--surface` fill, `--border` border, `--text`; hover border `--text-muted`.
- **Quiet link**: `--primary` text with underline on hover, arrow icon when it leaves the page.
- **Input**: `--surface` fill, `--border` border, 44px tall, label above, error text in `--error` below.
- **Card**: `--surface`, 1px `--border`, 12px radius, 24px padding, shadow in light mode only.
- **Header**: sticky, `--bg` at 90% opacity with a bottom border; name on the left, anchors from 1024px up (menu button below that), language link, theme toggle, WhatsApp button from 768px up.
- **Footer**: one row, muted text.

## Imagery and icons

Icons: lucide-react, 20px, stroke 1.75, in `--text-muted` or `--primary`.
Screenshots of real projects only (stored in `public/cases`, 16:10 WebP), in a card with a 1px border; one portrait photo in the hero.
No stock photos, no illustrations, no emoji.

## Motion

Only a short fade-in on page load (opacity and 8px translate, 300ms) and hover
transitions of 150ms. Everything is disabled under `prefers-reduced-motion`.
