---
name: Insumo Flow
colors:
  surface: '#f6faff'
  surface-dim: '#b4e0ff'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eaf5ff'
  surface-container: '#dff0ff'
  surface-container-high: '#d3ebff'
  surface-container-highest: '#c7e7ff'
  on-surface: '#001e2e'
  on-surface-variant: '#434654'
  inverse-surface: '#00344c'
  inverse-on-surface: '#e4f3ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2551d9'
  primary: '#214ed7'
  on-primary: '#ffffff'
  primary-container: '#4369f1'
  on-primary-container: '#fffbff'
  inverse-primary: '#b7c4ff'
  secondary: '#1c00eb'
  on-secondary: '#ffffff'
  secondary-container: '#3d3aff'
  on-secondary-container: '#d6d5ff'
  tertiary: '#426820'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a8236'
  on-tertiary-container: '#020700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#0038b8'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#1c00eb'
  tertiary-fixed: '#c2f097'
  tertiary-fixed-dim: '#a7d47e'
  on-tertiary-fixed: '#0d2000'
  on-tertiary-fixed-variant: '#2b5007'
  background: '#f6faff'
  on-background: '#001e2e'
  surface-variant: '#c7e7ff'
  neutral-tint: '#C7D0C5'
  surface-page: '#F6F8FA'
  surface-card: '#FFFFFF'
  border-subtle: '#E2E8F0'
  status-pending-bg: '#FEF3C7'
  status-pending-text: '#92400E'
  status-approved-bg: '#E0E7FF'
  status-approved-text: '#3730A3'
  status-delivered-bg: '#DCFCE7'
  status-delivered-text: '#166534'
  status-rejected-bg: '#FEE2E2'
  status-rejected-text: '#991B1B'
  alert-low-stock-bg: '#FFEDD5'
  alert-low-stock-text: '#C2410C'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  tabular-numeric:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-trust, structured, and modern corporate environment tailored for internal material supply chains and inventory governance. Designed to eliminate operational friction and stock discrepancy, the visual personality prioritizes clarity, rapid scan speed, and functional accountability. 

The design aesthetic merges **Corporate / Modern** precision with **Tactile Utility**: clean surfaces, crisp geometric framing, high-contrast data density, and functional color coding. The visual tone instills dependability and authority for warehouse administrators while offering an intuitive, welcoming, low-friction flow for general staff submitting requisitions on mobile devices in warehouse corridors or offices.

## Colors

The color architecture is built around functional hierarchy, deliberate operational feedback, and strict accessibility compliance:

- **Primary (`#466CF4`)**: An energetic royal blue chosen for key interactive targets, selected states, and main call-to-actions.
- **Secondary (`#2B21F3`)**: Deep ultramarine reserved for authoritative actions, table headers, prominent brand markers, and focused states.
- **Tertiary (`#A7D47E`)**: Fresh operational leaf-green representing inventory health, positive stock status, and balanced growth.
- **Neutral Accent (`#6493B2`)**: Slate blue utilized for secondary metadata, tabular captions, icons, and subtle structural frames.
- **Neutral Tint (`#C7D0C5`)**: Soft sage-gray used for subtle divider rules and inactive states.

### Status Palette (Semantic Badges)
Operational status colors are tuned with dedicated light-fill backgrounds and deep foreground text tokens to ensure clear visual priority:
- **Pendente**: Amber/Gold (`status-pending-bg`, `status-pending-text`) for items awaiting administrative decision.
- **Aprovada**: Indigo/Blue (`status-approved-bg`, `status-approved-text`) for items cleared and queued for dispatch.
- **Entregue**: Emerald Green (`status-delivered-bg`, `status-delivered-text`) signaling complete atomic stock fulfillment.
- **Recusada**: Crimson Red (`status-rejected-bg`, `status-rejected-text`) denoting rejected requests or validation errors.

## Typography

The typographic hierarchy couples **Montserrat** for display headers and page branding with **Inter** for data tables, form layouts, badges, and operational copy. 

- **Montserrat** provides an assertive architectural rhythm with geometric clarity, giving dashboards and section headers crisp executive polish.
- **Inter** ensures legibility in high-density stock listings, quantity counts, and status indicators. 
- Numeric data in tables and stock balances should enforce tabular figure styling (`font-variant-numeric: tabular-nums`) to preserve column alignment across inventory counters.

## Layout & Spacing

The system implements a fluid, mobile-first grid transitioning to a centered container max-width of `1200px` on desktop viewports. 

