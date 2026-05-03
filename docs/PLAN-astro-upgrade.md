# Upgrade Astro 5.18.1 to 6.2.x

## Goal

Upgrade this Astro project from `astro v5.18.1` to `astro v6.2.x` safely without breaking blog rendering, CI checks, build output, or deployment.

## Context

- Current runtime: `astro v5.18.1`
- Target: `astro v6.2.x`
- Project type: WEB / Static Astro site
- CI runs: `npm ci`, `npm run build`, `npm run check`
- Critical paths:
  - `package.json`
  - `package-lock.json`
  - `astro.config.ts`
  - `src/content.config.ts`
  - `src/data/post/*.md`
  - `.github/workflows/actions.yaml`

## Success Criteria

- [x] `npx astro --version` shows `astro v6.2.x`
- [x] `npm run check` passes locally
- [x] `npm run build` passes locally
- [x] Blog pages render correctly, especially `/icc-profile-la-gi`
- [x] GitHub Actions passes on pushed branch/main
- [ ] No `.astro/*` or `.brain/*` generated/local files committed again

## Tasks

- [x] Task 1: Confirm clean baseline  
       Agent: `project-planner` / Skill: `plan-writing`  
       Verify: `git status`, `npx astro --version`, `npm run check`, `npm run build` outputs are recorded.

- [x] Task 2: Create safe upgrade branch  
       Agent: `devops-engineer` / Skill: `deployment-procedures`  
       Verify: branch exists as `chore/upgrade-astro-6-2` and main is untouched.

- [x] Task 3: Run official Astro upgrade path  
       Agent: `frontend-specialist` / Skill: `clean-code`  
       Preferred command: `npx @astrojs/upgrade`  
       Verify: `package.json` and `package-lock.json` update Astro-related packages only as needed.

- [x] Task 4: Audit Astro config and integrations  
       Agent: `frontend-specialist` / Skill: `architecture`  
       Check:
  - `@astrojs/mdx`
  - `@astrojs/sitemap`
  - `@astrojs/partytown`
  - `astro-compress`
  - `astro-icon`
  - custom `vendor/integration`  
    Verify: no deprecated/unsupported config error in `npm run build`.

- [x] Task 5: Audit content collections  
       Agent: `frontend-specialist` / Skill: `clean-code`  
       Check:
  - `src/content.config.ts`
  - `src/data/post/*.md`
  - generated `.astro` files are ignored  
    Verify: `astro check` reports no blocking errors.

- [x] Task 6: Audit image, SVG, and font behavior  
       Agent: `performance-optimizer` / Skill: `performance-profiling`  
       Context: Astro 6.2 includes SVG optimizer API and font file URL helper improvements.  
       Verify: blog images and optimized output build correctly.

- [x] Task 7: Run local verification  
       Agent: `test-engineer` / Skill: `testing-patterns`  
       Commands:
  - `npm run check`
  - `npm run build`
  - `npm run dev`  
    Verify: all commands pass and key pages load.

- [x] Task 8: Push upgrade branch and monitor CI  
       Agent: `devops-engineer` / Skill: `deployment-procedures`  
       Verify: GitHub Actions passes for the upgrade branch.

- [ ] Task 9: Merge or rollback decision  
       Agent: `project-planner` / Skill: `plan-writing`  
       Verify:
  - If CI green: merge to `main`
  - If CI red: fix on branch or rollback branch without touching `main`

## Risk Notes

- `astro-compress` may be the highest-risk integration during Astro major upgrade.
- `z` deprecation hints from `astro:content` should not be "fixed" by switching to plain `zod` unless Astro 6.2 schema typing supports it in this project.
- `.astro/` and `.brain/` must remain local/generated and should not be committed.
- If `@astrojs/upgrade` asks for interactive confirmation, review choices before accepting.

## Rollback Plan

If upgrade causes unresolved issues:

```bash
git checkout main
git branch -D chore/upgrade-astro-6-2
```

If changes were committed but not merged, simply abandon the branch.

## Done When

- [x] Astro version is `6.2.x`
- [x] Local checks pass
- [x] CI checks pass
- [x] Site routes and blog content render correctly
- [x] Upgrade notes saved via `/save-brain`
