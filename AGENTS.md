# AGENTS.md

## Purpose
This repository is an AI-assisted corporate website foundation.
The goal is to ship blog content and landing pages rapidly while keeping all source in Git.

## Tech Stack
- Framework: Next.js App Router + TypeScript
- Package manager: pnpm
- Hosting target: Vercel
- Content source: MDX + frontmatter (no CMS)
- Locales: `ja`, `en`

## Standard Commands
- Install: `pnpm install`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Type check: `pnpm typecheck`
- Build: `pnpm build`
- Format check: `pnpm format:check`

## Change Policy
- Keep changes small and focused per PR.
- Update docs together with structural or workflow changes.
- If a change is breaking, document impact and migration steps in PR description.

## Content Placement Rules
- Blog content: `content/blog/{locale}/*.mdx`
- Landing pages: `content/lp/{locale}/*.mdx`
- Public images: `public/images/*`

## Frontmatter Requirements
### Blog
Required fields:
- `title`
- `description`
- `slug`
- `locale` (`ja` | `en`)
- `status` (`draft` | `published`)

Optional fields:
- `publishedAt` (ISO date)
- `tags`
- `ogImage`

### Landing Page
Required fields:
- `title`
- `description`
- `campaign`
- `locale` (`ja` | `en`)
- `status` (`draft` | `published`)

Optional fields:
- `publishedAt` (ISO date)
- `heroCta`
- `ogImage`

## Publication Rules
- Only `status: published` appears in list/detail/sitemap output.
- `draft` content is kept in Git but hidden from production output.

## i18n Rules
- Route format: `/{locale}/...`
- Allowed locales: `ja`, `en`
- Keep slug/campaign parity across `ja` and `en` when possible.

## Landing Page Checklist
Before publishing an LP:
- Confirm unique `campaign` value.
- Confirm metadata fields (`title`, `description`, `ogImage`).
- Confirm internal links are valid.
- Confirm status is `published`.
- Confirm page appears in `sitemap.xml` after build.
