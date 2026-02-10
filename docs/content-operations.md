# Content Operations

## Publish a Blog Post
1. Add `content/blog/{locale}/{slug}.mdx`
2. Fill required frontmatter fields
3. Set `status: published`
4. Run `pnpm typecheck && pnpm build`
5. Merge to `main`

## Save Draft Content
- Keep file in Git with `status: draft`
- Draft files remain hidden in list/detail/sitemap output

## Publish a Landing Page
1. Add `content/lp/{locale}/{campaign}.mdx`
2. Ensure `campaign` is unique
3. Set `status: published`
4. Validate links and metadata
5. Merge and deploy

## Validation Notes
- `locale` in frontmatter must match folder locale
- `slug`/`campaign` must match filename
- Invalid frontmatter fails build/time checks