- **Mobile Viewports (< 768px)**: A single-column layout with `1rem` edge margins and stacked interactive card views. Requisition rows transform into distinct card units to facilitate single-hand tapping in inventory areas.
- **Desktop Viewports (≥ 768px)**: A standard 12-column layout with `1.5rem` gutters and `2rem` outer margins. Content spreads into dense analytical data tables featuring sticky top headers and right-aligned transactional action buttons.
- **Component Padding Scale**: Follows an explicit 4px baseline rhythm (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2.5rem`), keeping input fields, modal dialogs, and table cells mathematically consistent.

## Elevation & Depth

Visual hierarchy leverages crisp surface borders combined with subtle, ambient drop-shadows to ensure high contrast in ambient lighting conditions (e.g., warehouse floors or bright corporate desks):

- **Level 0 (Flat Ground)**: Background surface `#F6F8FA` with no shadow.
- **Level 1 (Cards & Data Tables)**: Solid `#FFFFFF` background with a subtle border (`1px solid #E2E8F0`) and ambient shadow: `0 1px 3px 0 rgba(43, 33, 243, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)`.
- **Level 2 (Interactive Hover & Dropdowns)**: Elevated card state and custom select menus: `0 4px 6px -1px rgba(70, 108, 244, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Modals & Toast Notifications)**: High-priority prompts (such as stock entry modals and delivery confirmation dialogs): `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.

## Shapes

The design system standardizes on **Rounded (`roundedness: 2`)**:
- Form inputs, standard buttons, and data containers utilize an `8px` (`0.5rem`) border-radius.
- Status badges and contextual tags employ a pill-style rounding (`9999px`) to distinguish categorical metadata from clickable rectangular buttons.
- Outer modal containers, inventory stat cards, and notification banners utilize `12px` to `16px` (`0.75rem` to `1rem`) corner radii for structured containment.

## Components

### Buttons
- **Primary**: Solid background `#466CF4` with `#FFFFFF` text. Hover state shifts to `#2B21F3`. Focused elements display a `2px solid #466CF4` outline with `2px` offset.
- **Secondary / Outline**: Transparent background, border `1px solid #6493B2`, text `#2B21F3`. Hover state transitions to `#F6F8FA`.
- **Success / Action (Registrar Entrega)**: Background `#A7D47E` with dark forest text `#166534`, or solid green `#16a34a` with `#FFFFFF` text for critical commits.
- **Destructive (Recusar)**: Background `#FEE2E2` with border `1px solid #EF4444` and text `#991B1B`. Hover deepens to `#DC2626` with white text.
- **State Feedback**: Buttons automatically show an inline spinner and reduce opacity to `0.6` with `pointer-events: none` during Supabase RPC execution.

### Input Fields & Selects
- Constructed with `0.5rem` (`8px`) border-radius, background `#FFFFFF`, border `1px solid #C7D0C5`, and text color `#1E293B`.
- Focus ring: Border color snaps to `#466CF4` with a `3px` box-shadow halo (`rgba(70, 108, 244, 0.15)`).
- Material select elements prominently show real-time stock availability inline (e.g., `Resma Papel A4 (Saldo: 14 un)`).

### Status Badges
- Compact pill-shaped containers (`padding: 0.25rem 0.75rem`, `border-radius: 9999px`, typography `label-sm`).
- **Pendente**: Background `#FEF3C7`, text `#92400E`, border `1px solid #FDE68A`.
- **Aprovada**: Background `#E0E7FF`, text `#3730A3`, border `1px solid #C7D2FE`.
- **Entregue**: Background `#DCFCE7`, text `#166534`, border `1px solid #BBF7D0`.
- **Recusada**: Background `#FEE2E2`, text `#991B1B`, border `1px solid #FECACA`.

### Data Tables & Responsive Cards
- **Desktop Tables**: Row border bottom `1px solid #E2E8F0`, header row styled with subtle slate tint (`#F8FAFC`), uppercase column labels (`label-xs`, tracking `0.05em`), and numerical quantities styled with tabular alignment.
- **Mobile Cards**: On viewports under `768px`, table rows transform into cards with clear two-line headers: Material title in `headline-sm` with the status badge aligned top-right, followed by quantity and action triggers along the bottom edge.

### Stock Alert Tag (Alerta de Estoque Baixo)
- When `saldo <= estoque_min`, the stock quantity displays alongside a warning pill badge: Background `#FFEDD5`, text `#C2410C`, bold border `1px solid #FDBA74`.