# Qwen Superpowers

> **Inspired by** [obra/superpowers](https://github.com/obra/superpowers)

A collection of composable skills for Qwen Code that enforce structured software development workflows.

## 🎯 What is this?

Qwen Superpowers is a set of mandatory workflows that guide Qwen Code through disciplined software development practices. Instead of jumping straight into coding, the agent follows a structured process:

1. **Clarifies requirements** through brainstorming and questions
2. **Presents design** in small, reviewable sections
3. **Creates detailed implementation plans** with specific tasks
4. **Executes via subagents** with built-in code review
5. **Follows TDD** (Red-Green-Refactor) for all implementations
6. **Verifies and cleans up** before declaring completion

## 📦 Installation

### Option 1: Local install (for testing)

```bash
# Clone and install locally
git clone git@github.com:ni032mas/qwen-superpowers.git
cd qwen-superpowers
npm install -g .
```

### Option 2: From GitHub (requires auth for private repo)

First, create a GitHub Personal Access Token at https://github.com/settings/tokens

Then install:
```bash
# With token
npm install -g https://<TOKEN>@github.com/ni032mas/qwen-superpowers.git
```

Or add to `.npmrc`:
```
//github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

Then:
```bash
npm install -g github:ni032mas/qwen-superpowers
```

### Verify Installation

Ask Qwen Code something like:
```
use brainstorming skill to help me plan a feature
```

Or use the explicit command:
```
/skills brainstorming
```

### Uninstall

**Note:** Due to npm limitations, uninstall requires two steps:

```bash
# Step 1: Remove skills from ~/.qwen/skills/
qwen-superpowers-cleanup

# Step 2: Remove the npm package
npm uninstall -g qwen-superpowers
```

Or use the interactive uninstaller:
```bash
qwen-superpowers-uninstall
npm uninstall -g qwen-superpowers
```

**If you already removed the package**, cleanup skills manually:
```bash
qwen-superpowers-cleanup
```

Or remove manually:
```bash
# Windows
rmdir /s /q %USERPROFILE%\.qwen\skills\brainstorming
rmdir /s /q %USERPROFILE%\.qwen\skills\executing-plans
# ... repeat for each skill

# macOS/Linux
rm -rf ~/.qwen/skills/brainstorming
rm -rf ~/.qwen/skills/executing-plans
# ... repeat for each skill
```

## ⚡ Available Skills

| Skill | Description |
|-------|-------------|
| `brainstorming` | Clarifies ideas through questions before coding |
| `writing-plans` | Breaks work into 2-5 minute tasks with exact paths |
| `executing-plans` | Executes planned tasks systematically |
| `subagent-driven-development` | Delegates tasks to subagents with 2-stage review |
| `test-driven-development` | RED-GREEN-REFACTOR cycle for all code |
| `systematic-debugging` | 4-phase root cause analysis |
| `requesting-code-review` | Reviews work against the plan |
| `finishing-a-development-branch` | Verifies, commits, and cleans up |

## 🔄 Updating

```bash
# If installed via npm
npm update -g qwen-superpowers

# If installed from GitHub
npm update -g github:YOUR_USERNAME/qwen-superpowers

# If installed manually (Git)
cd qwen-superpowers
git pull
```

Then restart Qwen Code.

## 📚 Philosophy

- ✅ **TDD First** — tests always before implementation
- ✅ **Systematic** over ad-hoc approaches
- ✅ **Simplicity** as the primary goal
- ✅ **Evidence** over assertions
- ✅ **Review** before completion

---

*This project adapts the excellent [superpowers](https://github.com/obra/superpowers) workflow for Qwen Code.* 
