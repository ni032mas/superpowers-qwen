---
name: finishing-a-development-branch
description: "Use when all tasks are complete — workflow for merge/PR and finishing development"
---

# Finishing a Development Branch

## Overview

Workflow for completing development branch: verification, presenting options to user, executing choice (merge, PR, continue).

**Core principle:** Explicit confirmation before merge.

**Announce at start:** "I'm using the finishing-a-development-branch skill to complete this work."

## The Process

### Step 1: Final Verification

**Before any merge:**

1. **Run all tests:**
   ```bash
   npm test
   # or project's test command
   ```

2. **Check build:**
   ```bash
   npm run build
   # or project's build command
   ```

3. **Check lint:**
   ```bash
   npm run lint
   # or project's lint command
   ```

4. **Confirm clean output:**
   - All tests pass
   - Build successful
   - No lint errors

**Don't continue if verification failed.**

### Step 2: Present Options

**Present user with 3 options:**

```
Development complete. All tests pass.

**Completion options:**

1. **Merge locally** — merge to main/master and push
   - Fast, for simple changes
   - Requires clean history

2. **Create Pull Request** — push to branch and create PR
   - Code review before merge
   - Better for large changes

3. **Continue on this branch** — stay on branch for additional changes
   - For unfinished work
   - For additional iterations

**Which option do you choose?**
```

### Step 3: Execute Choice

#### Option 1: Merge Locally

```bash
# Switch to main
git checkout main

# Pull fresh changes
git pull origin main

# Merge branch
git merge --no-ff <branch-name>

# Push
git push origin main

# Optional: delete branch
git branch -d <branch-name>
git push origin --delete <branch-name>
```

**After merge:**
- Announce success
- Offer to create release/tag if appropriate

#### Option 2: Pull Request

```bash
# Push branch
git push origin <branch-name>

# Create PR via CLI or browser
gh pr create --title "..." --body "..."
```

**PR Template:**
```markdown
## What this does
[Brief description]

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Testing
- [ ] All tests pass
- [ ] New tests added
- [ ] Manually tested

## Checklist
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Changelog updated
```

**After creating PR:**
- Announce PR link
- Request review from appropriate people

#### Option 3: Continue

- Stay on current branch
- Wait for additional instructions
- No merge, no push to main

### Step 4: Confirm Completion

After executing choice:

1. **Confirm status:**
   - Merge completed?
   - PR created?
   - Branch preserved?

2. **Suggest next steps:**
   - Monitor PR?
   - Start new feature?
   - Deploy?

## Git Worktree Integration

**If you used worktrees:**

```bash
# After merge/PR, cleanup worktree
git worktree remove <worktree-path>

# Optional: delete branch
git branch -d <branch-name>
```

## Completion Checklist

Before marking complete:
- [ ] All tests pass
- [ ] Build successful
- [ ] Lint clean
- [ ] User chose option
- [ ] Choice executed
- [ ] Status confirmed

## Anti-Patterns

### ❌ Merge Without Verification

**Symptom:** Merge before running tests.

**Why bad:** Breaking changes reach main.

**Cure:** Never merge without Step 1.

### ❌ Merge Without Asking

**Symptom:** Merge without explicit confirmation.

**Why bad:** User might want PR or continue.

**Cure:** Always present options in Step 2.

### ❌ Push to Main Directly

**Symptom:** Pushing changes directly to main.

**Why bad:** Bypasses review processes.

**Cure:** Use PR for non-trivial changes.

## Integration

**Required from:**
- `executing-plans` — after all tasks complete
- `subagent-driven-development` — after all tasks and review

**Requires:**
- Nothing — this is terminal skill for development workflow
