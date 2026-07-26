# Velora Skin

Velora is a React e-commerce concept built around a complete skincare discovery journey: browsing, filtering, search, product details, wishlist management, cart interactions, guided recommendations, and a simulated checkout.

> Portfolio concept: Velora is a fictional brand. Product claims, reviews, prices, and checkout behavior are demonstration content.

## Project overview

**Goal:** Combine a premium editorial identity with a shopping journey that remains clear and usable.

**My role:** Product interface design, React architecture, shared storefront state, interactions, and documentation.

**Outcome:** A multi-view storefront demonstration with connected discovery, consideration, and checkout states.

## Screenshots

| Homepage | Shop catalog |
| --- | --- |
| ![Velora desktop homepage](docs/screenshots/overview-desktop.png) | ![Velora desktop shop catalog](docs/screenshots/shop-desktop.png) |

## Key functionality

- Product catalog, filters, search, and detailed product views
- Cart drawer, quantity controls, wishlist state, and quick-view interactions
- Guided routine quiz and bundle-building experience
- Ingredient registry, editorial content, reviews, and comparison component
- Promotional-code, shipping-threshold, gifting, and checkout states
- Desktop navigation with search, wishlist, cart, and guided recommendations

## Architecture and decisions

- `ShopContext` centralizes navigation, cart, wishlist, promotions, gifting, search, and overlay state.
- Views represent the main shopping stages while reusable components handle global interactions.
- Product information lives in structured data modules instead of being repeated in components.
- Checkout is intentionally simulated and never requests or transmits real payment details.

## Technology

- React 18
- Vite
- JavaScript
- CSS
- React Context
- Lucide React icons
- Oxlint and Node test runner

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run build
```

GitHub Actions runs these checks for every pushed branch and pull request.

## Limitations

- No production account, inventory, payment, tax, shipping, or order-management service
- Cart and wishlist state reset when the page reloads
- All product and editorial content is fictional

## Assets and reuse

See [ASSETS.md](ASSETS.md) for asset notes and [LICENSE](LICENSE) for reuse terms.
