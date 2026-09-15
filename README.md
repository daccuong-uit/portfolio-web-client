# portfolio-web-client — Đắc Cường Portfolio

> Angular 21 · Nx 22 · Port **4205** (dev & Docker) · Static SPA (no API)

**Single Landing Page** giới thiệu hành trình kỹ thuật của **Nguyễn Đắc Cường** — Senior Backend Engineer / Distributed Systems Architect tốt nghiệp Đại học Công nghệ Thông tin (UIT), ĐHQG TP.HCM.

## Live → [daccuong-uit/portfolio-web-client](https://github.com/daccuong-uit/portfolio-web-client)

---

## Nội dung trang

| Section | Nội dung |
|---|---|
| **Hero** | Định vị rõ ràng: Senior Backend Engineer / Distributed Systems Architect |
| **Key Metrics** | 5+ năm kinh nghiệm · 50K+ RPS · 99.99% SLA · Clean Architecture |
| **Core Expertise** | Distributed Systems, High Performance Backend, Database Engineering, Cloud & DevOps, Message Queues, Observability |
| **Featured Case Studies** | Reals Monorepo Platform, Real-time Transcoding Engine, E-Commerce High-Concurrency, Distributed IAM Cluster |
| **Career Journey** | Lộ trình sự nghiệp từ UIT đến hiện tại |
| **Engineering Philosophy** | Scalability · Reliability · Maintainability |
| **Contact CTA** | Email · GitHub · LinkedIn |

## Đặc điểm kỹ thuật

- **100% static** — không có API calls, không cần backend
- Single `PortfolioLandingComponent` with inline styles
- Dark mode natively (CSS `prefers-color-scheme`)
- Responsive: Desktop → Tablet → Mobile
- Không có auth, không có routing phức tạp — một route duy nhất `/`

## Chạy local

```bash
npm install
npm start          # → http://localhost:4205
npm run build
```

## Docker

```bash
# Từ workspace root:
docker compose build fe-portfolio
docker compose up -d fe-portfolio

# → http://localhost:4205
```

> Portfolio chạy **hoàn toàn tĩnh** — nginx không cần proxy `/api/`. Không phụ thuộc gateway hay bất kỳ backend service nào.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone) |
| Monorepo | Nx 22 |
| Styling | CSS custom properties, inline styles |
| Serving | nginx:1.27-alpine (static) |
