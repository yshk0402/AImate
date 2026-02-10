# Architecture

## Goal
Deliver a flexible corporate site that supports rapid publishing of blogs and landing pages without introducing a CMS.

## System Overview
- Next.js App Router for routing and rendering
- MDX files in Git as the content source of truth
- Frontmatter validation with schema checks
- Publication controlled by `status: draft|published`

## Runtime Flow
1. Route receives locale and slug/campaign.
2. Repository loader reads MDX file from `content/*`.
3. Frontmatter is validated.
4. Non-published content is excluded.
5. MDX is rendered server-side.

## Extensibility
- Add new content types by introducing a new folder under `content/` and a corresponding schema.
- Add shared UI by extending `src/components`.
- Add new locale by updating locale constants and content directories.
