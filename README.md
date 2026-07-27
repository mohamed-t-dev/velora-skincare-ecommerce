<div align="center">

# Velora Skin

**An editorial skincare storefront designed for confident product discovery.**

![React](https://img.shields.io/badge/React-18-8B5CF6?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=flat-square&logo=vite&logoColor=white)
![Project](https://img.shields.io/badge/Project-Web_Experience-2F3E46?style=flat-square)

</div>

---

## Product story

Velora brings premium editorial direction into a connected commerce journey. Browsing, search, product education, wishlist decisions, cart interactions, guided recommendations, and checkout states work together as one focused storefront experience.

| Focus | Contribution | Result |
| --- | --- | --- |
| Premium discovery without sacrificing clarity | Product interface design, React architecture, shared storefront state, interactions, and documentation | A multi-view shopping experience spanning discovery, consideration, and checkout |

## Interface preview

| Homepage | Shop catalog |
| --- | --- |
| ![Velora desktop homepage](docs/screenshots/overview-desktop.png) | ![Velora desktop shop catalog](docs/screenshots/shop-desktop.png) |

## Experience highlights

- Searchable and filterable product catalog with detailed product views
- Cart drawer, quantity controls, wishlist state, and quick-view interactions
- Guided routine quiz and bundle-building experience
- Ingredient registry, editorial content, reviews, and product comparison
- Promotional-code, gifting, shipping-threshold, and checkout states
- Desktop navigation that keeps search, wishlist, cart, and recommendations close at hand

## Design and engineering

- <code>ShopContext</code> centralizes navigation, cart, wishlist, promotions, gifting, search, and overlay state.
- Structured data modules keep product information separate from interface components.
- Reusable views and controls connect the major stages of the shopping journey.
- Checkout is implemented as a front-end flow and does not process or transmit real payment details.

## Technology

React 18 · Vite · JavaScript · CSS · React Context · Lucide React · Oxlint · Node test runner

## Run locally

~~~bash
npm install
npm run dev
~~~

## Quality checks

~~~bash
npm run lint
npm test
npm run build
~~~

GitHub Actions runs these checks for every pushed branch and pull request.

## Implementation note

> Checkout interactions are presented as an interface flow and do not process real payments.

## Assets and usage

See [ASSETS.md](ASSETS.md) for asset notes and [LICENSE](LICENSE) for reuse terms.
