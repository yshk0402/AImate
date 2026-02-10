# Corporates-site

Next.js App Router based corporate website starter for AI-driven iteration.

## Features
- Git-managed MDX content (`blog`, `lp`)
- `draft/published` publication control
- Locale-aware routes (`ja`/`en`)
- Sitemap and robots generation
- CI pipeline (lint, typecheck, build)

## Requirements
- Node.js `18.x` (see `.nvmrc`)
- pnpm `10.28.0`

## Setup
```bash
pnpm install
pnpm dev
```

Open: `http://localhost:3000`

## Scripts
```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm format:check
```

## Directory Layout
```text
src/
  app/
    [locale]/
      blog/[slug]/page.tsx
      lp/[campaign]/page.tsx
  lib/
    content/
    i18n/
content/
  blog/{ja,en}/
  lp/{ja,en}/
docs/
```

## Content Authoring
### Blog (`content/blog/{locale}/{slug}.mdx`)
```mdx
---
title: "..."
description: "..."
slug: "..."
locale: "ja"
status: "draft"
publishedAt: "2026-02-10"
---

本文
```

### Landing Page (`content/lp/{locale}/{campaign}.mdx`)
```mdx
---
title: "..."
description: "..."
campaign: "..."
locale: "ja"
status: "published"
---

本文
```
