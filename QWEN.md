# Qwen Superpowers - Project Context

## Project Overview

**Qwen Superpowers** is an npm package that provides structured development workflow skills for Qwen Code. Inspired by [obra/superpowers](https://github.com/obra/superpowers), it enforces disciplined software development practices through composable skills.

### Purpose

Guide Qwen Code through a structured development process:
1. **Brainstorming** - Clarify requirements before coding
2. **Design** - Present designs in reviewable sections
3. **Planning** - Create detailed implementation plans
4. **Execution** - Execute via subagents with code review
5. **TDD** - Follow Red-Green-Refactor cycle
6. **Verification** - Test and clean up before completion

### Repository

- **URL**: https://github.com/ni032mas/superpowers-qwen
- **Package**: `superpowers-qwen@1.0.0`
- **License**: MIT

---

## Project Structure

```
qwen-skills/
├── package.json              # npm package configuration
├── qwen-extension.json       # Qwen extension manifest
├── README.md                 # User documentation
├── DEVELOPMENT.md            # Development guide
├── TESTING.md                # Testing instructions
├── .gitignore                # Git ignore rules
├── .gitattributes            # Line ending configuration
├── .githooks/                # Git hooks (commit-msg, pre-commit, etc.)
├── scripts/
│   ├── install-skills.js     # Postinstall: copies skills to ~/.qwen/skills/
│   ├── uninstall-skills.js   # Uninstall: removes skills interactively
│   └── cleanup-skills.js     # Cleanup: removes skills (for npm uninstall)
└── skills/                   # Skill definitions (copied to global on install)
    ├── brainstorming/
    ├── writing-plans/
    ├── executing-plans/
    ├── test-driven-development/
    ├── systematic-debugging/
    ├── requesting-code-review/
    ├── subagent-driven-development/
    └── finishing-a-development-branch/
```

---

## Building and Running

### Prerequisites

- Node.js >= 18.0.0
- npm
- Qwen Code CLI

### Installation (Local Development)

```bash
# Clone the repository
git clone git@github.com:ni032mas/superpowers-qwen.git
cd qwen-skills

# Install globally (copies skills to ~/.qwen/skills/)
npm install -g .
```

### Verify Installation

```bash
# Check skills are installed
dir %USERPROFILE%\.qwen\skills  # Windows
ls ~/.qwen/skills               # macOS/Linux

# In Qwen Code
/skills
```

### Uninstall

```bash
# Step 1: Remove skills
superpowers-qwen-cleanup

# Step 2: Remove package
npm uninstall -g superpowers-qwen
```

### Publishing

```bash
# Login to npm
npm login

# Bump version (major/minor/patch)
npm version patch

# Publish
npm publish --access public
```

---

## Development Conventions

### Git Hooks

Git hooks are configured via `.githooks/` directory:

```bash
git config core.hooksPath .githooks
```

**Available hooks:**
- `commit-msg` - Validates conventional commit format
- `pre-commit` - Runs before each commit
- `pre-merge-commit` - Runs before merge commits
- `pre-push` - Runs before push

### Git Workflow (MANDATORY)

#### Protected Branches
- **NEVER commit directly to `dev` or `main` branches** - always use feature branches
- Keep `main` branch stable and deployable
- Keep `dev` branch as integration branch

#### Branch Workflow
1. **Before creating branch**: Update `dev` with `git checkout dev && git pull --rebase`
2. **Before starting implementation**: Always ask user about creating a new feature branch from `dev`
3. **After completing work**: Always ask user about rebasing feature branch onto `dev` (`git rebase dev`)
4. **After rebase**: Always ask user about creating a Pull Request
5. **Direct merge to `dev` is FORBIDDEN** - only merge via approved Pull Request
6. **Use regular merge only** when rebase causes unresolvable conflicts - requires explicit human approval

#### Commit Rules
- Commit messages in English
- Follow conventional commit format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- No co-authors in commit messages

#### Other Rules
- **Do NOT use git worktrees** - work directly in the main repository on feature branches
- Write clear PR descriptions with context and screenshots if applicable
- Review code for style, correctness, tests, and documentation before merging
- Squash commits when merging PRs
- Tag releases with semantic versioning (vX.Y.Z)

### Commit Message Format

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description
```

**Valid types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `revert`

**Examples:**
```
feat: add user authentication
fix(server): resolve database connection issue
docs: update API documentation
chore: update dependencies
```

### Skill Structure

Each skill is a directory with a `SKILL.md` file:

```markdown
---
name: skill-name
description: Clear description with trigger keywords
disable-model-invocation: false
---

# Skill Name

## Overview
...

## Instructions
...
```

**Key fields:**
- `name` - Skill identifier (matches directory name)
- `description` - Triggers automatic activation (include keywords)
- `disable-model-invocation: false` - Enables automatic activation

### Skill Invocation

Skills can be invoked in Qwen Code:

1. **Slash command:** `/skills brainstorming`
2. **Explicit mention:** `use brainstorming skill to...`

---

## Available Skills

| Skill | Purpose |
|-------|---------|
| `brainstorming` | Explore requirements and design before coding |
| `writing-plans` | Create bite-sized implementation tasks |
| `executing-plans` | Execute tasks with review checkpoints |
| `test-driven-development` | RED-GREEN-REFACTOR cycle |
| `systematic-debugging` | 4-phase root cause analysis |
| `requesting-code-review` | Review code before merge |
| `subagent-driven-development` | Delegate tasks to subagents |
| `finishing-a-development-branch` | Verify, merge, and cleanup |

---

## Testing

### Full Test Cycle

```bash
# Build package
npm pack

# Install from tarball
npm install -g ./superpowers-qwen-1.0.0.tgz

# Verify skills installed
dir %USERPROFILE%\.qwen\skills

# Test in Qwen Code
# Use: /skills brainstorming

# Cleanup
superpowers-qwen-cleanup
npm uninstall -g superpowers-qwen
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `package.json` | npm configuration, scripts, bin commands |
| `qwen-extension.json` | Qwen extension manifest |
| `scripts/install-skills.js` | Copies skills to `~/.qwen/skills/` on install |
| `scripts/cleanup-skills.js` | Removes skills from `~/.qwen/skills/` |
| `skills/*/SKILL.md` | Skill definitions with instructions |
| `.githooks/commit-msg` | Validates commit message format |

---

## Notes

- Skills are copied to **global** Qwen directory (`~/.qwen/skills/`) on install
- npm `preuninstall` scripts don't work for global packages from registry
- Use `superpowers-qwen-cleanup` before `npm uninstall -g`
