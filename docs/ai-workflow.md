# AI Workflow

## Objective
Keep AI-generated changes reliable and reviewable.

## Agent Guardrails
- Follow `AGENTS.md` conventions
- Do not introduce CMS dependencies
- Respect routing and content folder conventions
- Keep changes small and scoped

## Suggested Agent Loop
1. Read relevant files and docs
2. Propose minimal patch
3. Run `pnpm lint`, `pnpm typecheck`, `pnpm build`
4. Summarize change + affected files

## Review Checklist
- Does the change preserve flat routing conventions?
- Does it keep `draft/published` behavior intact?
- Does it update documentation if structure changed?
